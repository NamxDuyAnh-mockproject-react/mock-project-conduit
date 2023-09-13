import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticlesData: [],
    detailArticle: {},
  },
  reducers: {
    setArticlesData(state, action) {

      state.allArticlesData = action.payload;

    },
    setDetailArticle(state, action) {
      console.log(action.payload);
      state.detailArticle = action.payload;

    },
  },
});


export const { setArticlesData, setDetailArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
