import produce from 'immer';
import { combineReducers } from 'redux';

import {
  ADD_CHANGE,
  SETUP_EDIT_FORM,
  EDIT_FORM_PENDING,
  EDIT_FORM_SUCCESS
} from '../actions/statusActions';

const initialState = {
  status: {
    data: {
      workingOn: null,
      inNeedOf: null,
      offering: null
    },
  },
  edit: {
    status: null,
    data: null,
    changed: null,
  }
};

const statusReducer = produce((draft, action) => {
  switch (action.type) {
    case EDIT_FORM_SUCCESS:
      draft.data = action.form
      return;
    default:
      return;
  }
}, initialState.status)

const editReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_CHANGE:
      const newForm = draft.data ;
      newForm[action.fieldName] = action.fieldValue;
      draft.changed = true
      draft.data = newForm
      return;
    case SETUP_EDIT_FORM:
      draft.changed = false
      draft.data = action.form
      return;
    case EDIT_FORM_PENDING:
      draft.changed = true
      return;
    case EDIT_FORM_SUCCESS:
      draft.changed = false
      draft.data = action.form
      return;
    default:
      return;
  }
}, initialState.edit)

export default combineReducers({
  status: statusReducer,
  edit: editReducer,
});