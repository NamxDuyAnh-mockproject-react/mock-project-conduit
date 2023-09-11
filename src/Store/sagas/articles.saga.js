import { call, put } from "redux-saga/effects";
import { setArticlesData } from "../slices/articles.slice";
import articlesService from "../../http/services/articles.service";

// Worker
export function* fetchArticlesSaga() {
  // Call API
  const articles = yield call(articlesService.fetchAllArticles);

  // Dispatch action để lưu lại data từ API vào store

  // dispatch() dùng trong component
  // put() dùng trong saga
  yield put(setArticlesData(articles));
}

export function* createArticleSaga(action) {
  // Call API

  yield call(articlesService.createArticles, action.payload);
}
