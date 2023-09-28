import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: false,
  isLoggedIn: false,
  profile: {},
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
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
    updateUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = action.payload;
    },
    getProfile: (state, action) => {
      
      state.profile = action.payload;

    },
  },
});

export const {
  login,
  loginSuccess,
  loginFail,
  logout,
  updateUser,
  getProfile,
} = authSlice.actions;
export default authSlice.reducer;
