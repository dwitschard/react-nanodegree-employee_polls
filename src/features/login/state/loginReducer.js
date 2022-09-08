import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addAuthenticatedUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    removeAuthenticatedUser: (state) => ({
      ...state,
      user: null,
    }),
  },
});

export const { addAuthenticatedUser, removeAuthenticatedUser } =
  loginSlice.actions;

const selectLoginSlice = (state) => state.login;

export const selectCurrentUser = (state) => selectLoginSlice(state).user;

export default loginSlice.reducer;
