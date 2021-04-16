import React, { Component } from "react";
import "./App.css";
import Clock from "./Components/Clock/Clock";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routers from "./routers";
import { Provider } from "react-redux";
import configureStore from "./Redux/config";
const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Clock />
            <Menu />
            <Switch>
              {routers.map((value, index) => {
                return (
                  <Route
                    path={value.path}
                    exact={value.exact}
                    component={value.component}
                    key={index}
                  />
                );
              })}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
