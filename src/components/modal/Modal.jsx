import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './modal.css';
import { hideModal } from "../../utils";
// Store
import { setSubcategory } from "../../store/productsSlice";
import { selectAuth } from "../../store/userSlice";
import { sortBy, setSearchResults } from "../../store/productsSlice";


const Modal = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuth);
  const CLOTHING = ['Tops', 'Outerwear'];
  const JEWELRY = ['Bracelets', 'Rings'];
  const updateCategory = props.updateCategory;

  // On modal click re-set store to default and set category and subcatory to render
  const handleModalClick = (e) => {
    hideModal(e);
    dispatch(setSubcategory(e.target.innerHTML.toLowerCase()));
    dispatch(sortBy(''));
    dispatch(setSearchResults([]));
    updateCategory(e);
  }

  return (
    <div className={authenticated ? "modal modal-lg" : "modal"} onClick={hideModal}>
      <div className="modal-menu" id="men" onMouseLeave={hideModal}>
        <ul aria-label="secondary-nav">
          {CLOTHING.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/men', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="men">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="women" onMouseLeave={hideModal}>
        <ul aria-label="secondary-nav">
          {CLOTHING.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/women', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="women">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="jewelry" onMouseLeave={hideModal}>
        <ul aria-label="secondary-nav">
          {JEWELRY.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/jewelry', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="jewelery">{category}</li></NavLink>)}
        </ul>
      </div>
    </div>
  );
};

export default Modal;