import React, { useState, useEffect } from 'react'

import { Button, Modal, Form } from 'react-bootstrap';
import API from '../utils/API';

const AddDisciplinaModal = (props) => {

    const [options, setOptions] = useState(null)
    const [selectedOption, setSelectedOption] = useState(0)

    useEffect(() => {
        const getOptions = async () => {
            API.get("/disciplinas").then( res => {
                const op = res.data.map( disciplina => {
                    return <option key={disciplina.id} value={disciplina.id}>{disciplina.nome}</option>
                })
                setOptions(op)
            })
        }
        getOptions()
    }, [])

    return(
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.semestre.ordem}º Semestre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formTurno">
                <Form.Label>Disciplina:</Form.Label>
                <Form.Control as="select" name="turno" onChange={ e => setSelectedOption(e.target.value)} >
                    <option val="">Selecione</option>
                    {options}
                </Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={ () => props.handleSubmitDisciplinaModal(selectedOption, props.semestre.id) }>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddDisciplinaModal