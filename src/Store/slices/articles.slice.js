import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: { allArticlesData: [] },
  reducers: {
    setArticlesData(state, action) {
      state.allArticlesData = action.payload;
    },
  },
});

export const { setArticlesData } = articlesSlice.actions;

export default articlesSlice.reducer;
