import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reducer from './reducer';

const rootReducer = combineReducers({
  global: reducer,
  user: userReducer
});

export default rootReducer;