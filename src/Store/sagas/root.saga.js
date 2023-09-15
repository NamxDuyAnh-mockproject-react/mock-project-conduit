import { fetchUser } from "../actions/auth.action";
import { checkLoginSaga } from "../sagas/auth.sage";
import { createUser } from "../actions/auth.action";
import { registerUserSaga } from "../sagas/register.saga";
import {
  fetchArticlesSaga,
  createArticleSaga,
  fetchDetailArticlesSaga,
  fetchCommentsSaga,
} from "./articles.saga";
import { all, takeEvery } from "redux-saga/effects";
import {
  fetchAllArticles,
  createArticles,
  fetchDetailArticles,
  fetchAllComments,
} from "../actions/articles.action";
import { fetchTagSaga } from "./tag.saga";
import { fetchAllTag } from "../actions/tag.actions";
import { login } from "../actions/auth.action";
export function* rootSaga() {
  yield all([
    takeEvery(fetchAllArticles, fetchArticlesSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(fetchAllTag, fetchTagSaga),
    takeEvery(fetchDetailArticles, fetchDetailArticlesSaga),

    takeEvery(fetchUser, checkLoginSaga),
    takeEvery(createUser, registerUserSaga),

    takeEvery(fetchAllComments,fetchCommentsSaga)

  ]);
}
