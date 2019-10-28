import React from 'react'
import API from '../utils/API'
import CoursesTable from '../components/CoursesTable'
import Header from '../components/Header'
import NewCourseModal from '../components/NewCourseModal'

export default class Courses extends React.Component {

    current_user = {}

    constructor() {
        super()
        this.state = {
            courses: [],
            newCourse: {
                nome: '',
                turno: 'M',
                semestres: 0
            },
            showCreateCourseModal: false,
            editCourse: {
                id: -1,
                nome: '',
                turno: '',
                semestres: 0
            },
            showEditCourseModal: false
        }
    }

    handleCloseModal = () => {
        this.setState({ showCreateCourseModal: false, showEditCourseModal: false })
    }

    handleOpenModal = () => {
        this.setState({ showCreateCourseModal: true })
    }

    handleOpenEditModal = (course) => {
        this.setState({ showEditCourseModal: true, editCourse: course })
    }

    handleInputChange = (e) => {
        this.setState({  newCourse: {...this.state.newCourse, [e.target.name]:e.target.value } })
    }

    handleEditInputChange = (e) => {
        this.setState({ editCourse: {...this.state.editCourse, [e.target.name]: e.target.value } })
    }

    handleSubmitModal = async (e) => {
        e.preventDefault()
        const data = this.state.newCourse
        const response = await API.post("cursos", data)
        await this.setState(prevState => ({ courses: [...prevState.courses, response.data] }))
        this.handleCloseModal()
    }

    handleSubmitEditModal = async (e) => {
        e.preventDefault()
        const data = this.state.editCourse
        
        await API.put(`cursos/${data.id}`, data)
        data.courses = new Array(data.courses)
        await this.setState( ps => ({ courses: ps.courses.map(c => c.id === data.id ? data : c ) }) )
        this.handleCloseModal()
    }

    handleDelteCourse = async (id) => {
        await API.delete(`cursos/${id}`)
        await this.setState( ps => ({ courses: ps.courses.filter(c => c.id !== id ) }) )
    }


    openDetails = (id) => {
        this.props.history.push(`/course/${id}`)
    }


    async componentDidMount() {
        const {data} = await API.get("cursos")
        this.setState({ courses: data })
    }

    render() {
        const user = JSON.parse( localStorage.getItem('user') ) 

            return (
                <React.Fragment>
                    <Header />
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <button className={user.tipo !== "COORDENADOR" ? 'd-none' : 'btn btn-outline-primary ml-auto d-flex my-3'  } onClick={this.handleOpenModal}>
                                    Novo curso
                                </button>
                                <CoursesTable 
                                    courses={this.state.courses}
                                    openModal={this.handleOpenEditModal}
                                    deleteCourse={this.handleDelteCourse}
                                    openDetails={this.openDetails}
    
                                     />
                            </div>
                        </div>
                    </div>
                    <NewCourseModal
                        show={this.state.showCreateCourseModal}
                        onHide={this.handleCloseModal}
                        onChange={this.handleInputChange}
                        onSubmit={this.handleSubmitModal}
                        disableSemestre={false}
                        course={this.state.newCourse} />
                    <NewCourseModal
                        show={this.state.showEditCourseModal}
                        onHide={this.handleCloseModal}
                        onChange={this.handleEditInputChange}
                        onSubmit={this.handleSubmitEditModal}
                        disableSemestre={true}
                        course={this.state.editCourse} />
                </React.Fragment>
            )

        }
    

}