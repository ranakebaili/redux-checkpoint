import { combineReducers } from "redux";
import taskReducer from "./Reducers";

const rootreducer=combineReducers({taskReducer})

export default rootreducer;