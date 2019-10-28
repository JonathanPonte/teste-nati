import React from 'react'

import { NavLink } from 'react-router-dom'

import { DropdownButton } from 'react-bootstrap'

import './Header.css'

const Header = (props) => {

    const adminMenu = () => {
        return (
            <header className="w-100">
                <DropdownButton title={user.nome}>
                    <NavLink to="/users" activeClassName="selected" className="dropdown-item">
                        Usuarios
                    </NavLink>
                    <NavLink to="/" activeClassName="selected" className="dropdown-item">
                        Sair
                    </NavLink>
                </DropdownButton>
            </header>
        )
    }

    const coordenadorMenu = () => {
        return (
            <header className="w-100">
                <DropdownButton title={user.nome}>
                    <NavLink to="/courses" activeClassName="selected" className="dropdown-item">
                        Cursos
                    </NavLink>
                    <NavLink to="/disciplines" activeClassName="selected" className="dropdown-item">
                        Disciplinas
                    </NavLink>
                    <NavLink to="/" activeClassName="selected" className="dropdown-item">
                        Sair
                    </NavLink>
                </DropdownButton>
            </header>
        )
    }

    const defaultMenu = () => {
        return (
            <header className="w-100">
                <DropdownButton title={user.nome}>
                    <NavLink to="/courses" activeClassName="selected" className="dropdown-item">
                        Cursos
                    </NavLink>
                    <NavLink to="/" activeClassName="selected" className="dropdown-item">
                        Sair
                    </NavLink>
                </DropdownButton>
            </header>
        )
    }

    const user = JSON.parse( localStorage.getItem('user') ) 
    switch(user.tipo) {
        case "ADMINISTRADOR": 
            return adminMenu()
        case "COORDENADOR":
            return coordenadorMenu()
        case "ALUNO":
        case "PROFESSOR":
            return defaultMenu()
        default:
            return null
        
    }
    /* return(
    <header className="w-100">
        <DropdownButton title={user.nome}>
            <NavLink to="/" activeClassName="selected" className="dropdown-item">
                Sair
            </NavLink>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    </header>
    ) */

    
}



export default Header