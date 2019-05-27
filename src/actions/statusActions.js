export const ADD_CHANGE = 'ADD_CHANGE';
export const SETUP_EDIT_FORM = 'SETUP_EDIT_FORM';
export const EDIT_FORM_PENDING = 'EDIT_FORM_PENDING';
export const EDIT_FORM_SUCCESS = 'EDIT_FORM_SUCCESS';

export const addChange = (fieldName, fieldValue) => ({
  type: ADD_CHANGE,
  fieldName,
  fieldValue
});

export const setNewEditableForm = form => ({
  type: SETUP_EDIT_FORM,
  form,
});

export const editFormPending = () => ({
  type: EDIT_FORM_PENDING,
});

export const editFormSuccess = form => ({
  type: EDIT_FORM_SUCCESS,
  form
});