import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './navbar.css';
import { hideModal } from "../../utils";
// Components
import CartButton from "../cart/CartButton";
import SearchBar from "../search/SearchBar";
// Store
import { setSubcategory, sortBy, setSearchResults } from "../../store/productsSlice";
import { selectAuth, setAuth, setUser } from "../../store/userSlice";


const NavBar = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuth);
  const updateCategory = props.updateCategory;

  // Change modal display so it's visible
  const displayModal = (e) => {
    const elements = document.getElementsByClassName('modal-menu');
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).style.display = 'none';
    };
    document.getElementsByClassName('modal')[0].style.display = 'block';
    const modalId = e.target.dataset.modalId;
    document.getElementById(modalId).style.display = 'block';
  }

  // On nav link click re-set store to default and update category to be rendered
  const handleNavClick = (e) => {
    hideModal(e);
    dispatch(sortBy(''));
    dispatch(setSubcategory(''));
    dispatch(setSearchResults([]));
    updateCategory(e);
  }

  // Toggle collapse/expand of nav bar on smaller screen
  const handleToggle = () => {
    let navStyle = document.getElementsByClassName("navbar-collapse")[0].style;
    navStyle.display === '' || navStyle.display === 'none' ? navStyle.display = 'flex' : navStyle.display = 'none';
  }

  // On log out re-set user data and unauthorize
  const handleLogout = () => {
    dispatch(setUser({}))
    dispatch(setAuth(false))
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" aria-label="primary">
      <div className="container-fluid nav-container">
        <NavLink className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16"><path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/></svg></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* Home */}
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            {/* Men */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/men" data-modal-id="men" onMouseOver={displayModal} onClick={handleNavClick}>Men</NavLink>
            </li>
            {/* Women */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/women" data-modal-id="women" onMouseOver={displayModal} onClick={handleNavClick}>Women</NavLink>
            </li>
            {/* Jewelry */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/jewelry" data-modal-id="jewelry"onMouseOver={displayModal} onClick={handleNavClick}>Jewelry</NavLink>
            </li>
            { authenticated && 
              <>
                {/* <li className="nav-item">
                <NavLink className="nav-link auth-link" to="/account">Account</NavLink>
                </li> */}
                {/* Log out */}
                <li className="nav-item">
                  <button className="nav-link auth-link btn-logout" onClick={handleLogout}>Log out</button>
                </li>
              </>
            }
          </ul>
          <SearchBar />
        </div>
        { authenticated ? 
          <CartButton />
          :
          <NavLink to="/login"><button className="btn btn-outline-secondary btn-login" arial-label="log-in">Log in</button></NavLink>
        }
      </div>
    </nav>
  )
}

export default NavBar;