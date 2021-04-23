import React, { Component } from "react";
import "./Menu.css";
import { Route, NavLink } from "react-router-dom";
const MenuLink = ({ label, to, actionOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={actionOnlyWhenExact}
      children={(props) => {
        return (
          <li className={props.match ? "red" : ""}>
            <NavLink to={to} exact={actionOnlyWhenExact}>
              {" "}
              {label}{" "}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
const menus = [
  {
    label: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    label: "Danh sách công việc",
    to: "/task-page",
    exact: false,
  },
];
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <ul className="flex">
          {menus.map((value, index) => {
            return (
              <MenuLink
                label={value.label}
                to={value.to}
                actionOnlyWhenExact={value.exact}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Menu;
