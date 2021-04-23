import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChangePage, filterPage, TasksLength } = this.props;
    const { _page } = filterPage;
    console.log(_page);
    return (
      <div className="pagination">
        <button
          className="prev"
          onClick={() => handleChangePage(-1)}
          disabled={_page === 1}
          style={{
            background: _page === 1 ? "#ccc" : "",
          }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button
          className="next"
          onClick={() => handleChangePage(1)}
          disabled={Math.ceil(TasksLength / 6) === _page}
          style={{
            background: Math.ceil(TasksLength / 6) === _page ? "#ccc" : "",
          }}
        >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
export default Pagination;
