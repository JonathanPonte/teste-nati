import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

const NewCourseModal = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Curso </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nome do curso: </Form.Label>
                    <Form.Control 
                                type="text" 
                                placeholder="Informe o nome do curso" 
                                name="nome"
                                onChange={props.onChange}
                                value={props.course.nome} />
                </Form.Group>

                <Form.Group controlId="formTurno">
                    <Form.Label>Turno:</Form.Label>
                    <Form.Control as="select" name="turno" onChange={props.onChange} value={props.course.turno}>
                        <option value="M">Manhã</option>
                        <option value="T">Tarde</option>
                        <option value="N">Noite</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSemestre" className={props.disableSemestre ? "d-none" : "" }>
                    <Form.Label>Quantidade de semestres: </Form.Label>
                    <Form.Control 
                                type="number" 
                                readOnly={props.disableSemestre}
                                title="Para editar a quantidade de semestres, vá para o fluxograma"
                                placeholder="Informe a quantidade de semestres total deste curso" 
                                name="semestres"
                                onChange={props.onChange} 
                                value={props.course.semestres} />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={props.onSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
)

export default NewCourseModal