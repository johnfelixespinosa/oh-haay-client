import produce from 'immer';
// import {
//   SIGNUP_USER_BEGIN,
//   SIGNUP_USER_SUCCESS,
//   SIGNUP_USER_ERROR,
//   LOGIN_USER_BEGIN,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_ERROR
// } from "../actions";

const initialState = {
  loading: false,
  error: null,
  loggedIn: false,
  user: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    
    default:
      return;
  }
}, initialState)

export default reducer;
