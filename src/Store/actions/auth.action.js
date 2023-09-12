import { loginStart, loginSuccess, loginFailure } from "../slices/auth.slice";
import authService from "../../http/services/auth.service";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await authService.login(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
