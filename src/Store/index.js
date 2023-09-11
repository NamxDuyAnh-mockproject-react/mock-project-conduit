import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articles.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  articles: articlesReducer,
});

// Tạo store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
