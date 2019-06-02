import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class LogoutButton extends Component {

  handleClick = () => {
    this.props.logoutUser()
  }

  render() {
    return (
      <Button
      onClick={this.handleClick}
      >
      Logout
      </Button>
    );
  }
}

export default LogoutButton;