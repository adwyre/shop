import React from "react";
import {
  Route,
  NavLink,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import '../app/app.css';
import { useEffect, useState } from "react";

const Browse = () => {
  const { pathname } = useLocation();

  const CLOTHING = ['Tops', 'Outerwear']
  const JEWELRY = ['Necklaces', 'Bracelets']

  useEffect(() => {
  }, [pathname]);

  return (
    <div className="container browse-page">
      <div className="row">
        {/* Sidebar */}
        <nav className="sidebar col-3">
          <ul className="navbar-nav mt-4 ms-2">
          <li className="nav-item"><NavLink className="nav-link" to={{pathname: pathname, search: "?category=all"}}>All</NavLink></li>
            { pathname == '/jewelry' ? 
              JEWELRY.map(category => <li className="nav-item"><NavLink className="nav-link" to={{pathname: pathname, search: `?category=${category}`}}>{category}</NavLink></li>) :
              CLOTHING.map(category => <li className="nav-item"><NavLink className="nav-link" to={{pathname: pathname, search: `?category=${category}`}}>{category}</NavLink></li>)
            }
          </ul>
        </nav>
        {/* Main section */}
        <div className="col-9">

        </div>
      </div>
    </div>
  )
}
export default Browse