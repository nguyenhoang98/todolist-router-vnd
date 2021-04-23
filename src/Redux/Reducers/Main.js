import { combineReducers } from "redux";
import Tasks from "./Tasks";
const appReducers = combineReducers({
  Tasks: Tasks,
});

export default appReducers;
