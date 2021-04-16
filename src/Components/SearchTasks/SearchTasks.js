import React, { Component } from "react";
import ImgSearch from "../../Assets/img/search-white.png";
import "./SearchTasks.css";

class SearchTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
    const { searchTasks } = this.props;
    searchTasks(this.state);
  }
  render() {
    const { q } = this.state;
    return (
      <div className="searchtasks">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="searchtasks__input"
            value={q}
            name="q"
            onChange={this.handleOnchange}
          />
          <img src={ImgSearch} className="searchtasks__img" />
        </form>
      </div>
    );
  }
}
export default SearchTasks;
