import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/fakestore";

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
      const id = action.payload[product].id;

      state.cartItems[id] = action.payload
    },
    updateQuantity(state, action) { //action = {id: ..., quantity: ...} 
      const { id, quantity } = action.payload;

      state.cartItems[id].quantity = quantity;
    },
    removeFromCart(state, action) {
      
    }
  }});

// Actions and Reducers
export const {addToCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

