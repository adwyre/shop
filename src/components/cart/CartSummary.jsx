import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cartSlice";
import './cart.css'
import { useState, useEffect } from "react";

const CartSummary = () => {
  const cartItems = Object.values(useSelector(selectCartItems));
  const [total, setTotal] = useState('')

  const calcItemPrice = (price, quantity) => {
    const total = Number.parseFloat(price) * Number.parseFloat(quantity);
    return total.toFixed(2);
  }

  const calcTotal = () => {
    const elements = document.getElementsByTagName('h5')
    if (!elements) {
      setTotal('0')
      return;
    }
    const prices = []
    for (let i = 0; i < elements.length; i++) {
      const price = elements[i].innerText.slice(1)
      prices.push(price)
    }
    setTotal(prices.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr)).toFixed(2))
  }

  useEffect(() => {
    calcTotal()
  },[cartItems])

  return (
    <div className="summary-page">
      {cartItems.length > 0 ? 
        cartItems.map(item => 
        <div className="item-row">
          <div className="summary-image">
            <img src={item.product.image}/>
          </div>
          <div className="summary-info">
            <div className="info-text info-title"><p>{item.product.title}</p></div>
            <div className="info-text info-quant"><p>x{item.quantity}</p></div> 
            <div className="info-text info-price"><h5>${calcItemPrice(item.product.price, item.quantity)}</h5></div>
          </div>
        </div>):
        <p>Loading</p>
      }
      {cartItems.length > 0 ? 
        <div className="item-row last">
          <div className="total"><p>Total</p><h4>${total}</h4></div>
          <div>
            <button className="btn btn-cta btn-lg">Checkout</button>
          </div>
        </div>
        :
        <p>Loading</p>
      }
      
      
    </div>
  )
}

export default CartSummary;