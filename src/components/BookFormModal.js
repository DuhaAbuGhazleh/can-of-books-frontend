import React, { Component } from 'react'
import { Modal,
     Button ,
     Form} from 'react-bootstrap';

 class BookFormModal extends Component {
    render() {


        return (
            <>
            <Modal show={this.props.showBookModal} onHide={this.props.closeCreateModal}>
                <Modal.Header closeButton>
                    <Modal.Title> Book Form </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handelSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter book title"
                            onChange={this.props.newTitle} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Book Description" 
                             rows={3}
                             onChange={this.props.newDescription}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Book status</Form.Label>
                            <Form.Control type="text" placeholder="Enter book status (new or used)" 
                            onChange={this.props.newStatus}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeCreateModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
    }
}

export default BookFormModal;

