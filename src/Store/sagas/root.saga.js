import {
  fetchUser,
  getCurrentUser,
  updateUser,
  getProfile,
} from "../actions/auth.action";
import {
  checkCurrentUser,
  checkLoginSaga,
  registerUserSaga,
  updateUserSaga,
  getProfileSaga,
} from "../sagas/auth.sage";
import { createUser } from "../actions/auth.action";

import {
  createArticleSaga,
  fetchDetailArticlesSaga,
  fetchCommentsSaga,
  addCommentsSaga,
  fetchArticlesByTypeSaga,
  deleteArticlesSaga,
  favoritedArticlesSaga,
  unFavoritedArticlesSaga,
  updateArticleSaga,
} from "./articles.saga";
import { all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  createArticles,
  fetchDetailArticles,
  fetchAllComments,
  addComments,
  fetchArticlesByType,
  deleteArticles,
  favoritedArticles,
  unfavoritedArticles,
  updateArticle,
} from "../actions/articles.action";
import { fetchTagSaga } from "./tag.saga";
import { fetchAllTag } from "../actions/tag.actions";
export function* rootSaga() {
  yield all([
    takeEvery(fetchUser, checkLoginSaga),
    takeEvery(getCurrentUser, checkCurrentUser),
    takeEvery(updateUser, updateUserSaga),
    takeEvery(createUser, registerUserSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(fetchAllTag, fetchTagSaga),
    takeEvery(fetchDetailArticles, fetchDetailArticlesSaga),
    takeEvery(fetchAllComments, fetchCommentsSaga),
    takeEvery(addComments, addCommentsSaga),
    takeLatest(fetchArticlesByType, fetchArticlesByTypeSaga),
    takeEvery(deleteArticles, deleteArticlesSaga),
    takeEvery(favoritedArticles, favoritedArticlesSaga),
    takeEvery(unfavoritedArticles, unFavoritedArticlesSaga),
    takeEvery(updateArticle, updateArticleSaga),
    takeEvery(getProfile, getProfileSaga),
  ]);
}
