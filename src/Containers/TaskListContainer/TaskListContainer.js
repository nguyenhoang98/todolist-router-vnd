import React, { Component } from "react";
import "./TaskListContainer.css";
import TaskList from "../../Components/TaskList/TaskList";
import TaskItem from "../../Components/TaskItem/TaskItem";
import qs from "query-string";
import { connect } from "react-redux";
import {
  fetch_api_task,
  delete_task_api,
  update_status_task,
  update_task,
  fetch_api_all_task,
} from "../../Redux/Actions/Action";
const url_api_tasks = "http://localhost:1111/tasks";
class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }
  componentDidMount() {
    const { fetchApiTask, q, filterPage } = this.props;
    const obj = { q: q };
    const query = qs.stringify(obj);
    const filterPageQuery = qs.stringify(filterPage);
    fetchApiTask(`${url_api_tasks}?${filterPageQuery}?${query}`);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.q !== nextProps.q) {
      console.log(nextProps.q);
      const obj = { q: nextProps.q };
      const query = qs.stringify(obj);
      console.log(query);
      const { fetchApiTask } = this.props;
      fetchApiTask(`${url_api_tasks}?${query}`);
    }
    if (this.props.filterPage !== nextProps.filterPage) {
      const { fetchApiTask, q } = this.props;
      const filterPageQuery = qs.stringify(nextProps.filterPage);
      console.log(filterPageQuery);
      fetchApiTask(`${url_api_tasks}?${filterPageQuery}?${q}`);
    }
  }
  handleDeleteTask(data) {
    const { deleteTask } = this.props;
    deleteTask(url_api_tasks, data.id);
    const { fetchApiAllTasks } = this.props;
    fetchApiAllTasks("http://localhost:1111/tasks");
  }
  handleUpdateStatus(data) {
    const { updateStatus } = this.props;
    updateStatus(url_api_tasks, data);
  }
  handleUpdateTask(data) {
    const { updateTask } = this.props;
    updateTask(url_api_tasks, data);
  }
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <TaskList>
          {tasks.map((value, index) => {
            return (
              <TaskItem
                task={value}
                key={index}
                onDeleteTask={this.handleDeleteTask}
                onUpdateStatus={this.handleUpdateStatus}
                updateTask={this.handleUpdateTask}
              />
            );
          })}
        </TaskList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.Tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiTask: (url_api_tasks) => {
      return dispatch(fetch_api_task(url_api_tasks));
    },
    deleteTask: (url_api_tasks, id) => {
      return dispatch(delete_task_api(url_api_tasks, id));
    },
    updateStatus: (url_api_tasks, data) => {
      return dispatch(update_status_task(url_api_tasks, data));
    },
    updateTask: (url_api_tasks, data) => {
      return dispatch(update_task(url_api_tasks, data));
    },
    fetchApiAllTasks: (url) => {
      return dispatch(fetch_api_all_task(url));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
