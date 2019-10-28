import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

const NewUserModal = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Novo usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                                type="email" 
                                placeholder="Informe o email" 
                                name="email"
                                onChange={props.onChange}
                                value={props.user.email} />
                </Form.Group>

                <Form.Group controlId="formNome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                                type="text" 
                                placeholder="Informe o nome" 
                                name="nome"
                                onChange={props.onChange} 
                                value={props.user.nome} />
                </Form.Group>

                <Form.Group controlId="formSelect">
                    <Form.Label>Tipo de usuário:</Form.Label>
                    <Form.Control as="select" name="tipo" onChange={props.onChange} value={props.user.tipo}>
                        <option value="ALUNO">Aluno</option>
                        <option value="PROFESSOR">Professor</option>
                        <option value="COORDENADOR">Coordenador</option>
                        <option value="ADMINISTRADOR">Administrador</option>
                    </Form.Control>
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

export default NewUserModal