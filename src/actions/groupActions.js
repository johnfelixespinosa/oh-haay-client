export const FETCH_USER_GROUPS_START = 'FETCH_USER_GROUPS_START';
export const FETCH_USER_GROUPS_SUCCESS = 'FETCH_USER_GROUPS_SUCCESS';
export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';

// const BASE_API = "http://localhost:3001/api/v1"
const NETLIFY_BASE_API = "https://peaceful-castle-75215.herokuapp.com/api/v1"

// const API_CONSTANT_MAP = {
//   "groups": `${BASE_API}/groups/`,
//   "group_members": `${BASE_API}/groups/`,
//   "new_status": `${BASE_API}/statuses/new`,
//   "set_status": `${BASE_API}/statuses/`,
//   "profile": `${BASE_API}/profile`,
//   "login": `${BASE_API}/meetup`
// }

const NETFLIFY_API_CONSTANT_MAP = {
  "groups": `${NETLIFY_BASE_API}/groups/`,
  "group_members": `${NETLIFY_BASE_API}/groups/`,
  "new_status": `${NETLIFY_BASE_API}/statuses/new`,
  "set_status": `${NETLIFY_BASE_API}/statuses/`,
  "profile": `${NETLIFY_BASE_API}/profile`,
  "login": `${NETLIFY_BASE_API}/meetup`
}

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
  return fetch(NETFLIFY_API_CONSTANT_MAP.groups, {
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
  return fetch(NETFLIFY_API_CONSTANT_MAP.group_members + `${groupId}/users`, {
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
  return fetch(NETFLIFY_API_CONSTANT_MAP.group_members + `${groupId}/users`, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json());
}