
import { loginSaga, watchLogin } from "../sagas/auth.sage";
import { login } from "../actions/auth.action";
import {
  fetchArticlesSaga,
  createArticleSaga,
  fetchDetailArticlesSaga,
} from "./articles.saga";
import { all, takeEvery } from "redux-saga/effects";
import {
  fetchAllArticles,
  createArticles,
  fetchDetailArticles,
} from "../actions/articles.action";
import { fetchTagSaga } from "./tag.saga";
import { fetchAllTag } from "../actions/tag.actions";

export function* rootSaga() {
  yield all([
    takeEvery(fetchAllArticles, fetchArticlesSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(loginSaga, watchLogin),
    takeEvery(login),
    takeEvery(fetchAllTag, fetchTagSaga),
    takeEvery(fetchDetailArticles, fetchDetailArticlesSaga),
  ]);
}
