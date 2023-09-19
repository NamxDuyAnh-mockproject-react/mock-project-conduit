import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: false,
  registrationError: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state) => {
      state.loading = true;
    },
    userRegistered: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.registrationError = null;
      state.isLoggedIn = true;
    },
    registeredFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registrationError: (state, action) => {
      state.registrationError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegistered, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(registeredFailed, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userRegistered, registeredFailed, registrationError, register } =
  userSlice.actions;
export default userSlice.reducer;
