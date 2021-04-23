import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Clock from "./Components/Clock/Clock";
import Menu from "./Components/Menu/Menu";
import configureStore from "./Redux/config";
import routers from "./routers";
import Loading from "./Components/Loading/Loading";

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
            <Loading />
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
