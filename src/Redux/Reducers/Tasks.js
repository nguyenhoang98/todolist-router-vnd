import * as tasksConstants from "../../Constants";
const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === tasksConstants.FETCH_API_TASK_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === tasksConstants.FETCH_API_TASK_ERR) {
  }

  if (action.type === tasksConstants.ADD_TASK_API_SUCCESS) {
    const { data } = action.payload;
    state.unshift(data);
    if (state.length > 6) {
      state = state.substr(0, 6);
    }
    return [...state];
  }
  if (action.type === tasksConstants.ADD_TASK_API_ERR) {
  }
  if (action.type === tasksConstants.DELETE_TASK_SUCCESS) {
    const { id } = action.payload;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state.splice(index, 1);
    return [...state];
  }
  if (action.type === tasksConstants.UPDATE_STATUS_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state[index].status = !state[index].status;
    return [...state];
  }
  if (action.type === tasksConstants.UPDATE_STATUS_ERR) {
  }
  if (action.type === tasksConstants.UPDATE_TASK_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state[index] = data;
    return [...state];
  }
  return state;
};
export default reducer;
