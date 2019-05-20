import { combineReducers } from 'redux';
import authReducer from './authReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  user: authReducer,
  userGroups: groupReducer
});

export default rootReducer;