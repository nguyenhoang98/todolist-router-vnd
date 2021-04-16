import React, { Component } from "react";
import "./PaginationContainer.css";
import Pagination from "../../Components/Pagination/Pagination";
import { fetch_api_all_task } from "../../Redux/Actions/Action";
import { connect } from "react-redux";
const url = "http://localhost:1111/tasks";
class PaginationContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchApiAllTasks } = this.props;
    fetchApiAllTasks(url);
  }
  render() {
    const { taskAll, handleChangePage, filterPage } = this.props;
    return (
      <div>
        <Pagination
          taskAll={taskAll}
          handleChangePage={handleChangePage}
          filterPage={filterPage}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taskAll: state.TaskAll,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiAllTasks: (url) => {
      return dispatch(fetch_api_all_task(url));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
