import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserById } from "../api/fakestore";

const initialState = {
  user: {},
  authenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuth(state, action) {
      state.authenticated = action.payload
    },
  }
})

// Authenticate user
export const authenticate = (userName, password) => async (dispatch) => {
  try {
    const allUsers = await getAllUsers();
    const foundUser = allUsers.filter(user => user.username === userName)[0]
    if (foundUser && foundUser.password === password) {
      const id = foundUser.id
      const user = await getUserById(id);
      dispatch(setAuth(true))
      dispatch(setUser(user))
    } else {
      dispatch(setAuth(false))
    }
  } catch (error) {
    console.error(error);
  }
};

// Actions and reducers
export const {setUser, setAuth} = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectAuth = (state) => state.user.authenticated;