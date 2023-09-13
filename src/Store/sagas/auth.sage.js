import { fork } from "redux-saga/effects";

function* handleLogin(payload: LoginPayload) {}

function* handleLogout() {}

function* watchLoginFlow() {}

export default function* authSage() {
  yield fork(watchLoginFlow);
}
