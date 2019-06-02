import produce from 'immer';

import {
  FETCH_TOKEN_START,
  FETCH_TOKEN_SUCCESS,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/userActions";

import {
  FETCH_USER_GROUPS_START,
  FETCH_USER_GROUPS_SUCCESS,
} from '../actions/groupActions';


const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {}
}

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_TOKEN_START:
      draft.isLoggedIn = false
      draft.loading = true
      return;
    case FETCH_TOKEN_SUCCESS:
      draft.isLoggedIn = true
      draft.loading = false
      return;
    case FETCH_USER_START:
    case FETCH_USER_GROUPS_START:
      draft.loading = true
      return;
    case FETCH_USER_SUCCESS:
      draft.loading = false
      draft.user = action.payload
      return;
    case FETCH_USER_GROUPS_SUCCESS:
      draft.loading = false
      draft.user.groups = action.payload
      return;
    default:
      return;
  }
}, initialState)

export default userReducer;