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
<<<<<<< HEAD
=======

>>>>>>> main
    },
  },
});

<<<<<<< HEAD
export const { setArticlesData, setDetailArticle } = articlesSlice.actions;

=======

export const { setArticlesData, setDetailArticle } = articlesSlice.actions;
>>>>>>> main
export default articlesSlice.reducer;
