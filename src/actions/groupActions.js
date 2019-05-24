export const FETCH_USER_GROUPS_START = 'FETCH_USER_GROUPS_START';
export const FETCH_USER_GROUPS_SUCCESS = 'FETCH_USER_GROUPS_SUCCESS';
export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
export const FETCH_OHHAAYS_SUCCESS = 'FETCH_OHHAAYS_SUCCESS';

export const fetchUserGroups = token => {
  return dispatch => {
    dispatch({ type: FETCH_USER_GROUPS_START })
    fetchUserGroupsAPI(token)
      .then(groups => {
        dispatch({
          type: FETCH_USER_GROUPS_SUCCESS,
          payload: groups
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

export const setCurrentGroup = (token, groupId) => {
  return dispatch => {
    dispatch({ type: SET_CURRENT_GROUP, groupId })
    fetchGroupOhHaaysAPI(token, groupId)
      .then(ohHaays => {
        dispatch({
          type: FETCH_OHHAAYS_SUCCESS,
          payload: ohHaays
        })
      })
  }
}

export const fetchGroupOhHaaysAPI = (token, groupId) => {
  return fetch("http://localhost:3001/api/v1/ohhaays", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json());
}