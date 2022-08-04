import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, getTotalItems } from "../../store/cartSlice";
import './cart.css'
import { Link } from "react-router-dom";

const CartButton = () => {
  const cart = useSelector(selectCartItems);
  const emptyCartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
  const fullCartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>

  const fullCart = (cart) => {
    return (
      <>
        {fullCartIcon}
        <span className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill green">
        {getTotalItems(cart)}
        </span>
      </>
    )
  }

  return (
    <Link to='/cart'>
      <button type="button" className="btn btn-outline-secondary position-relative" id="cartButton">
        {Object.keys(cart).length === 0 ? emptyCartIcon : fullCart(cart)}
      </button>
    </Link>
  )
}

export default CartButton