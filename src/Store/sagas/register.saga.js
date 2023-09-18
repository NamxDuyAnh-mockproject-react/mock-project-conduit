import { call, put } from "redux-saga/effects";
import { userRegistered, registeredFailed } from "../slices/register.slice";
import authService from "../../http/services/auth.service";

export function* registerUserSaga(action) {
  try {
    const response = yield call(authService.fetchRegisterUser, action.payload);
    yield put(userRegistered(response.user));
  } catch (error) {
    yield put(registeredFailed(error.message));
  }
}
