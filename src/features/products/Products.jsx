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
          <p className="font-weight-bold">{product.title}</p>
        </div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>

      
    </div>
  )
}
export default Products;