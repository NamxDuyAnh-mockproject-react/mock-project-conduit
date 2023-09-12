import { call, put, takeLatest } from "redux-saga/effects";
import authService from "../services/auth.service";
import { loginStart, loginSuccess, loginFailure } from "../redux/authSlice";

function* loginSaga(action) {
  try {
    yield put(loginStart());
    const user = yield call(
      authService.login,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("auth/login", loginSaga);
}
