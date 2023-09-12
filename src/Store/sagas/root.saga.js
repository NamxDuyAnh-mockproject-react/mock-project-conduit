import { fetchArticlesSaga, createArticleSaga } from "./articles.saga";
import { all, takeEvery } from "redux-saga/effects";
import { fetchAllArticles, createArticles } from "../actions/articles.action";
import { fetchTagSaga } from "./tag.saga";
import { fetchAllTag } from "../actions/tag.actions";
export function* rootSaga() {
  yield all([
    takeEvery(fetchAllArticles, fetchArticlesSaga),
    takeEvery(createArticles, createArticleSaga),
    takeEvery(fetchAllTag, fetchTagSaga),
  ]);
}
