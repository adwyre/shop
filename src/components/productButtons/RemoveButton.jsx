import "./buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { selectProducts } from "../../store/productsSlice";

const RemoveButton = (props) => {
  const product = props.product;
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = e.target.dataset.productId;
    dispatch(removeFromCart(id))
  }
  return (
  <button data-product-id={product.id} onClick={handleClick} className="btn btn-secondary product-button">Remove Item</button>
  )
}

export default RemoveButton;