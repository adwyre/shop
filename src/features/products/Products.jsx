import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../../app/app.css';
import { useEffect, useState } from "react";

const Products = (props) => {
  const product = props.product;

  return (
    <div className="item">
      <div className="item-image">
        <img src={product.image}/>
      </div>
      <div className="item-caption">
        <div className="item-title">
          <h6><strong>{product.title}</strong></h6>
          <p>${product.price}</p>
        </div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  )
}
export default Products;