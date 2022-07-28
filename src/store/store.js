import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';

export default configureStore({
  reducer: combineReducers({
    products: productsReducer,
  }),
});
