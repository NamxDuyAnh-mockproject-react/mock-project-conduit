import { createAction } from "@reduxjs/toolkit";
export const fetchAllArticles = createAction("FETCH_ALL_ARTICLES");
export const fetchArticlesFolow = createAction("FETCH_FOLLOW_ARTICLES");
export const fetchDetailArticles = createAction("FETCH_DETAIL_ARTICLES");

export const createArticles = createAction("CREATE_ARTICLES");
export const addComments = createAction("ADD_COMMENTS");
export const fetchAllComments = createAction("FETCH_ALL_COMMENTS");
