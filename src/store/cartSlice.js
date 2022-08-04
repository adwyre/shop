import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../api/fakestore";

const initialState = {
  cartItems: {},
  isLoading: false,
  error: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) { //action = {product: {}, quantity: ...} 
      const { product } = action.payload;
      console.log(product)
      const id = product.id;
      state.cartItems[id] = action.payload
    },
    updateQuantity(state, action) { //action = {id: ..., quantity: ...} 
      const { id, quantity } = action.payload;
      console.log(id)
      state.cartItems[id].quantity = quantity;
    },
    removeFromCart(state, action) { //action = id
      delete state.cartItems[action.payload]
    }
  }});

  // get total number of products in cart
  export const getTotalItems = (cart) => {
    const items = Object.values(cart);
    const quantities = items.map(item => item['quantity'])
    return quantities.reduce(
      (prev, curr) => parseInt(prev) + parseInt(curr))
  }

// Actions and Reducers
export const {addToCart, updateQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

