import { getQueryParams } from '../utils';
import { history } from '../index';

export const FETCH_TOKEN_START = 'FETCH_TOKEN_START';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const LOGOUT_USER_START = 'LOGOUT_USER_START';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const fetchToken = () => {
  return dispatch => {
    dispatch({ type: FETCH_TOKEN_START })
    const params = getQueryParams();
    localStorage.setItem("token", params.token)
    dispatch({
      type: FETCH_TOKEN_SUCCESS,
      payload: localStorage.getItem("token")
    })
    history.push('/main')
  }
}

export const fetchUser = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_START })
    fetchUserAPI()
      .then(response => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: response
        })
      })
  }
}

export const fetchUserAPI = () => {
  return fetch("https://peaceful-castle-75215.herokuapp.com/api/v1/profile", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER_START })
    localStorage.removeItem("token")
    dispatch({
      type: LOGOUT_USER_SUCCESS,
    })
    history.push('/')
  }
}