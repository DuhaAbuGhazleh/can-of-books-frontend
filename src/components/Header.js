import React, { Component } from 'react'
import {Link} from "react-router-dom";

 class Header extends Component {
    render() {
        return (
            <div>
                <h1>Can of Books</h1>

             
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Beast Books</Link></li>
                    <li><Link to="/second">Profile</Link></li>
                </ul>
            
            </div>
        )
    }
}

export default Header
