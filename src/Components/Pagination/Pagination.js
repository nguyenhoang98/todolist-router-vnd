import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChangePage, filterPage, taskAll } = this.props;
    console.log(taskAll.length);
    if (taskAll.length % 6 === 1) {
    }
    const { _page } = filterPage;
    console.log(_page);
    return (
      <div className="pagination">
        <button
          className="prev"
          onClick={() => handleChangePage(-1)}
          disabled={Number(_page) === 1}
          style={{
            background: Number(_page) === 1 ? "#ccc" : "",
            color: Number(_page) === 1 ? "black" : "",
          }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button
          className="next"
          onClick={() => handleChangePage(1)}
          disabled={
            taskAll.length === 0 ||
            Number(_page) === Math.ceil(taskAll.length / 6)
          }
          style={{
            background:
              taskAll.length === 0 ||
              Number(_page) === Math.ceil(taskAll.length / 6)
                ? "#ccc"
                : "",

            color:
              taskAll.length === 0 ||
              Number(_page) === Math.ceil(taskAll.length / 6)
                ? "black"
                : "",
          }}
        >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
export default Pagination;
