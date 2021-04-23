import React, { Component } from "react";

import "./TaskItem.css";
class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      disable: true,
    };
    this.isOpenFormItem = this.isOpenFormItem.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  componentDidMount() {
    const { task } = this.props;
    this.setState({
      name: task.name,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.task) {
      this.setState({
        name: nextProps.task.name,
      });
    }
  }
  isOpenFormItem() {
    this.setState({
      disable: false,
    });
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { task, updateTask } = this.props;
    const { id, status } = task;
    updateTask({
      id: id,
      name: this.state.name,
      status: status,
      time: new Date().getTime(),
    });
    this.setState({
      disable: true,
    });
  }
  render() {
    const { task, onDeleteTask, onUpdateStatus } = this.props;
    const { disable, name } = this.state;
    let m = (new Date().getTime() - task.time) / 1000 / 60;
    let h = (new Date().getTime() - task.time) / 1000 / 60 / 60;
    let d = (new Date().getTime() - task.time) / 1000 / 60 / 60 / 24;
    return (
      <div className="taskitem flex">
        <div className="taskitem__name" onDoubleClick={this.isOpenFormItem}>
          {disable ? (
            <span
              style={{
                display: "inline-block",
                width: 120,
              }}
            >
              {task.name}
            </span>
          ) : (
            <form onSubmit={this.handleOnSubmit}>
              <input
                type="text"
                value={name}
                name="name"
                onChange={this.handleOnchange}
                className="taskitem__input"
              />
            </form>
          )}
        </div>
        <div className="taskitem__action">
          <span
            style={{
              padding: 6,
            }}
          >
            {Math.floor(m) >= 60
              ? Math.floor(h) + "giờ"
              : Math.floor(h) >= 24
              ? Math.floor(d) + "ngày"
              : Math.floor(m) + "phút"}
          </span>
          <span
            style={{
              color: task.status === true ? "green" : "red",
              cursor: "pointer",
              padding: 6,
            }}
            onClick={() => onUpdateStatus(task)}
          >
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          </span>
          <span
            className="taskitem__close"
            onClick={() => onDeleteTask(task)}
            style={{
              color: "red",
            }}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    );
  }
}
export default TaskItem;
