import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { login, logout, setUserDetails } = authSlice.actions;

export default authSlice.reducer;
