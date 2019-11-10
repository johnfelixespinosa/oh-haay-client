export const FETCH_USER_GROUPS_START = 'FETCH_USER_GROUPS_START';
export const FETCH_USER_GROUPS_SUCCESS = 'FETCH_USER_GROUPS_SUCCESS';
export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';

export const fetchUserGroups = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_GROUPS_START })
    fetchUserGroupsAPI()
      .then(groups => {
        dispatch({
          type: FETCH_USER_GROUPS_SUCCESS,
          payload: groups
        })
      })
  }
}

export const fetchUserGroupsAPI = () => {
  return fetch("https://peaceful-castle-75215.herokuapp.com/api/v1/groups", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}

export const setCurrentGroup = (token, group) => {
  return dispatch => {
    dispatch({ type: SET_CURRENT_GROUP, group })
    fetchGroupMembersAPI(token, group)
      .then(members => {
        dispatch({
          type: FETCH_MEMBERS_SUCCESS,
          payload: members
        })
      })
  }
}

export const fetchGroupMembersAPI = (token, group) => {
  let groupId = group.meetup_group_id
  return fetch(`https://peaceful-castle-75215.herokuapp.com/api/v1/groups/${groupId}/users`, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}

export const addMemberGroupStatus = (token, group) => {
  let groupId = group.meetup_group_id
  return fetch(`https://peaceful-castle-75215.herokuapp.com/api/v1/groups/${groupId}/users`, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}
