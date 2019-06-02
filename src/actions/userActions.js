import { getQueryParams } from '../utils';
import { history } from '../index';

export const FETCH_TOKEN_START = 'FETCH_TOKEN_START';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

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
  return fetch("http://localhost:3001/api/v1/profile", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}