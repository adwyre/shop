import React from "react";
import { Link } from "react-router-dom";
import './products.css';
import AddButton from "../productButtons/AddButton";
import QuantityButton from "../productButtons/QuantityButton";
import RemoveButton from "../productButtons/RemoveButton";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cartSlice";
import { getStars, formatPrice, star, starFilled } from "../../utils";

const Products = (props) => {
  const product = props.product;
  const cartItems = useSelector(selectCartItems);
  
  return (
    <div className="item">
      <div className="item-image">
        <Link to={{pathname: `/details/${product.id}`}}>
          <img src={product.image}/>
        </Link> 
      </div>
      <div className="item-caption">
        <div className="item-title">
          <h6><strong>{product.title}</strong></h6>
          <div className="rating">
            {getStars(product.rating.rate).map(filled => filled ? starFilled : star)}
          </div>
          <p>${formatPrice(product.price)}</p>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          {/* render remove button if product has been added to cart */}
          { !cartItems[product.id] ?
            <AddButton product={product}/> :
            <RemoveButton product={product}/>
          }
          <QuantityButton product={product}/>
        </div>
      </div>
    </div>
  )
}
export default Products;