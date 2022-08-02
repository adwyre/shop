import "./buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../features/cart/cartSlice";
import { selectCartItems } from "../../features/cart/cartSlice";
import { useEffect } from "react";

const QuantityButton = (props) => {
  const dispatch = useDispatch;
  const product = props.product;
  const cartItems = useSelector(selectCartItems);

  const handleClick = (e) => {
    const input = e.target.parentNode.getElementsByTagName("input")[0];
    const currValue = parseInt(input.value);
    const sign = e.target.innerHTML;
    // add or subtract 1 to/from input depending on button clicked
    if (sign === "+") {
      input.value = currValue + 1;
    } else {
      input.value = currValue - 1;
    }
  }

  const handleChange = (e) => {
    console.log('change')
    const currValue = e.target.value;
    const id = e.target.dataset.productId;
    console.log(currValue)
    // reset values < 0 or > 99
    if (currValue > 99 || currValue < 0) {
      if (currValue > 99) {
        e.target.value = 99;
      } else {
        e.target.value = 0;
      } 
      console.log(e.target.value)
    }
    // if item in cart update quantity
    if (cartItems[id]) {
      const actionObj = {
        id: id,
        quantity: e.target.value
      }
      dispatch(updateQuantity(actionObj))
    }
  }



  return (
  <div className="btn-group product-button">
    <button type="button" className="btn btn-light" onClick={handleClick}>-</button>
    <input data-product-id={product.id} onChange={handleChange} type="number" className="form-control quantity" defaultValue={1} max="99" min="0"></input>
    <button type="button" className="btn btn-light" onClick={handleClick}>+</button>
  </div>
  )
}

export default QuantityButton;