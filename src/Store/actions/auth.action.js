import { createAction } from "@reduxjs/toolkit";

export const createUser = createAction("CREATE_USER");
export const fetchUser = createAction("FETCH_USER");
export const login = createAction("LOGIN");
export const loginSuccess = createAction("LOGIN_SUCCESS"); // Thêm action LOGIN_SUCCESS
export const loginFail = createAction("LOGIN_FAIL"); // Thêm action LOGIN_FAIL
