import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LoginButton extends Component {
  render() {
    return (
      <Button
        
        href={`http://localhost:3001/api/v1/meetup`}
      >{' '}
      Login with Meetup
      </Button>
    );
  }
}

export default LoginButton;