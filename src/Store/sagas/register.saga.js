import { call, put } from "redux-saga/effects";
import { userRegistered, registeredFailed } from "../slices/register.slice";
import { fetchRegisterUser } from "../../http/services/register.service";

export function* registerUserSaga(action) {
    try {
        const response = yield call(fetchRegisterUser, action.payload);
        const token = response.data.token;

        yield put(userRegistered(response.data.user))

        localStorage.setItem('token', token);
    } catch (error) {
        yield put(registeredFailed(error.message));
    }
}
