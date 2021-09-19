import React, { Component } from 'react'

 class OwnerBooks extends Component {
    render() {
        return (
            
                <div>
                    <h1>{this.props.title}</h1>
                    <br />
                    <p>{this.props.description}</p>
                    
                    <hr />
                    <h2>{this.props.status}</h2>
                </div>
        )
    }
}

export default OwnerBooks
