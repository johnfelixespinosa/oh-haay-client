import React, { Component } from 'react';
import LoginButton from '../components/LoginButton';
import { Segment, Dimmer } from 'semantic-ui-react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Dimmer.Dimmable as={Segment} dimmed
          textAlign='center'
          style={{ minHeight: 300, padding: '1em 0em' }}
          vertical
          className="dimme"
        >

          <div className="login-header">
            <h1 className="oh-haay-logo-home">oh-haay!</h1>
          </div>
          <p className="login-intro">
            Connect better on meetup.
           </p>
          <div className="login-buttons">
            <LoginButton />
          </div>

        </Dimmer.Dimmable>
      </div >
    );
  }
}

export default Login;