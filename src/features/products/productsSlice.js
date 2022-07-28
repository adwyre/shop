import { createSlice } from '@reduxjs/toolkit';
import { getProductsByCategory } from "../../api/fakestore";

const initialState = {
  products: [],
  isLoading: false,
  error: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    loadProducts(state) {
      state.isLoading = true;
      state.error = false;
    },
    loadProductsFailed(state) {
      state.isLoading = false;
      state.error = true;
    }
  }
})

// Fetch products from API
export const fetchProducts = (category) => async (dispatch) => {
  try {
    dispatch(loadProducts());
    const products = await getProductsByCategory(category);
    dispatch(setProducts(products))
  } catch (error) {
    dispatch(loadProductsFailed())
  }
};

// Actions and Reducers
export const {setProducts, loadProducts, loadProductsFailed} = productsSlice.actions;
export default productsSlice.reducer;

// Selectors
export const selectProducts = (state) => state.products.products;