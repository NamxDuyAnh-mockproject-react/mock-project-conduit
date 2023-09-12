import { createAction } from "@reduxjs/toolkit";
export const fetchAllArticles = createAction("FETCH_ALL_ARTICLES");
export const fetchDetailArticles = createAction("FETCH_DETAIL_ARTICLES");
export const createArticles = createAction("CREATE_ARTICLES");
