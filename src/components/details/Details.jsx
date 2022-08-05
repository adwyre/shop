import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './details.css';
import { getStars, formatPrice, star, starFilled } from "../../utils";
// Components
import AddButton from "../productButtons/AddButton";
import RemoveButton from "../productButtons/RemoveButton";
import QuantityButton from "../productButtons/QuantityButton";
// Store
import { selectDetails, fetchDetails } from "../../store/detailsSlice";
import { selectCartItems } from "../../store/cartSlice";


const Details = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const cartItems = useSelector(selectCartItems);

  // Fetch Item Details
  useEffect(() => {
    dispatch(fetchDetails(id))
  }, [id])

  return (
    <div className="details-page">
      { Object.keys(details).length > 0 ? 
        <>
        {/* Item Image */}
        <div className="image-section">
          <div className="main-image">
            <img src={details.image} alt={details.title}/>
          </div>
        </div>

        <div className="info-section">
          {/* Title */}
          <h2>{details.title}</h2>
          {/* Rating */}
          <div className="rating">
            {getStars(details.rating.rate).map(filled => filled ? starFilled : star)}
          </div>
          {/* Price */}
          <h5>${formatPrice(details.price)}</h5>
          {/* Description */}
          <p>{details.description}</p>
          {/* Buttons */}
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