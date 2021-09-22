import React, { Component } from 'react'
import { Button, Carousel } from 'react-bootstrap';
import UpdateBookForm from './UpdateBookForm';

class MyBestBook extends Component {
    constructor() {
        super();
        this.state = {
            showUpdateModal: false,
        }
    }
    closeUpdateModal = () => this.setState({ showUpdateModal: false });
    render() {
        const {
            databook,
            handleDelete,
            updatetitle,
            updateDescription,
            updateStatus,
            UpdateForm,
        } = this.props


        return (
            <>
                <Carousel>
                    {                            

                        databook.map ((e, index) => {
                            console.log(e);
                            return (

                                <Carousel.Item key={index} >
                                    <img
                                        className="d-block w-100"
                                        src="https://media.istockphoto.com/photos/bookshelves-in-the-library-with-old-books-3d-render-picture-id1180993120?k=20&m=1180993120&s=612x612&w=0&h=gpqL2FMcHxizB727xz4Iy6larvpJi2LQaIOd0Hsz-jw="
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{e.title}</h3>
                                        <p>{e.description}</p>
                                        <small>{e.status}</small><br />
                                        <Button
                                            className='m-3'
                                            variant='outline-light '
                                            onClick={() => { handleDelete(e._id) }}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            className='m-3'
                                            variant='outline-light '
                                            onClick={() => (this.setState({ showUpdateModal: true }))}
                                        >
                                            Update
                                        </Button>
                                    </Carousel.Caption>
                                    <UpdateBookForm
                                        showUpdateModal={this.state.showUpdateModal}
                                        closeUpdateModal={this.closeUpdateModal}
                                        UpdateForm={UpdateForm}
                                        updatetitle={updatetitle}
                                        updateDescription={updateDescription}
                                        updateStatus={updateStatus}
                                        bookid={e._id}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }

                </Carousel>

            </>
        );
    }
}

export default MyBestBook



