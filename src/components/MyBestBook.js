import React, { Component } from 'react'
import {Button, Card}from 'react-bootstrap';
 class MyBestBook extends Component {
    render() {
        return (
            <Card>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.email}</Card.Title>
              <Card.Text>{this.props.description} </Card.Text>
              <Button variant="primary" onClick={()=>{this.props.handleDelete(this.props.id)}}>DELETE</Button>
              <Button variant="primary" onClick={()=>{this.props.handleUpdate(this.props.id,this.props.title,this.props.description,this.props.email,this.props.status)}}>DELETE</Button>

            </Card.Body>
          </Card>
        )
    }
}

export default MyBestBook


