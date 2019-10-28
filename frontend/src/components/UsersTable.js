import React from 'react';

import { FaUserEdit, FaTrashAlt } from 'react-icons/fa'

export const UsersTable = (props) => {
    

    return(
        <table className="table userTable">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
                {  
                   (props.users || [] ).map( (user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.tipo}</td>
                                <td>
                                    <button onClick={ () => props.openModal(user)} href="#" className="btn btn-link"><FaUserEdit  /></button>
                                    <button className="btn btn-link" onClick={ () => props.deleteUser(user.id)}><FaTrashAlt /></button>  
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}


export default UsersTable