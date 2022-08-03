import "./buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { selectProducts } from "../../features/products/productsSlice";

const AddButton = (props) => {
  const product = props.product;
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const item = products.filter(item => item.id == e.target.dataset.productId)[0]
    const quantity = e.target.parentNode.getElementsByTagName("input")[0].value
    dispatch(addToCart({product: item, quantity: quantity}))
  }
  return (
  <button data-product-id={product.id} onClick={handleClick} className="btn btn-primary product-button">Add to Cart</button>
  )
}

export default AddButton;