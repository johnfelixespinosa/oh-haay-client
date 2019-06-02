export const ADD_MEMBERS_STATUS = 'ADD_MEMBERS_STATUS';
export const ADD_MEMBERS_STATUS_SUCCESS = 'ADD_MEMBERS_STATUS_SUCCESS';
export const SET_CLICKED_MEMBERS_STATUS = 'SET_CLICKED_MEMBERS_STATUS';
export const SET_CLICKED_MEMBERS_USER = 'SET_CLICKED_MEMBERS_USER';
export const SET_CLICKED_MEMBERS_STATUS_SUCCESS = 'SET_CLICKED_MEMBERS_STATUS_SUCCESS';

export function addStatus(token, group, status) {
  return function action(dispatch) {
    dispatch({ type: ADD_MEMBERS_STATUS, status })
    postUserGroupStatusAPI(token, group, status)
    .then(response => {
      dispatch({
        type: ADD_MEMBERS_STATUS_SUCCESS,
        payload: response
      })
    })
  }
}

export const postUserGroupStatusAPI = (token, group, status) => {
  let body = JSON.stringify({
    status: status,
    groupId: group.meetup_group_id
  });
  let data = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: body
  }
  console.log("body", body)
  return fetch(`http://localhost:3001/api/v1/statuses/new`, data)
}

export const setCurrentStatus = (token, group, user) => {
  return dispatch => {
    dispatch({ type: SET_CLICKED_MEMBERS_STATUS, group })
    dispatch({ type: SET_CLICKED_MEMBERS_USER, user})
    return fetchGroupMembersStatusAPI(token, group, user)
      .then(status => {
        dispatch({
          type: SET_CLICKED_MEMBERS_STATUS_SUCCESS,
          payload: status
        })
        return status
      })
      
  }
}

export const fetchGroupMembersStatusAPI = (token, group, member) => {
  let groupId = group.meetup_group_id
  let userId = member.id

  return fetch(`http://localhost:3001/api/v1/statuses/${userId}/${groupId}/fetch`, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}
