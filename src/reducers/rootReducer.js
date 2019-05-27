import { combineReducers } from 'redux';
import userReducer from './userReducer';
import groupReducer from './groupReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  groupData: groupReducer,
  statusData: statusReducer
});

export default rootReducer;