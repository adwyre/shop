import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDetails, fetchDetails } from "../../store/detailsSlice";
import { selectCartItems } from "../../store/cartSlice";
import './details.css';
import AddButton from "../productButtons/AddButton";
import RemoveButton from "../productButtons/RemoveButton";
import QuantityButton from "../productButtons/QuantityButton";
import { getStars, formatPrice, star, starFilled } from "../../utils";

const Details = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails)
  const cartItems = useSelector(selectCartItems);


  useEffect(() => {
    dispatch(fetchDetails(id))
  }, [id])

  return (
    <div className="details-page">
      { Object.keys(details).length > 0 ? 
        <>
        <div className="image-section">
          <div className="main-image">
            <img src={details.image} />
          </div>
        </div>
        <div className="info-section">
          <h2>{details.title}</h2>
          <div className="rating">
            {getStars(details.rating.rate).map(filled => filled ? starFilled : star)}
          </div>
          <h5>${formatPrice(details.price)}</h5>
          <p>{details.description}</p>
          <div className="d-flex justify-content-around mb-4 flex-wrap">
            <QuantityButton product={details}/>
            {!cartItems[details.id] ?
                <AddButton product={details}/> :
                <RemoveButton product={details}/>
              }
          </div>
        </div>
        </>
      :
      <p>Loading...</p>
      }
    </div>
  )
}

export default Details;