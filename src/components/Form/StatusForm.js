import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Header } from 'semantic-ui-react'
// import { getFormStatus, getFormEdit, getHasChanged } from "./Selectors";
// import { setupForm, saveForm } from './Thunk';
import { addChange, setupForm, saveForm, getFormStatus, getFormEdit, getHasChanged } from '../../actions/statusActions';
import TextInput from './TextInput';
import SaveBar from './SaveBar';

class StatusForm extends Component {

  componentWillMount() {
    this.props.setUpEditableForm();
  }

  render() {
    const {
      addChange,
      discardChanges,
      formStatus,
      formEdit,
      hasChanged,
      saveChanges,
    } = this.props;

    if (!formEdit || !formStatus) {
      return <span>LOADING</span>;
    }

    return (
      <Form>
        <Header textAlign="center">Your status for {this.props.group.name} </Header>
        <TextInput
          title='What are you working on...'
          handleChange={(newValue) => addChange('workingOn', newValue)}
        />
        <TextInput
          title='What would you like help with...'
          handleChange={(newValue) => addChange('inNeedOf', newValue)}
        />
        <TextInput
          title='What can you help with...'
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
const mapStateToProps = state => ({
  formStatus: getFormStatus(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = dispatch => ({
  addChange: (fieldName, fieldValue) => dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusForm);
