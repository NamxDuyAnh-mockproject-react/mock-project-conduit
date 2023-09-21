import { call, put } from "redux-saga/effects";
import {
  loginSuccess,
  loginFail,
  login,
  updateUser,
} from "../slices/auth.slice";
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
    console.log(data);
    if (data.error) {
      yield put(loginFail(data.error));
    } else {
      yield put(loginSuccess(data.user));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
export function* registerUserSaga(action) {
  try {
    yield put(login());

    const response = yield call(authService.fetchRegisterUser, action.payload);
    if (response.error) {
      yield put(loginFail(response.error));
    } else {
      yield put(loginSuccess(response.user));
    }
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
export function* updateUserSaga(action) {
  console.log(action.payload)
  const response = yield call(authService.updateUser, action.payload);
  yield put(updateUser(response.user));
}
