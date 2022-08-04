import { createSlice } from '@reduxjs/toolkit';
import { getProductById } from '../api/fakestore';

const initialState = {
  product: {},
  error: false,
  isLoading: false,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action) {
      state.product = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    loadDetails(state) {
      state.isLoading = true;
      state.error = false;
    },
    loadDetailsFailed(state) {
      state.isLoading = false;
      state.error = true;
    }
  },
});

// Fetch product details from API
export const fetchDetails = (id) => async (dispatch) => {
  try {
    dispatch(loadDetails());
    const product = await getProductById(id);
    dispatch(setDetails(product))
  } catch (error) {
    dispatch(loadDetailsFailed())
  }
};

// Actions and Reducers
export const {setDetails, loadDetails, loadDetailsFailed} = detailsSlice.actions;
export default detailsSlice.reducer;

// Selectors
export const selectDetails = (state) => state.details.product;