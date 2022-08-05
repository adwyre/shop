import { useDispatch, useSelector } from "react-redux";
import "./buttons.css"
// Store
import { updateQuantity } from "../../store/cartSlice";
import { selectCartItems } from "../../store/cartSlice";


const QuantityButton = (props) => {
  const dispatch = useDispatch();
  const product = props.product;
  const cartItems = useSelector(selectCartItems);

  // Prevent inputs <1 or >99
  const validateInput = (currValue, element) => {
    // reset values < 1 or > 99
    if (currValue > 99 || currValue < 1) {
      if (currValue > 99) {
        element.value = 99;
      } else {
        element.value = 1;
      } 
    } 
    return;
  };

  // Check if item already in cart
  const checkCart = (id, element) => {
    // if item in cart update quantity
    if (!cartItems[id]) {
      return;
    }
    const actionObj = {
      id: id,
      quantity: element.value
    }
    dispatch(updateQuantity(actionObj));
    return;
  };
  
  // Update quantity input +/- 1
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

  // Update quantity
  const handleChange = (e) => {
    const currValue = e.target.value;
    const id = e.target.dataset.productId;
    
    validateInput(currValue, e.target)
    checkCart(id, e.target)
    
  }

  return (
  <div className="btn-group product-button">
    {/* +++ */}
    <button type="button" className="btn btn-light" onClick={(handleClick)} aria-label="decrease-quantity">-</button>
    {/* Number Input */}
    <input data-product-id={product.id} onChange={handleChange} type="number" className="form-control quantity" defaultValue={1} max="99" min="1"></input>
    {/* --- */}
    <button type="button" className="btn btn-light" onClick={handleClick} aria-label="increase-quantity">+</button>
  </div>
  )
}

export default QuantityButton;