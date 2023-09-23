import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: {},
    detailArticle: {},
    allCommentsData: [],
    tab: "",
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
    setTabs(state, action) {
      state.tab = action.payload;
    },
  },
});

export const { setArticlesData, setDetailArticle, setCommentsData, setTabs } =
  articlesSlice.actions;

export default articlesSlice.reducer;
