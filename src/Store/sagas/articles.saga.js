import { call, put } from "redux-saga/effects";

import { setArticlesData, setDetailArticle,setCommentsData } from "../slices/articles.slice";
import articlesService from "../../http/services/articles.service";

export function* fetchArticlesSaga() {
  const articles = yield call(articlesService.fetchAllArticles);

  yield put(setArticlesData(articles));
}

export function* createArticleSaga(action) {

  yield call(articlesService.createArticles, action.payload);
}

export function* fetchDetailArticlesSaga(action) {
  const article = yield call(
    articlesService.fetchDetailArticles,
    action.payload
  );
  yield put(setDetailArticle(article));
}

export function* fetchCommentsSaga(action) {
  const response = yield call(articlesService.fetchAllComment,action.payload);
  
  yield put(setCommentsData(response.comments));
}