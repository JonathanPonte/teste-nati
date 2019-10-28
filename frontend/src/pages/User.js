import React from 'react';

import UserTable from '../components/UsersTable'
import NewUserModal from '../components/NewUserModal'
import API from '../utils/API'
import Header from '../components/Header'

import './User.css'

export default class User extends React.Component {

    constructor() {
        super();
        this.state = {
          users: [],
          show: false,
          newUser: {
              nome: '',
              email: '',
              tipo: 'ALUNO'
          },
          showEdit: false,
          editUser: {
              id: '',
              nome: '',
              email: '',
              tipo: ''
          },
          current_user: {}
        }   
    }

    handleCloseModal = () => {
        this.setState({ show: false })
    }

    handleOpenModal = () => {
        this.setState({ show: true })
    }

    handleInputChange = async (e) => {
        await this.setState({  newUser: {...this.state.newUser, [e.target.name]:e.target.value } })
    }

    handleSubmitModal = async (e) => {
        e.preventDefault()
        const data = this.state.newUser
        const response = await API.post("usuarios", data)
        await this.setState(prevState => ({ users: [...prevState.users, response.data] }))
        this.handleCloseModal()
    }

    openEditModal = (user) => {
        this.setState({ showEdit: true, editUser: user })
    }

    closeEditModal = () => {
        this.setState({ showEdit: false })
    }

    inputChangeEdit = async (e) => {
        await this.setState({  editUser: {...this.state.editUser, [e.target.name]:e.target.value } })
    }

    submitChange = async (e) => {
        e.preventDefault()
        const data = this.state.editUser
        await API.put(`usuarios/${data.id}`, data)
        this.setState(ps => ({ users: ps.users.map(u => u.id === data.id ? data : u) }) )
        this.closeEditModal()
    }

    deleteUser = async (id) => {
        API.delete(`usuarios/${id}`).then( (res) => {
            this.setState(ps => ({ users: ps.users.filter(u => u.id !== id) }) )
        })

    }
    


    render() {
        return (
            <React.Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-outline-primary ml-auto d-flex my-3" onClick={this.handleOpenModal}>
                            Novo usuário
                        </button>
                        <UserTable 
                            users={this.state.users} 
                            openModal={this.openEditModal}
                            deleteUser={this.deleteUser } />
                    </div>
                </div>
            </div>
            <NewUserModal 
                    show={this.state.show}
                    onHide={this.handleCloseModal}
                    onSubmit={this.handleSubmitModal}
                    user={this.state.newUser}
                    onChange={this.handleInputChange} />
            <NewUserModal
                    show={this.state.showEdit}
                    onHide={this.closeEditModal}
                    onSubmit={this.submitChange} 
                    onChange={this.inputChangeEdit}
                    user={this.state.editUser} />

            </React.Fragment>
        )
    }

    async componentDidMount() {
        const { data } = await API.get("usuarios")
        this.setState({ users: data })
    }
    
}