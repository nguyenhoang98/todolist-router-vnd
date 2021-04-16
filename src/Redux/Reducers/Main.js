import { combineReducers } from "redux";
import Tasks from "./Tasks";
import TaskAll from "./TaskAll";
const appReducers = combineReducers({
  Tasks: Tasks,
  TaskAll: TaskAll,
});

export default appReducers;
