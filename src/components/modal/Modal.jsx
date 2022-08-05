import React from "react";
import './modal.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSubcategory } from "../../store/productsSlice";
import { selectAuth } from "../../store/userSlice";
import { selectCartItems } from "../../store/cartSlice";

const Modal = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuth)
  const CLOTHING = ['Tops', 'Outerwear']
  const JEWELRY = ['Bracelets', 'Rings']
  const hideModal = props.hideModal;
  const updateCategory = props.updateCategory;

  const handleModalClick = (e) => {
    hideModal(e);
    dispatch(setSubcategory(e.target.innerHTML.toLowerCase()));
    updateCategory(e);
  }

  return (
    <div className={authenticated ? "modal modal-lg" : "modal"} onClick={hideModal}>
      <div className="modal-menu" id="men" onMouseLeave={hideModal}>
        <ul>
          {CLOTHING.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/men', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="men">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="women" onMouseLeave={hideModal}>
        <ul>
          {CLOTHING.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/women', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="women">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="jewelry" onMouseLeave={hideModal}>
        <ul>
          {JEWELRY.map((category, i) => <NavLink key={i} className="nav-link" onClick={handleModalClick} to={{pathname: '/jewelry', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="jewelery">{category}</li></NavLink>)}
        </ul>
      </div>
    </div>
  );
};

export default Modal;