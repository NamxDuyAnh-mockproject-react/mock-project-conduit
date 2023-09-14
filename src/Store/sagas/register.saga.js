import { call, put } from "redux-saga/effects";
import { userRegistered, registeredFailed } from "../slices/register.slice";
import authService from "../../http/services/auth.service";

export function* registerUserSaga(action) {
  try {
    const response = yield call(authService.fetchRegisterUser, action.payload);

    const token = response.user.token;
    console.log(response);

    localStorage.setItem("token", JSON.stringify(token));

    yield put(userRegistered(response.data.user));
  } catch (error) {
    yield put(registeredFailed(error.message));
  }
}
