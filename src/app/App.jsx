import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './app.css';
import Home from "../components/home/Home";
import Browse from "../components/browse/Browse";
import Modal from "../components/modal/Modal";
import Details from "../components/details/Details"
import { setCategory, setSubcategory, sortBy } from "../store/productsSlice";
import { useDispatch } from "react-redux";
import CartButton from "../components/cart/CartButton";
import CartSummary from "../components/cart/CartSummary";
import SearchBar from "../components/search/SearchBar"
import Search from "../components/search/Search";

function App() {
  const dispatch = useDispatch();

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
  
  // Set category to match pathname
  const updateCategory = (e) => {
    if (e.target.dataset.modalId === 'women') {
      dispatch(setCategory("women's clothing"));
    } else if (e.target.dataset.modalId === 'men') {
      dispatch(setCategory("men's clothing"));
    } else {
      dispatch(setCategory("jewelery"));
    }
  };

  const handleNavClick = (e) => {
    hideModal(e);
    dispatch(sortBy(''));
    dispatch(setSubcategory(''));
    updateCategory(e);
  }
  
  const handleToggle = () => {
    let navStyle = document.getElementsByClassName("navbar-collapse")[0].style;
    navStyle.display === '' || navStyle.display === 'none' ? navStyle.display = 'flex' : navStyle.display = 'none';
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid nav-container">
          <NavLink className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16">
  <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
</svg></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men" data-modal-id="men" onMouseOver={displayModal} onClick={handleNavClick}>Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women" data-modal-id="women" onMouseOver={displayModal} onClick={handleNavClick}>Women</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jewelry" data-modal-id="jewelry"onMouseOver={displayModal} onClick={handleNavClick}>Jewelry</NavLink>
              </li>
            </ul>
            <SearchBar />
          </div>
          <CartButton />
        </div>
      </nav>
      <main>
      <Modal hideModal={hideModal} updateCategory={updateCategory}/>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/cart">
          <CartSummary />
        </Route>
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
