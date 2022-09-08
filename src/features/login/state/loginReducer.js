import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../mock-server/api";

const initialState = {
  user: null,
  registeredUsers: [],
  registeredUserIds: [],
  loading: false,
};

export const loadUsers = createAsyncThunk(
  "login/fetchUsers",
  async () => await getUsers()
);

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
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(loadUsers.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        registeredUserIds: Object.keys(action.payload),
        registeredUsers: action.payload,
      }));
  },
});

export const { addAuthenticatedUser, removeAuthenticatedUser } =
  loginSlice.actions;

const selectLoginSlice = (state) => state.login;

export const selectCurrentUser = (state) => selectLoginSlice(state).user;
export const selectRegisteredUsers = (state) =>
  selectLoginSlice(state).registeredUsers;
export const selectIsLoadingRegisteredUsers = (state) =>
  selectLoginSlice(state).loading;

export default loginSlice.reducer;
