import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class LoginButton extends Component {
  render() {
    return (
      <Button
        href={`https://peaceful-castle-75215.herokuapp.com/api/v1/meetup`}
        size="massive"
        className="ui red change"
        color="pink"
      ><Icon name='meetup' />
      Login with Meetup
      </Button>
    );
  }
}

export default LoginButton;
