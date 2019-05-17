import produce from 'immer';

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/authActions";


const initialState = {
  loading: false,
  name: "",
  meetup_id: "",
  meetup_profile_url: "",
  photo_url: "",
  city: "",
  token: ""
}

const authReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      draft.loading = true
      return;
    case FETCH_USER_SUCCESS:
      draft.loading = false
      draft.name = action.payload.name
      draft.meetup_id = action.payload.meetup_id
      draft.meetup_profile_url = action.payload.meetup_profile_url
      draft.photo_url = action.payload.photo_url
      draft.city = action.payload.city
      return;

    default:
      return;
  }
}, initialState)

export default authReducer;