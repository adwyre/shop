import { createSlice } from '@reduxjs/toolkit';
import { getProductsByCategory, getAllProducts } from "../api/fakestore";

const initialState = {
  products: [],
  category: '',
  subcategory: '',
  sorted: [],
  searchTerm: '',
  searchResults: [],
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
      let sorted;
      if (state.searchResults.length > 0) {
        sorted = state.searchResults.slice();
      } else {
        sorted = state.products.slice();
      }
      if (action.payload === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
        state.sorted = sorted
      } else if (action.payload === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
        state.sorted = sorted
      } else if (action.payload === 'rating') {
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        state.sorted = sorted
      } else {
        state.sorted = []
      }
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload[0].toUpperCase() + action.payload.substring(1)
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload
    }
  }
})

// Fetch products by category from API
export const fetchProducts = (category) => async (dispatch) => {
  try {
    const products = await getProductsByCategory(category);
    dispatch(setProducts(products))
  } catch (error) {
    console.error(error);
  }
};

// Filter subcategory for products
export const fetchSubcategory = (category, subcategory) => async (dispatch) => {
  try {
    const products = await getProductsByCategory(category);
    if (subcategory === 'outerwear') {
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
    console.error(error);
  }
}

// Fetch all products from API and filter search results
export const fetchSearchResults = (searchTerm) => async (dispatch) => {
  try {
    let products = await getAllProducts();
    // filter out irrelevant products
    products = products.filter(product => product.category === "women's clothing" || product.category === "men's clothing" || product.category === "jewelery")
    dispatch(setProducts(products))
    dispatch(setSearchResults(products.filter(product => product.title.includes(searchTerm))))
  } catch (error) {
    console.error(error);
  }
};

// Actions and Reducers
export const {setProducts, setCategory, setSubcategory, sortBy, setSearchTerm, setSearchResults} = productsSlice.actions;
export default productsSlice.reducer;

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectCategory = (state) => state.products.category;
export const selectSubcategory = (state) => state.products.subcategory;
export const selectSorted = (state) => state.products.sorted;
export const selectSearchTerm = (state) => state.products.searchTerm;
export const selectSearchResults = (state) => state.products.searchResults;