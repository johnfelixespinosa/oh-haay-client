export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const fetchUser = token => {
  return dispatch => {
    dispatch({ type: FETCH_USER_START })
    fetchUserAPI(token)
      .then(response => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: response
        })
      })
  }
}

export const fetchUserAPI = token => {
  return fetch("http://localhost:3001/api/v1/profile", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json());
}