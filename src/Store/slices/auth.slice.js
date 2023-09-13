import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  isLoggedIn: false,
  Logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.Logging = true;
    },
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.Logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state) {
      state.Logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
=======
    user: null,
    error: null,
    loading: false,
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
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { login, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
>>>>>>> main
