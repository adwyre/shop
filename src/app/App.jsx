import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import './app.css';
import Home from "../components/Home";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid nav-container">
          <NavLink className="navbar-brand" to="#">Shop</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mens">Men's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/womens">Women's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jewelry">Jewelry</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/mens">
          
        </Route>
        <Route path="/womens">
          
        </Route>
        <Route path="/jewelry">
          
        </Route>
      </Switch>
      </main>
    </Router>
  )
}

export default App;
