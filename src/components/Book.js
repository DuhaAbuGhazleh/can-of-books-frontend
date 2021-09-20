import React, { Component } from 'react'

 class Book extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.user.userName}</h1>
                <p>{this.props.description}</p>
                <h2>{this.props.status}</h2>
                <button onClick={()=>this.props.handleDelete(this.props.bookId)}>Delete</button>
            </div>
        )
    }
}

export default Book
