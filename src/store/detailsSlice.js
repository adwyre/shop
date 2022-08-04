import { createSlice } from '@reduxjs/toolkit';
import { getProductById } from '../api/fakestore';

const initialState = {
  product: {},
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action) {
      state.product = action.payload;
      state.isLoading = false;
      state.error = false;
    }
  },
});

// Fetch product details from API
export const fetchDetails = (id) => async (dispatch) => {
  try {
    const product = await getProductById(id);
    dispatch(setDetails(product))
  } catch (error) {
    console.error(error);
  }
};

// Actions and Reducers
export const {setDetails} = detailsSlice.actions;
export default detailsSlice.reducer;

// Selectors
export const selectDetails = (state) => state.details.product;