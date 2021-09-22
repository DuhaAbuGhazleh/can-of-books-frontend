import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



 class UpdateBookForm extends Component {
    render() {

       

        
        
        return (
            <div>
                <Modal show={this.props.showUpdateModal} onHide={this.props.closeUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Modal Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>



                        <Form onSubmit={(e) => this.props.UpdateForm(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="title" onChange={(e) => this.props.updatetitle(e)} />

                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="description" onChange={(e) => this.props.updateDescription(e)} />

                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Status</Form.Label>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" onChange={(e) => this.props.updateStatus(e)} />

                            </Form.Group>

  <Button variant="primary" type = 'submit'>
                            update
                        </Button>
                     
                        </Form>
                      

                    </Modal.Body>
                  
                </Modal>
            </div>
        )
    }
}

export default UpdateBookForm;
