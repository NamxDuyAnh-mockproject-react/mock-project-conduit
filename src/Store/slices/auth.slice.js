import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { login, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
