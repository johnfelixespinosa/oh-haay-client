// CURRENTLY NOT IN USE. FEATURE IN PROGRESS...

export const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';

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
  return fetch("https://peaceful-castle-75215.herokuapp.com/api/v1/events", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json());
}