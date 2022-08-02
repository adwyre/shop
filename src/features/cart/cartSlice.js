import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/fakestore";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    }
  }});

// Actions and Reducers
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

