import React from "react";
import '../app/app.css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Modal = (props) => {
  const CLOTHING = ['Tops', 'Outerwear']
  const JEWELRY = ['Necklaces', 'Bracelets']

  const hideModal = (e) => {
    document.getElementsByClassName('modal')[0].style.display = 'none';
    const modalId = e.target.dataset.modalId
    document.getElementById(modalId).style.display = 'none';
  }

  return (
    <div className="modal" onClick={hideModal}>
      <div className="modal-menu" id="men" onMouseLeave={hideModal}>
        <ul>
          {CLOTHING.map(category => <NavLink className="nav-link" to={{pathname: '/men', search: `?category=${category.toLowerCase()}`}}><li className="nav-item" data-modal-id="men">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="women" onMouseLeave={hideModal}>
        <ul>
          {CLOTHING.map(category => <NavLink className="nav-link" to={{pathname: '/women', search: `?category=${category.toLowerCase()}`}}><li className="nav-item">{category}</li></NavLink>)}
        </ul>
      </div>
      <div className="modal-menu" id="jewelry" onMouseLeave={hideModal}>
        <ul>
          {JEWELRY.map(category => <NavLink className="nav-link" to={{pathname: '/jewelry', search: `?category=${category.toLowerCase()}`}}><li className="nav-item">{category}</li></NavLink>)}
        </ul>
      </div>
    </div>
  );
};

export default Modal;