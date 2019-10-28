import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

const DisciplineModal = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Nova disciplina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                                type="text" 
                                placeholder="Informe o nome da disciplina" 
                                name="nome"
                                onChange={props.onChange}
                                value={props.disciplina.nome} />
                </Form.Group>

                <Form.Group controlId="formSemestre">
                    <Form.Label>Quantidade de créditos: </Form.Label>
                    <Form.Control 
                                type="number"
                                placeholder="Exemplo: 4" 
                                name="credito"
                                onChange={props.onChange}
                                value={props.disciplina.credito} />
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

export default DisciplineModal