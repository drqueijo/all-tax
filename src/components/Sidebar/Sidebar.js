import React from "react";
import { DashboardOutlined } from "@ant-design/icons";
import Routes from "../../services/routes";
import { Link } from "react-router-dom";

function Sidebar() {

  const getLocation = (path) => {
    return window.location.pathname === path
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <DashboardOutlined />
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__content__list">
          {Routes.map((route) => 
            <li key={route.path} className={`sidebar__content__list__item ${ getLocation(route.path) && 'sidebar__content__list__item--active'}`}>
              <Link to={route.path} className="sidebar__content__list__item__content">
                {route.icon}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar