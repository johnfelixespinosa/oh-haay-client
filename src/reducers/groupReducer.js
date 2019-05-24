import produce from 'immer';

import {
  SET_CURRENT_GROUP,
  FETCH_MEMBERS_SUCCESS,
} from '../actions/groupActions';


const initialState = {
  loading: false,
  currentGroup: null
}

const groupReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_CURRENT_GROUP:
      draft.currentGroup = action.group
      return;
    case FETCH_MEMBERS_SUCCESS:
      draft.currentGroup.members = action.payload
      return;

    default:
      return;
  }
}, initialState)

export default groupReducer;