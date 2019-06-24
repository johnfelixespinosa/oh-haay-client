import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import TextInput from '../components/Form/TextInput';

const StatusForm = (props) => {

  return (
    <Form onSubmit={props.onSubmitStatus}>
      <Header textAlign="center">Your status for {props.group.name} </Header>
      <TextInput
        title='What are you working on...'
        name="working_on"
        onChange={props.handleStatusChange}
        value={props.status.working_on}
      />
      <TextInput
        title='What would you like help with...'
        name="need"
        onChange={props.handleStatusChange}
        value={props.status.need}
      />
      <TextInput
        title='What can you help with...'
        name="offering"
        onChange={props.handleStatusChange}
        value={props.status.offering}
      />
      <Button
        type="submit">
        Submit Status
      </Button>
    </Form >
  )
}

export default StatusForm;
