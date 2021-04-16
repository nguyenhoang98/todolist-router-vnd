import axiosServices from "../../AxiosServices/index";
import * as tasksConstants from "../../Constants/index";

// Gọi trả về tất cả dữ liệu của task

export const fetch_api_all_task = (url) => {
  console.log("all tasks");
  return (dispatch) => {
    axiosServices(url)
      .then((res) => {
        dispatch(fetch_api_all_task_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_api_all_task_err(err));
      });
  };
};

export const fetch_api_all_task_success = (data) => {
  return {
    type: tasksConstants.FETCH_API_ALL_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_all_task_err = (err) => {
  return {
    type: tasksConstants.FETCH_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

// Sử lí phần gọi api
export const fetch_api_task = (url) => {
  console.log(url);
  return (dispatch) => {
    return axiosServices(url, "GET", null)
      .then((res) => {
        dispatch(fetch_api_task_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_api_task_err(err));
      });
  };
};
export const fetch_api_task_success = (data) => {
  return {
    type: tasksConstants.FETCH_API_TASK_SUCCESS,
    payload: {
      data: data.reverse(),
    },
  };
};

export const fetch_api_task_err = (err) => {
  return {
    type: tasksConstants.FETCH_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

// sử lí phần thêm dữ liệu post api

export const add_task_api = (url, data) => {
  console.log(url);
  return (dispatch) => {
    axiosServices(url, "POST", data)
      .then((res) => {
        dispatch(add_task_api_success(res.data));
      })
      .catch((err) => {
        dispatch(add_task_api_err(err));
      });
  };
};
export const add_task_api_success = (data) => {
  return {
    type: tasksConstants.ADD_TASK_API_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const add_task_api_err = (err) => {
  return {
    type: tasksConstants.ADD_TASK_API_ERR,
    payload: {
      err: err,
    },
  };
};

// sử lí phần xóa dữ liệu delete api

export const delete_task_api = (url, id) => {
  return (dispatch) => {
    axiosServices(`${url}/${id}`, "DELETE", null)
      .then((res) => {
        dispatch(delete_task_api_success(id));
      })
      .catch((err) => {
        dispatch(delete_task_api_err(err));
      });
  };
};

export const delete_task_api_success = (id) => {
  return {
    type: tasksConstants.DELETE_TASK_SUCCESS,
    payload: {
      id: id,
    },
  };
};
export const delete_task_api_err = (err) => {
  return {
    type: tasksConstants.DELETE_TASK_SUCCESS,
    payload: {
      err: err,
    },
  };
};

// sử lí phần update status

export const update_status_task = (url, data) => {
  return (dispatch) => {
    axiosServices(`${url}/${data.id}`, "PUT", {
      ...data,
      status: !data.status,
    })
      .then((res) => {
        dispatch(update_status_task_success(res.data));
      })
      .catch((err) => {
        dispatch(update_status_task_err(err));
      });
  };
};

export const update_status_task_success = (data) => {
  return {
    type: tasksConstants.UPDATE_STATUS_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const update_status_task_err = (err) => {
  return {
    type: tasksConstants.UPDATE_STATUS_ERR,
    payload: {
      err: err,
    },
  };
};

export const update_task = (url, data) => {
  return (dispatch) => {
    axiosServices(`${url}/${data.id}`, "PUT", data)
      .then((res) => {
        dispatch(update_task_success(res.data));
      })
      .catch((err) => {
        dispatch(update_task_err(err));
      });
  };
};

export const update_task_success = (data) => {
  return {
    type: tasksConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const update_task_err = (err) => {
  return {
    type: tasksConstants.UPDATE_STATUS_ERR,
    payload: {
      err: err,
    },
  };
};
