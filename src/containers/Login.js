import React, { Component } from 'react';
import LoginButton from '../components/LoginButton';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            oh-haay!
          </h2>
          <p className="Login-intro">
            An app to to connect better on meetup.
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;