import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articles.slice";
<<<<<<< HEAD
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root.saga";
import tagReducer from "./slices/tag.slice";
=======
import authReducer from "./slices/auth.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root.saga";
import tagReducer from "./slices/tag.slice";

>>>>>>> main
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  articles: articlesReducer,
<<<<<<< HEAD
=======

  auth: authReducer,

>>>>>>> main
  tag: tagReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
