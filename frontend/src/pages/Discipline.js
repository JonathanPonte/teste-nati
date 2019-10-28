import React from 'react'
import API from '../utils/API'
import DisciplineTable from '../components/DisciplineTable'
import Header from '../components/Header'
import DisciplineModal from '../components/DisciplineModal'

export default class Discipline extends React.Component {

    constructor(){
        super()
        this.state = {
            disciplinas: [],
            newDisciplina: {
                nome: '',
                credito: ''
            },
            showModal: false,
            showEditModal: false,
            editDiscipline: {
                id: -1,
                nome: '',
                credito: ''
            }
        }
    }


    async componentDidMount() {
       const {data} = await API.get("disciplinas")
       this.setState({ disciplinas: data })
    }

    handleOpenModal = () => {
        this.setState({showModal: true})
    }

    handleCloseModal = () => {
        this.setState({showModal: false, showEditModal: false})
    }

    handleChangeModal = (e) => {
        this.setState({  newDisciplina: {...this.state.newDisciplina, [e.target.name]:e.target.value } })
    }

    handleSubmitModal = async (e) => {
        e.preventDefault()
        const data = this.state.newDisciplina
        const response = await API.post("disciplinas", data)
        this.setState(prevState => ({ disciplinas: [...prevState.disciplinas, response.data], newDisciplina: { nome: '', credito: 0 } }))
        this.handleCloseModal()
    }

    handleOpenEditModal = (disciplina) => {
        this.setState({ showEditModal: true, editDiscipline: disciplina })
    }

    handleChangeEditModal = (e) => {
        this.setState({  editDiscipline: {...this.state.editDiscipline, [e.target.name]:e.target.value } })
    }

    handleSubmitEditModal = async (e) => {
        e.preventDefault()
        const data = this.state.editDiscipline
        await API.put(`disciplinas/${data.id}`, data)
        this.setState(ps => ({ disciplinas: ps.disciplinas.map(d => d.id === data.id ? data : d) }))
        this.handleCloseModal()
    }

    handleDeleteDiscipline = async (id) => {
        await API.delete(`disciplinas/${id}`)
        await this.setState( ps => ({ disciplinas: ps.disciplinas.filter(d => d.id !== id ) }) )
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-outline-primary ml-auto d-flex my-3" onClick={this.handleOpenModal}>
                                Nova disciplina
                            </button>
                            <DisciplineTable 
                                disciplines={this.state.disciplinas}
                                openModal={this.handleOpenEditModal}
                                deleteRecord={this.handleDeleteDiscipline} />
                        </div>
                    </div>
                </div>
                <DisciplineModal 
                    show={this.state.showModal} 
                    onHide={this.handleCloseModal}
                    onChange={this.handleChangeModal}
                    onSubmit={this.handleSubmitModal}
                    disciplina={this.state.newDisciplina} />
                <DisciplineModal
                    show={this.state.showEditModal}
                    onHide={this.handleCloseModal}
                    onChange={this.handleChangeEditModal}
                    onSubmit={this.handleSubmitEditModal}
                    disciplina={this.state.editDiscipline} />
                    
            </React.Fragment>
        )
    }

}