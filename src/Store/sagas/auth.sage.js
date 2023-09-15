import { call, put } from "redux-saga/effects";
import { loginSuccess, loginFail } from "../slices/auth.slice";
import authService from "../../http/services/auth.service";

export function* checkLoginSaga(action) {
  console.log(action);
  try {
    const data = yield call(authService.login, action.payload);

    if (data.error) {
      yield put(loginFail(data.error));
    } else {
      const token = data.user.token;
      localStorage.setItem("token", JSON.stringify(token));
      yield put(loginSuccess(data.user));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
