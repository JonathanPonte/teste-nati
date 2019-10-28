import React from 'react'

import { Card, Accordion } from 'react-bootstrap'
import DisciplinaDetail from './DisciplinaDetail'

const SemesterCard = (props) => {
    const user = JSON.parse( localStorage.getItem('user') ) 
    return (
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
            {props.semester_number}º Semestre
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>
                {
                    ( props.disciplinas || [] ).map( (disciplina, index) => {
                        return (
                            <DisciplinaDetail 
                                key={index}
                                disciplina={disciplina}
                                removeDisciplina={props.removeDisciplina}
                                semestre_id={props.semestre.id} />
                        )
                    }
                    )
                }
                <div className={user.tipo !== "COORDENADOR" ? 'd-none' :"row"}>
                    <div className="col-12 d-flex">
                    <button 
                        className="btn btn-link pl-0"
                        onClick={() => props.handleOpenModal(props.semestre)}>Adicionar disciplina</button>

                    <button
                        className="btn btn-outline-danger ml-auto"
                        onClick={() => props.deleteSemester(props.semestre.id) }>Excluir semestre</button>
                    </div>
                </div>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default SemesterCard