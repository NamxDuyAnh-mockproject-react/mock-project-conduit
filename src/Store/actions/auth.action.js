import { createAction } from "@reduxjs/toolkit";

export const createUser = createAction("CREATE_USER");
export const fetchUser = createAction("FETCH_USER");

export const login = createAction("LOGIN");
