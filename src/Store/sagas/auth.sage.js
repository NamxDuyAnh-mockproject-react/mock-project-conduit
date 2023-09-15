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
      yield put(loginSuccess(data));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
