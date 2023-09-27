import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import produce from "immer";
const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: {},
    detailArticle: {},
    allCommentsData: [],
    tab: "",
    createArticlesData: {},
    redirectUrl: "",
    currentTag: "",
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
    },
    setCurrentTag(state, action) {
      state.currentTag = action.payload;
    },
    toggleArticleFavorite(state, action) {
      const { slug, favorited } = action.payload;

      if (Array.isArray(state.allArticlesData.articles)) {
        const articleIndex = state.allArticlesData.articles.findIndex((article) => article.slug === slug);

        if (articleIndex !== -1) {
          produce(state, (draftState) => {
            draftState.allArticlesData.articles[articleIndex] = {
              ...draftState.allArticlesData.articles[articleIndex],
              favorited: favorited,
            };
          }
          );
        }
        
      }
    },
  },
});

export const {
  setArticlesData,
  setDetailArticle,
  setCommentsData,
  setTabs,
  setCreateArticles,
  setRedirect,
  clearRedirect,
  setCurrentTag,
  toggleArticleFavorite,
} = articlesSlice.actions;

export default articlesSlice.reducer;
