import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reducer from './reducer';

const rootReducer = combineReducers({
  global: reducer,
  user: authReducer
});

export default rootReducer;