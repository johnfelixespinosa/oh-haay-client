import { combineReducers } from 'redux';
import userReducer from './userReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  groupData: groupReducer
});

export default rootReducer;