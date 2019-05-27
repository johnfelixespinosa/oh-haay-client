import React, { Component } from 'react';
import { Button, Form, TextArea, Header } from 'semantic-ui-react'
import TextInput from './Form/TextInput';
import SaveBar from './Form/SaveBar';

class StatusForm extends Component {

  // componentWillMount() {
  //   this.props.setUpEditableForm();
  // }

  render() {
    const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges,
    } = this.props;

    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }

    return (
      <Form>
        <Header textAlign="center">Your status for {this.props.group.name} </Header>
        <TextInput
          placeholder='What are you working on...'
          handleChange={(newValue) => addChange('workingOn', newValue)}
        />
        <TextInput
          placeholder='What would you like help with...'
          handleChange={(newValue) => addChange('inNeedOf', newValue)}
        />
        <TextInput
          placeholder='What can you help with...'
          handleChange={(newValue) => addChange('offering', newValue)}
        />
        <SaveBar
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction={saveChanges}
        />
      </Form >
    )
  }
}

export default StatusForm;
