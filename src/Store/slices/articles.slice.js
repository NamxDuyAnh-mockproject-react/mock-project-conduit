import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: {},
    detailArticle: {},
    allCommentsData: [],
    tab: "",
    createArticlesData: {},
    redirectUrl: "",currentTag:""
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
    setCreateArticles(state, action) {
      state.createArticlesData = action.payload;
    },
    setRedirect(state, action) {
      state.redirectUrl = action.payload;
    },
    clearRedirect(state) {
      state.redirectUrl = null;
    },setCurrentTag(state, action) {
      state.currentTag = action.payload;
    }
  },
});

export const {
  setArticlesData,
  setDetailArticle,
  setCommentsData,
  setTabs,
  setCreateArticles,
  setRedirect,
  clearRedirect,setCurrentTag
} = articlesSlice.actions;

export default articlesSlice.reducer;
