import { call, put } from "redux-saga/effects";
import { loginSuccess, loginFail, login } from "../slices/auth.slice";
import authService from "../../http/services/auth.service";

export function* checkLoginSaga(action) {
  try {
    yield put(login());

    const data = yield call(authService.login, action.payload);

    if (data.error) {
      yield put(loginFail(data.error));
    } else {
      yield put(loginSuccess(data.user));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
export function* checkCurrentUser() {
  try {
    const data = yield call(authService.getCurrentUser);
   console.log(data)
    if (data.error) {
      yield put(loginFail(data.error));
    } else {
      yield put(loginSuccess(data.user));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}