import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import './app.css';
import Home from "../components/Home";
import Browse from "../components/Browse";
import Modal from "../components/Modal";

function App() {
  const displayModal = (e) => {
    const elements = document.getElementsByClassName('modal-menu');
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).style.display = 'none';
    };
    document.getElementsByClassName('modal')[0].style.display = 'block'
    const modalId = e.target.dataset.modalId
    document.getElementById(modalId).style.display = 'block'
  }
  const hideModal = (e) => {
    document.getElementsByClassName('modal')[0].style.display = 'none';
    const modalId = e.target.dataset.modalId
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid nav-container">
          <NavLink className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
  <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
</svg></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men" data-modal-id="men" onMouseOver={displayModal} onClick={hideModal}>Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women" data-modal-id="women" onMouseOver={displayModal} onClick={hideModal}>Women</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jewelry" data-modal-id="jewelry"onMouseOver={displayModal} onClick={hideModal}>Jewelry</NavLink>
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
      <Modal hideModal={hideModal}/>
      <Switch>
        <Route path="/men">
          <Browse />
        </Route>
        <Route path="/women">
          <Browse />
        </Route>
        <Route path="/jewelry">
          <Browse />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </main>
    </Router>
  )
}

export default App;
