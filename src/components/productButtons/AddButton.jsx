import "./buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { selectProducts } from "../../features/products/productsSlice";

const AddButton = (props) => {
  const product = props.product;
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();

  const addItem = (e) => {
    const item = products.filter(item => item.id == e.target.dataset.productId)[0]
    dispatch(addToCart(item))
  }

  return (
  <button data-product-id={product.id} onClick={addItem} className="btn btn-primary product-button">Add to Cart</button>
  )
}

export default AddButton;