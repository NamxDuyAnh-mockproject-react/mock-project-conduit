import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: false,
  registrationError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRegistered: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.registrationError = null;
    },
    registeredFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registrationError: (state, action) => {
      state.registrationError = action.payload; // Thêm action này để quản lý thông báo lỗi
    },
  },
});

export const { userRegistered, registeredFailed, registrationError } =
  userSlice.actions;
export default userSlice.reducer;
