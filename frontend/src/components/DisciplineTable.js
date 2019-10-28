import React from 'react'

import { FaEdit, FaTrashAlt } from 'react-icons/fa'


const DisciplineTable = (props) => {
    

    return(
        <table className="table userTable">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Creditos</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
                {  
                   (props.disciplines || [] ).map( (discipline, index) => {
                        return (
                            <tr key={index}>
                                <td>{discipline.nome}</td>
                                <td>{discipline.credito}</td>
                                <td>
                                    <button 
                                        className="btn btn-link" 
                                        onClick={ () => props.openModal(discipline)} href="#"
                                        title="Editar"><FaEdit  /></button>
                                    <button 
                                        className="btn btn-link" 
                                        onClick={ () => props.deleteRecord(discipline.id)}
                                        title="Excluir"><FaTrashAlt /></button>  
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}


export default DisciplineTable