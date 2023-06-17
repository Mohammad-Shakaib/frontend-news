import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  user: null,
  token: userToken,
  logoutRedirection: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = "" + action.payload.token;
      localStorage.setItem("token", state.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.logoutRedirection = "/login";
      localStorage.removeItem("token");
    },
    getUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { login, logout, getUser } = authSlice.actions;
export const selectAuthUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
