import { call, put } from "redux-saga/effects";
import {
  userRegistered,
  registeredFailed,
  register,
} from "../slices/register.slice";
import authService from "../../http/services/auth.service";

export function* registerUserSaga(action) {
  try {
    yield put(register());

    const response = yield call(authService.fetchRegisterUser, action.payload);
    if (response.error) {
      yield put(registeredFailed(response.error));
    } else {
      yield put(userRegistered(response.user));
    }
  } catch (error) {
    yield put(registeredFailed(error.message));
  }
}
