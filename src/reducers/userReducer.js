import produce from 'immer';

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/authActions";

import { 
  FETCH_GROUPS_START, 
  FETCH_GROUPS_SUCCESS 
} from '../actions/groupActions';


const initialState = {
  loading: false,
  user: {}
}

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_USER_START:
    case FETCH_GROUPS_START:
      draft.loading = true
      return;
    case FETCH_USER_SUCCESS:
      draft.loading = false
      draft.user = action.payload
      return;
    case FETCH_GROUPS_SUCCESS:
      draft.loading = false
      draft.user.groups = action.payload
      return;

    default:
      return;
  }
}, initialState)

export default userReducer;