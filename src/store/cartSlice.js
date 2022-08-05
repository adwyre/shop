import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) { //action = {product: {}, quantity: ...} 
      const { product } = action.payload;
      const id = product.id;
      state.cartItems[id] = action.payload
    },
    updateQuantity(state, action) { //action = {id: ..., quantity: ...} 
      const { id, quantity } = action.payload;
      state.cartItems[id].quantity = quantity;
    },
    removeFromCart(state, action) { //action = id
      // if only one item left in cart make sure it returns and empty state
      if (Object.keys(state.cartItems).length === 1) {
        state.cartItems = {};
      } else {
        delete state.cartItems[action.payload]
      }
    },
    submitCart(state) {
      state.cartItems = {}
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
export const {addToCart, updateQuantity, removeFromCart, submitCart} = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

