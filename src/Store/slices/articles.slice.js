import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: [],
    detailArticle: {},
    allCommentsData: [],
  },
  reducers: {
    setArticlesData(state, action) {
      state.allArticlesData = action.payload;
    },
    setDetailArticle(state, action) {
      state.detailArticle = action.payload;
    },
    setCommentsData(state, action) {
      state.allCommentsData = action.payload;
    },
  },
});

export const { setArticlesData, setDetailArticle, setCommentsData } =
  articlesSlice.actions;

export default articlesSlice.reducer;
