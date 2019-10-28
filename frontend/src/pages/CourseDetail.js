import React from 'react'
import API from '../utils/API'
import Header from '../components/Header'
import './CourseDetail.css'

import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import SemesterCard from '../components/SemesterCard'

import { FaPlus, FaAngleLeft } from 'react-icons/fa'
import AddDisciplinaModal from '../components/AddDisciplinaModal'

export default class CourseDetail extends React.Component {

    constructor() {
        super()
        this.state = {
            course: {},
            showAddDisciplinaModal: false,
            addDisciplinaModal: {
                semestre: {},
                disciplina_id: -1
            }
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const {data} = await API.get(`cursos/${params.id}`)
        this.setState({ course: data })
        console.log(data)
    }
    
    handleOpenDisciplinaModal = (semestre) => {
        console.log(semestre);
        
        this.setState({ showAddDisciplinaModal: true, addDisciplinaModal: { semestre: semestre } })
    }

    handleCloseDisciplinaModal = () => {
        this.setState({ showAddDisciplinaModal: false })
    }

    handleSubmitDisciplinaModal = async (disciplina_id, semestre_id) => {
        const disciplina = {disciplina_id: disciplina_id}
        const {data} = await API.post(`semestres/${semestre_id}/disciplinas`, disciplina )
        this.setState( ps => ({ course: { ...ps.course, semestres: ps.course.semestres.map(sem => sem.id === semestre_id ? data : sem) }  }) )
        this.handleCloseDisciplinaModal()    
        
    }

    itemsToSelect = async () => {
        let items = [];   
        const {data} = await API.get("/disciplinas")
        data.map( (disciplina) => items.push({value: disciplina.id, name: disciplina.nome}) )
        return items
    }

    addSemester = async () => {
        const req = {ordem: this.state.course.semestres.length+1, curso_id: this.state.course.id}
        const {data} = await API.post("semestres", req)
        this.setState({ course: {...this.state.course, semestres: [...this.state.course.semestres, data] } })
    }

    deleteSemester = async (semestre_id) => {
        await API.delete(`semestres/${semestre_id}`)
        this.setState({ course: { ...this.state.course, semestres: this.state.course.semestres.filter(s=> s.id !== semestre_id ) }})
    }

    removeDisciplina = async (semestre_id, disciplina_id) => {
        console.log(semestre_id);
        console.log(disciplina_id);
        const {data} = await API.delete(`semestres/${semestre_id}/disciplinas/${disciplina_id}`)
        console.log(data);
        
        await this.setState( ps => ({ course: { ...ps.course, semestres: ps.course.semestres.map( s => s.id !== semestre_id ? s : data) }  }) )  

        //ps.courses.filter(c => c.id !== id )
        
    }




    render() {
        const user = JSON.parse( localStorage.getItem('user') ) 
        return (
            <React.Fragment>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h6 className="w-100 d-block">Fluxograma do curso</h6>
                        </div>
                        <div className="col-12 d-flex">
                            
                            <Link to="/courses" className="alignIconTop">
                                <button className="btn btn-link"><FaAngleLeft className="backIcon" /></button>
                            </Link>
                            <h4 className="title">{this.state.course.nome}</h4>
                            <button className={user.tipo !== "COORDENADOR" ? 'd-none' :"btn btn-outline-success ml-auto"} onClick={this.addSemester}><FaPlus className="alignIcon" /> Semestre</button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <Accordion defaultActiveKey="0">
                                {
                                    (this.state.course.semestres || [] ).map( (semestre, index) => {
                                        return (
                                        <React.Fragment key={index}>
                                        <SemesterCard
                                            eventKey={index}
                                            semester_number={semestre.ordem}
                                            disciplinas={semestre.disciplinas} 
                                            handleOpenModal={this.handleOpenDisciplinaModal} 
                                            semestre={semestre}
                                            removeDisciplina={this.removeDisciplina}
                                            deleteSemester={this.deleteSemester} />

                                        </React.Fragment>
                                            )
                                        }
                                    )
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>


                <AddDisciplinaModal
                    handleClose={this.handleCloseDisciplinaModal}
                    handleSubmitDisciplinaModal={this.handleSubmitDisciplinaModal}
                    show={this.state.showAddDisciplinaModal} 
                    semestre={this.state.addDisciplinaModal.semestre}
                    />

            </React.Fragment>
        )
    }

}