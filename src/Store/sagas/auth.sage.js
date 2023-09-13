import { call, put } from "redux-saga/effects";
import { login, loginSuccess, loginFail } from "../slices/auth.slice"
import authService from "../../http/services/auth.service"

export function* checkLoginSaga() {
  const data = yield call(authService.login);

  if (data.error) {
    yield put(loginFail(data))
  } else {
    yield put(loginSuccess(data))
  }
}