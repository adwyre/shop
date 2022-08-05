import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './products.css';
import { getStars, formatPrice, star, starFilled } from "../../utils";
// Components
import AddButton from "../productButtons/AddButton";
import QuantityButton from "../productButtons/QuantityButton";
import RemoveButton from "../productButtons/RemoveButton";
// Store
import { selectCartItems } from "../../store/cartSlice";


const Products = (props) => {
  const product = props.product;
  const cartItems = useSelector(selectCartItems);
  
  return (
    <div className="item">
      {/* Item Image */}
      <div className="item-image">
        <Link to={{pathname: `/details/${product.id}`}}>
          <img src={product.image} alt={product.title}/>
        </Link> 
      </div>
      <div className="item-caption">
        <div className="item-title">
          {/* Title */}
          <h6><strong>{product.title}</strong></h6>
          {/* Rating */}
          <div className="rating" aria-label="star-rating">
            {getStars(product.rating.rate).map(filled => filled ? starFilled : star)}
          </div>
          {/* Price */}
          <p>${formatPrice(product.price)}</p>
        </div>
        {/* Buttons */}
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