export const ADD_CHANGE = 'ADD_CHANGE';
export const SETUP_EDIT_FORM = 'SETUP_EDIT_FORM';
export const EDIT_FORM_PENDING = 'EDIT_FORM_PENDING';
export const EDIT_FORM_SUCCESS = 'EDIT_FORM_SUCCESS';

export function getFormStatus(state) {
  return state.statusData.status.data;
}

export function getFormEdit(state) {
  return state.statusData.edit.data;
}

export function getHasChanged(state) {
  return state.statusData.edit.changed;
}

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

export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getFormStatus(getState());
    dispatch(setNewEditableForm(form));
  }
}

export function saveForm() {
  return function _saveForm(dispatch, getState) {
    dispatch(editFormPending());
    const form = getFormEdit(getState());
    dispatch(editFormSuccess(form));
    postUserGroupStatusAPI(token, group, form)
  }
}

export const postUserGroupStatusAPI = (token, group, form) => {
  let groupId = group.meetup_group_id
  let data = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ form })
  }
}