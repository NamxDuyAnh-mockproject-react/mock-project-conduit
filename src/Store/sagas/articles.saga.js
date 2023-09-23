import { call, put } from "redux-saga/effects";
import { fetchAllComments } from "../actions/articles.action";
import {
  setArticlesData,
  setDetailArticle,
  setCommentsData,
} from "../slices/articles.slice";
import articlesService from "../../http/services/articles.service";

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
  const response = yield call(articlesService.fetchAllComment, action.payload);

  yield put(setCommentsData(response.comments));
}

export function* addCommentsSaga(action) {
  yield call(articlesService.addNewComment, action.payload);
  yield put(fetchAllComments(action.payload.slug));
}

export function* fetchArticlesByTypeSaga(action) {
  let type =action.payload.type;
 console.log(type)
  let response;

  if (type === "all") {
    console.log("a")
    response = yield call(
      articlesService.fetchAllArticles,
      action.payload
    );
  } else if (type === "follow") {
    response = yield call(
      articlesService.fetchArticlesFollow,
      action.payload
    );
  } else if (type === "MyArticles") {
    response = yield call(
      articlesService.fetchMyArticles,
      action.payload
    );
  } else if (type === "Favorited") {
    response = yield call(
      articlesService.fetchFavoritedArticles,
      action.payload
    );
  }

  yield put(setArticlesData(response));
}
