import React, { Component } from "react";
import "./TaskFormContainer.css";
import { connect } from "react-redux";
import { fetch_api_all_task, add_task_api } from "../../Redux/Actions/Action";
const url_api_tasks = "http://localhost:1111/tasks";

class TaskFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnResetForm = this.handleOnResetForm.bind(this);
  }
  stringRamdom() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  createID() {
    return (
      this.stringRamdom() +
      this.stringRamdom() +
      "-" +
      this.stringRamdom() +
      this.stringRamdom() +
      "-" +
      this.stringRamdom() +
      "-" +
      this.stringRamdom()
    );
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
    const { addTasks } = this.props;
    addTasks(url_api_tasks, {
      ...this.state,
      id: this.createID(),
      time: new Date().getTime(),
    });
    this.handleOnResetForm();
  }

  handleOnResetForm() {
    this.setState({
      name: "",
      status: false,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="taskform">
        <form className="flex" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            className="taskform__input"
            placeholder="Thêm công việc"
            name="name"
            value={name}
            onChange={this.handleOnchange}
            autoComplete="off"
            required
          />
          <button type="submit" className="btn btn-submit taskform__submit">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
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
    addTasks: (url, data) => {
      return dispatch(add_task_api(url, data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
