import { call, put } from "redux-saga/effects";
import { fetchAllComments } from "../actions/articles.action";
import {
  setArticlesData,
  setDetailArticle,
  setCommentsData,
} from "../slices/articles.slice";
import articlesService from "../../http/services/articles.service";

export function* fetchArticlesSaga(action) {
  console.log(action);
  const articles = yield call(articlesService.fetchAllArticles,action.payload);

  yield put(setArticlesData(articles));
}

export function* createArticleSaga(action) {
  console.log(action);
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
  const response = yield call(articlesService.fetchAllComment, action.payload);
  
  yield put(setCommentsData(response.comments));
 
}

export function* addCommentsSaga(action) {
  yield call(articlesService.addNewComment, action.payload);
  yield put(fetchAllComments(action.payload.slug));
}
