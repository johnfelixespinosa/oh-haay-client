export const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
// export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const fetchUserGroupsEvents = token => {
  return dispatch => {
    dispatch({ type: FETCH_EVENTS_START })
    fetchUserGroupsEventsAPI(token)
      .then(events => {
        dispatch({
          type: FETCH_EVENTS_SUCCESS,
          payload: events
        })
      })
  }
}

export const fetchUserGroupsEventsAPI = token => {
  return fetch("http://localhost:3001/api/v1/events", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json());
}