import React, { Component } from "react";

import "./Loading.css";
import loading from "../../Assets/img/Spinner-1s-200px.gif";
import { connect } from "react-redux";
class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks } = this.props;
    console.log(tasks);
    if (tasks === null) {
      return (
        <div className="loading">
          <img src={loading} className="loading__img" />
        </div>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.Tasks.tasks,
  };
};
export default connect(mapStateToProps, null)(Loading);
