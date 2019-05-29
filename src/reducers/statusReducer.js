import produce from 'immer';

import {
  ADD_MEMBERS_STATUS,
  ADD_MEMBERS_STATUS_SUCCESS,
  SET_CLICKED_MEMBERS_STATUS,
  SET_CLICKED_MEMBERS_USER,
  SET_CLICKED_MEMBERS_STATUS_SUCCESS,
} from '../actions/statusActions';

const initialState = {
  adding: false,
  status: null,
  user: null,
};

const statusReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_MEMBERS_STATUS:
      draft.adding = true
      return;
    case ADD_MEMBERS_STATUS_SUCCESS:
      draft.adding = false
      return;
    case SET_CLICKED_MEMBERS_USER:
      draft.user = action.user
      // draft.group = action.group
      // draft.user = action.user
      return;
    case SET_CLICKED_MEMBERS_STATUS:
      draft.status = action.status
      return;
    case SET_CLICKED_MEMBERS_STATUS_SUCCESS:
      draft.currentUserGroupStatus = action.payload
      return;

    default:
      return;
  }
}, initialState)

export default statusReducer;