import React, { Component } from 'react';
import LoginButton from '../components/LoginButton';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h1 className="oh-haay-logo">oh-haay!</h1>
        </div>
        <p className="Login-intro">
          An app to to connect better on meetup.
          </p>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;