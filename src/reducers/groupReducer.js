import produce from 'immer';

import {
  SET_CURRENT_GROUP
} from '../actions/groupActions';


const initialState = {
  loading: false,
  currentGroup: null
}

const groupReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_CURRENT_GROUP:
      draft.currentGroup = action.groupId
      return;


    default:
      return;
  }
}, initialState)

export default groupReducer;