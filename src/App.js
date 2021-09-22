import React, { Component } from 'react';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import CanBookMain from './components/CanBookMain';
import { withAuth0 } from '@auth0/auth0-react';

//import BestBook from './components/BestBook';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Profile from './components/Profile';

export class App extends Component {
  render() {
    return (
      <div>
        <LoginButton/>
        <LogoutButton/>
        <CanBookMain/>
      </div>
    )
  }
}

export default withAuth0(App)
