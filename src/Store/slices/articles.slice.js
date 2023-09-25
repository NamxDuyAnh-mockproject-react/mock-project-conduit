import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: {},
    detailArticle: {},
    allCommentsData: [],
    tab: "",
    createArticlesData: {},
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
    setCreateArticles(state,action){
      state.createArticlesData = action.payload;
    }
  },
});

export const { setArticlesData, setDetailArticle, setCommentsData, setTabs,setCreateArticles } =
  articlesSlice.actions;

export default articlesSlice.reducer;
