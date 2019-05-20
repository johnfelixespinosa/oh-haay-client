import produce from 'immer';

import {
  FETCH_GROUPS_START,
  FETCH_GROUPS_SUCCESS,
} from "../actions/groupActions";


const initialState = {
  groups: {}
}

const groupReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_GROUPS_START:
      draft.loading = true
      return;
    case FETCH_GROUPS_SUCCESS:
      draft.loading = false
      draft.groups = action.payload
      return;

    default:
      return;
  }
}, initialState)

export default groupReducer;