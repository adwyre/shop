import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './cart.css';
import { calcTotal, calcItemPrice } from "../../utils";
// Store
import { selectCartItems, getTotalItems } from "../../store/cartSlice";


const CartCheckout = () => {
  const cart = useSelector(selectCartItems);
  const cartItems = Object.values(useSelector(selectCartItems));
  const [total, setTotal] = useState('');
  const [sameAddress, setSameAddress] = useState(true);

  // set sameAddress state to true/false if checked/unchecked
  const handleCheckChange = () => {
    const checked = document.getElementById("same-address").checked;
    setSameAddress(checked);
  }

  // Calculate total cost in cart
  useEffect(() => {
    if (cartItems.length > 0) {
      calcTotal(setTotal);
    }
  },[cartItems])

  return (
    <div className="checkout-page">
      <div className="row g-5">

        {/* Cart Summary */}
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text">My cart</span>
            <span className="badge green rounded-pill">{ cartItems.length > 0 ? getTotalItems(cart) : 0}</span>
          </h4>
          <ul className="list-group mb-3">
            {/* Cart Items */}
            {cartItems.length > 0 ?
              cartItems.map(item => 
                <li key={item.product.id} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.product.title}</h6>
                    <small className="text-muted">x{item.quantity}</small>
                  </div>
                  <span className="text-muted price">${calcItemPrice(item.product.price, item.quantity)}</span>
                </li>
              )
              :
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">x1</small>
                </div>
                <span className="text-muted">$0</span>
              </li>
            }
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>
        </div>


        {/* Billing Info */}
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              {/* First Name Field */}
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              {/* Last Name Field */}
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              {/* Email Field */}
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              {/* Address 1 Field */}
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              {/* Address 2 Field */}
              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>
              {/* Country Field */}
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                  <option defaultValue="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              {/* State Field */}
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option defaultValue="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              {/* Zip Code Field */}
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>

            <hr className="my-4"/>

            {/*  Same Address Field */}
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" defaultChecked onChange={handleCheckChange}/>
              <label className="form-check-label" htmlFor="same-address">Shipping and billing addresses are the same</label>
            </div>

            <hr className="my-4"/>
            
            
            {/* Shipping Info */}
            { !sameAddress ?
              <>
                <h4 className="mb-3">Shipping Address</h4>
                <div className="row g-3">
                  {/* Address 1 Field */}
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  {/* Address 2 Field */}
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                  </div>
                  {/* Country Field */}
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option defaultValue="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  {/* State Field */}
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option defaultValue="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  {/* Zip Code Field */}
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required/>
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>

                <hr className="my-4"/>
              </>
              :
              <></>
            }

            {/* Payment Info */}
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              {/* Credit Radio */}
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required/>
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              {/* Debit Radio */}
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              {/* PayPal Radio */}
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <div className="row gy-3">
              {/* Card Name Field */}
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              {/* Card Number Field */}
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
               {/* Card Expiration Field */}
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
               {/* Card Security Code Field */}
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>

            <hr className="my-4"/>
            {/* Submit Button */}
            <button className="w-100 btn btn-primary btn-lg" type="button">Continue with checkout</button>
          </form>
        </div>
      </div>
    </div>
)
}

export default CartCheckout;
