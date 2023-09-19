import { fetchUser, getCurrentUser } from "../actions/auth.action";
import { checkCurrentUser, checkLoginSaga } from "../sagas/auth.sage";
import { createUser } from "../actions/auth.action";
import { registerUserSaga } from "../sagas/register.saga";
import {
  fetchArticlesSaga,
  createArticleSaga,
  fetchDetailArticlesSaga,
  fetchCommentsSaga,
  addCommentsSaga,
} from "./articles.saga";
import { all, takeEvery } from "redux-saga/effects";
import {
  fetchAllArticles,
  createArticles,
  fetchDetailArticles,
  fetchAllComments,
  addComments,
} from "../actions/articles.action";
import { fetchTagSaga } from "./tag.saga";
import { fetchAllTag } from "../actions/tag.actions";
export function* rootSaga() {
  yield all([
    takeEvery(fetchAllArticles, fetchArticlesSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(fetchAllTag, fetchTagSaga),
    takeEvery(fetchDetailArticles, fetchDetailArticlesSaga),
    takeEvery(fetchUser, checkLoginSaga),
    takeEvery(createUser, registerUserSaga),
    takeEvery(fetchAllComments, fetchCommentsSaga),
    takeEvery(addComments, addCommentsSaga),
    takeEvery(getCurrentUser,checkCurrentUser)
  ]);
}
