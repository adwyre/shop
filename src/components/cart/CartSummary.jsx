import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cartSlice";
import './cart.css'
import { useState, useEffect } from "react";
import RemoveButton from "../productButtons/RemoveButton";
import { calcTotal, calcItemPrice } from "../../utils";

const CartSummary = () => {
  const cartItems = Object.values(useSelector(selectCartItems));
  const [total, setTotal] = useState('')

  useEffect(() => {
    if (cartItems.length > 0) {
      calcTotal(setTotal)
    }
  },[cartItems])

  return (
    <div className="summary-page">
      <div className="item-row"> <h2>Cart</h2></div>
      {cartItems.length > 0 ? 
        cartItems.map(item => 
        <div className="item-row">
          <div className="summary-image">
            <img src={item.product.image}/>
          </div>
          <div className="summary-info">
            <div className="info-text info-title"><p>{item.product.title}</p></div>
            <div className="info-text info-quant"><p>x{item.quantity}</p></div> 
            <div className="info-text info-price"><h5 className="price">${calcItemPrice(item.product.price, item.quantity)}</h5></div>
            <div className="info-text info-trash"><RemoveButton product={item.product}/></div> 
          </div>
        </div>):
        <div className="item-row empty">
          <h4>Cart is empty</h4>
        </div>
      }
      {cartItems.length > 0 ? 
        <div className="item-row last">
          <div className="total"><p>Total</p><h4>${total}</h4></div>
          <div>
            <Link to="/checkout"><button className="btn btn-cta btn-lg">Checkout</button></Link>
          </div>
        </div>
        :
        <div className="item-row last">
          <div className="total"><p>Total</p><h4>$0.00</h4></div>
          <div>
            <button className="btn btn-cta btn-lg" disabled>Checkout</button>
          </div>
        </div>
      }
      
      
    </div>
  )
}

export default CartSummary;