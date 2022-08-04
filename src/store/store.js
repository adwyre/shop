import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import detailsReducer from './detailsSlice'

export default configureStore({
  reducer: combineReducers({
    products: productsReducer,
    cart: cartReducer,
    details: detailsReducer
  }),
});
