import React, { Component } from 'react'
import axios from 'axios';
import BestBook from './components/BestBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

 class App extends Component {

  render() {
    return (
      <> 
    
      <Router>
       
         
      <Header />
        <Switch>
          <Route exact path="/">
            <BestBook/>
          </Route>
          <Route path="/first">
            <Home/>
          </Route>
          <Route path="/second">
            <Profile />
          </Route>
        </Switch>
              
      </Router> 
      <Footer />
    </>

    )
  }
}

export default App 


          
    
          
      
     