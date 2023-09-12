import { fetchArticlesSaga, createArticleSaga } from "./articles.saga";
import { all, takeEvery } from "redux-saga/effects";
import { fetchAllArticles, createArticles } from "../actions/articles.action";
import { loginSaga, watchLogin } from "../sagas/auth.sage";
import { login } from "../actions/auth.action";

export function* rootSaga() {
  yield all([
    takeEvery(fetchAllArticles, fetchArticlesSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(loginSaga, watchLogin),
    takeEvery(login),
  ]);
}
