import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
    };
    this.getTime = this.getTime.bind(this);
  }
  componentDidMount() {
    this.getTime();
    setInterval(this.getTime, 1000);
  }
  formatTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }
  getTime() {
    const d = new Date();
    const h = this.formatTime(d.getHours());
    const m = this.formatTime(d.getMinutes());
    const s = this.formatTime(d.getSeconds());
    this.setState({
      time: h + ":" + m + ":" + s,
    });
  }
  render() {
    const { time } = this.state;
    return (
      <div className="clock">
        <h2> {time} </h2>
      </div>
    );
  }
}

export default Clock;
