import React, { Component } from 'react';
import { Button, Form, TextArea, Header } from 'semantic-ui-react'

class StatusForm extends Component {
  state = {
  }

  render() {
    return (
      <Form>
        <Header textAlign="center">Your status for {this.props.group.name} </Header> 
        <TextArea placeholder='What are you working on...' />
        <TextArea placeholder='What would you like help with...' />
        <TextArea placeholder='What can you help with...' />
        <Button color="green" floated="right" type="submit">Submit</Button>
      </Form >
    )
  }
}

export default StatusForm;
