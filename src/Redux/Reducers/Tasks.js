import * as tasksConstants from "../../Constants";
const initialState = {
  tasks: [],
  length: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === tasksConstants.FETCH_API_TASK_SUCCESS) {
    const { data, length } = action.payload;
    console.log(data);
    console.log(length);
    state = {
      tasks: data,
      length: length,
    };
    return { ...state };
  }
  if (action.type === tasksConstants.FETCH_API_TASK_ERR) {
  }

  if (action.type === tasksConstants.ADD_TASK_API_SUCCESS) {
    const { data } = action.payload;
    return {
      ...state,
      tasks: state.tasks.concat(data).reverse(),
      length: state.length + 1,
    };
  }
  if (action.type === tasksConstants.ADD_TASK_API_ERR) {
  }
  if (action.type === tasksConstants.DELETE_TASK_SUCCESS) {
    const { id } = action.payload;
    const index = state.tasks.findIndex((value) => {
      return value.id === id;
    });
    state.tasks.splice(index, 1);
    return {
      ...state,
      tasks: [...state.tasks],
      length: state.length - 1,
    };
  }
  if (action.type === tasksConstants.UPDATE_STATUS_ERR) {
  }
  if (action.type === tasksConstants.UPDATE_TASK_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.tasks.findIndex((value) => {
      return value.id === id;
    });
    state.tasks[index] = data;
    return {
      ...state,
      tasks: [...state.tasks],
      length: state.length,
    };
  }
  if (action.type === tasksConstants.UPDATE_STATUS_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.tasks.findIndex((value) => {
      return value.id === id;
    });
    const newObj = {
      ...state,
      tasks: [
        ...state.tasks.slice(0, index),
        { ...data, status: !data.status },
        ...state.tasks.slice(index + 1),
      ],
    };
    return {
      ...newObj,
      tasks: [...newObj.tasks],
      length: state.length,
    };
  }
  return state;
};
export default reducer;
