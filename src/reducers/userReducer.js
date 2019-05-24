import produce from 'immer';

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/authActions";

import {
  FETCH_GROUPS_START,
  FETCH_GROUPS_SUCCESS,
  SET_CURRENT_GROUP
} from '../actions/groupActions';


const initialState = {
  loading: false,
  currentGroup: null,
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
    case SET_CURRENT_GROUP:
      draft.currentGroup = action.groupId
      return;


    default:
      return;
  }
}, initialState)

export default userReducer;