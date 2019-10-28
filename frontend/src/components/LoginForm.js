import React from 'react';
import API from '../utils/API';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
        }
    }

    onChangeHandler = (e) => {
        this.setState({ email: e.target.value })
    }

    onSubmitHandler = async (e) => {
        e.preventDefault()
        const data = { email: this.state.email }
        const response = await API.post('usuarios/login', data)
        if(response.data) {
            await localStorage.setItem('user', JSON.stringify(response.data) )
            this.redirectByRole(response.data.tipo)
        }
        else
            console.log("Email invalido");
    }

    render() {
        return(
            <form className="w-100" onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" placeholder="Informe seu email"
                        onChange={this.onChangeHandler}
                        />
                </div>
                <button type="submit" className="btn btn-primary mx-auto d-flex">Entrar</button>
            </form>
        )
    }

    redirectByRole(role) {
        switch(role) {
            case 'ADMINISTRADOR':
                this.props.history.push('/users')
                break
            case 'COORDENADOR':
            case 'ALUNO':
            case 'PROFESSOR':    
                this.props.history.push('/courses')
                break
            default:
                console.log("Email invalido");
                
        }
    }
}