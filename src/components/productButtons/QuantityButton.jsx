import "./buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../../features/cart/cartSlice";
import { selectCartItems } from "../../features/cart/cartSlice";

const QuantityButton = (props) => {
  const dispatch = useDispatch;
  const product = props.product;
  const cartItems = useSelector(selectCartItems);

  const validateInput = (currValue, element) => {
    // reset values < 0 or > 99
    if (currValue > 99 || currValue < 0) {
      if (currValue > 99) {
        element.value = 99;
      } else {
        element.value = 0;
      } 
    } 
    return;
  };

  const checkCart = (id, element) => {
    // if item in cart update quantity
    if (cartItems[id]) {
      const actionObj = {
        id: id,
        quantity: element.value
      }
      console.log(actionObj)
      dispatch(updateQuantity(actionObj))
    }
    return;
  };

  const handleClick = (e) => {
    const input = e.target.parentNode.getElementsByTagName("input")[0];
    let currValue = parseInt(input.value);
    const id = input.dataset.productId;
    const sign = e.target.innerHTML;
    // add or subtract 1 to/from input depending on button clicked
    if (sign === "+") {
      input.value = currValue + 1;
      currValue += 1;
    } else {
      input.value = currValue - 1;
      currValue -= 1;
    }
    validateInput(currValue, input);
    checkCart(id, input);
  }

  const handleChange = (e) => {
    const currValue = e.target.value;
    const id = e.target.dataset.productId;
    console.log(currValue)
    
    validateInput(currValue, e.target)
    checkCart(id, e.target)
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