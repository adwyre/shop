import "./buttons.css"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { selectProducts } from "../../store/productsSlice";

const RemoveButton = (props) => {
  const product = props.product;
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="#000000" className="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>

  const handleClick = (e) => {
    const id = e.target.dataset.productId;
    dispatch(removeFromCart(id))
  }
  return (
    <>
    {pathname === '/cart' ? 
    <button data-product-id={product.id} onClick={handleClick} className="btn btn-secondary product-button trash">{trashIcon}</button>
    :
    <button data-product-id={product.id} onClick={handleClick} className="btn btn-secondary product-button">Remove Item</button>
    }
    </>
  )
}

export default RemoveButton;