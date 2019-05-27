import {getFormEdit, getFormStatus} from './Selectors';
import { editFormSuccess, editFormPending, setNewEditableForm} from '../../actions/statusActions';


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
  }
}