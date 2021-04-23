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
  render() {
    const { handleChangePage, filterPage, TasksLength } = this.props;
    return (
      <div>
        <Pagination
          handleChangePage={handleChangePage}
          filterPage={filterPage}
          TasksLength={TasksLength}
          s
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    TasksLength: state.Tasks.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
