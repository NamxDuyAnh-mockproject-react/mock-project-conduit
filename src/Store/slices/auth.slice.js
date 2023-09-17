import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      console.log(state.user);
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSuccess, (state, action) => {
        state.user = action.payload.user; // Cập nhật trạng thái đăng nhập của người dùng
        state.loading = false;
        state.error = null;
      })
      .addCase(loginFail, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
