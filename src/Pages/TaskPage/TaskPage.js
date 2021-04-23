import React, { Component } from "react";
import "./TaskPage.css";
import SearchTasks from "../../Components/SearchTasks/SearchTasks";
import TaskFormContainer from "../../Containers/TaskFormContainer/TaskFormContainer";
import TaskListContainer from "../../Containers/TaskListContainer/TaskListContainer";
import PaginationContainer from "../../Containers/PaginationContainer/PaginationContainer";
import { connect } from "react-redux";
class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      filterPage: {
        _limit: 6,
        _page: 1,
        _sort: "time",
        _order: "desc",
      },
    };
    this.searchTasks = this.searchTasks.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }
  componentWillReceiveProps(nextProps, nextState) {
    // if (nextProps.page !== this.state.page) {
    //   this.setState({
    //     filterPage: {
    //       _limit: 6,
    //       _page: nextProps.page,
    //     },
    //   });
    // }
  }
  searchTasks(data) {
    console.log(data);
    this.setState({
      q: data.q,
    });
  }
  handleChangePage(i) {
    this.setState({
      filterPage: {
        _limit: 6,
        _page: this.state.filterPage._page + i,
        _sort: "time",
        _order: "desc",
      },
    });
  }
  render() {
    const { q, filterPage } = this.state;
    return (
      <div className="taskpage">
        <SearchTasks searchTasks={this.searchTasks} />
        <TaskFormContainer />
        <TaskListContainer q={q} filterPage={filterPage} />
        <PaginationContainer
          handleChangePage={this.handleChangePage}
          filterPage={filterPage}
        />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    page: Math.ceil(state.Tasks.length / 6),
  };
};
export default connect(mapStateToProp, null)(TaskPage);
