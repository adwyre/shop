import { useDispatch, useSelector } from "react-redux";
import "./buttons.css"
// Store
import { addToCart } from "../../store/cartSlice";
import { selectProducts } from "../../store/productsSlice";
import { selectDetails } from "../../store/detailsSlice";
import { selectAuth } from "../../store/userSlice";

const AddButton = (props) => {
  const product = props.product;
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const authenticated = useSelector(selectAuth);

  // Add item to cart store and get quantity from input
  const handleClick = (e) => {
    let item;
    if (products.length > 0) {
      item = products.filter(item => item.id === e.target.dataset.productId)[0];
    } else {
      item = details;
    }
    const quantity = e.target.parentNode.getElementsByTagName("input")[0].value;
    dispatch(addToCart({product: item, quantity: quantity}));
  }

  return (
    <>
    { authenticated ?
      <button data-product-id={product.id} onClick={handleClick} className="btn btn-primary product-button" aria-label="add-to-cart">Add to Cart</button>
      :
      <button className="btn btn-secondary product-button" disabled aria-label="add-to-cart-disabled">Log in to add</button>
    }
    </>
  )
}

export default AddButton;