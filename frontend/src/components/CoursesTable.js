import React from 'react'

import { FaEdit, FaTrashAlt, FaRegListAlt } from 'react-icons/fa'


const CoursesTable = (props) => {
    const user = JSON.parse( localStorage.getItem('user') ) 

    return(
        <table className="table userTable">
            <thead>
            <tr>
                <th>Curso</th>
                <th>Turno</th>
                <th>Semestres</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
                {  
                   (props.courses || [] ).map( (course, index) => {
                        return (
                            <tr key={index}>
                                <td>{course.nome}</td>
                                <td>{course.turno}</td>
                                <td>{course.semestres.length}</td>
                                <td>
                                    <button 
                                        className={user.tipo !== "COORDENADOR" ? 'd-none' :"btn btn-link"} 
                                        onClick={ () => props.openModal(course)} href="#"
                                        title="Editar"><FaEdit  /></button>
                                    <button 
                                        className={user.tipo !== "COORDENADOR" ? 'd-none' : "btn btn-link"}
                                        onClick={ () => props.deleteCourse(course.id)}
                                        title="Excluir"><FaTrashAlt /></button>  
                                    <button 
                                        className="btn btn-link" 
                                        onClick={ () => props.openDetails(course.id)}
                                        title="Fluxograma"><FaRegListAlt /></button> 
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}


export default CoursesTable