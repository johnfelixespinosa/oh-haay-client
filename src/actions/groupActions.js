export const FETCH_GROUPS_START = 'FETCH_GROUPS_START';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
// export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const fetchUserGroups = token => {
  return dispatch => {
    dispatch({ type: FETCH_GROUPS_START })
    fetchUserGroupsAPI(token)
      .then(response => {
        dispatch({
          type: FETCH_GROUPS_SUCCESS,
          payload: response
        })
      })
  }
}

export const fetchUserGroupsAPI = token => {
  return fetch("http://localhost:3001/api/v1/groups", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json());
}