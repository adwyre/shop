import { createSlice } from '@reduxjs/toolkit';
import { getProductsByCategory } from "../../api/fakestore";

const initialState = {
  products: [],
  category: '',
  subcategory: '',
  sorted: [],
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
    setCategory(state, action) {
      state.category = action.payload
    },
    setSubcategory(state, action) {
      state.subcategory = action.payload
    },
    sortBy(state, action) {
      if (action.payload === 'price-asc') {
        const sorted = state.products.slice();
        sorted.sort((a, b) => a.price - b.price);
        state.sorted = sorted
      } else if (action.payload === 'price-desc') {
        const sorted = state.products.slice();
        sorted.sort((a, b) => b.price - a.price);
        state.sorted = sorted
      } else if (action.payload === 'rating') {
        const sorted = state.products.slice();
        sorted.sort((a, b) => b.rating - a.rating);
        state.sorted = sorted
      } else {
        state.sorted = []
      }
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

// Filter subcategory for products
export const fetchSubcategory = (category, subcategory) => async (dispatch) => {
  try {
    dispatch(loadProducts());
    const products = await getProductsByCategory(category);
    if (subcategory == 'outerwear') {
      dispatch(setProducts(products.filter(product => product.title.includes('Jacket'))))
    } else if (subcategory === 'tops') {
      dispatch(setProducts(products.filter(product => !product.title.includes('Jacket') && !product.title.includes('Backpack'))))
    } else if (subcategory === 'bracelets') {
      dispatch(setProducts(products.filter(product => product.title.includes('Bracelet'))))
    } else if (subcategory === 'rings') {
      dispatch(setProducts(products.filter(product => !product.title.includes('Bracelet'))))
    } else {
      dispatch(setProducts(products))
    }
  } catch (error) {
    dispatch(loadProductsFailed())
  }
}

// Actions and Reducers
export const {setProducts, setCategory, setSubcategory, sortBy, loadProducts, loadProductsFailed} = productsSlice.actions;
export default productsSlice.reducer;

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectCategory = (state) => state.products.category;
export const selectSubcategory = (state) => state.products.subcategory;
export const selectSorted = (state) => state.products.sorted;