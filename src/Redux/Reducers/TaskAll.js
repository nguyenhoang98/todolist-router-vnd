import * as tasksConstants from "../../Constants/index";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === tasksConstants.FETCH_API_ALL_TASK_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === tasksConstants.FETCH_API_ALL_TASK_ERR) {
  }
  return state;
};
export default reducer;
