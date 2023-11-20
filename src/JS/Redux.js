// index.js
import { combineReducers } from "redux";
import taskReducer from './Reducers';

export default combineReducers({
  tasks: taskReducer,
});
