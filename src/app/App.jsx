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
              <button className="btn btn-outline-secondary" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
              </button>

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
