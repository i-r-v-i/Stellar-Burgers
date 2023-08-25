import {
  setUser,
  resetPasswordApi,
  changePasswordApi,
  loginApi,
  logoutApi,
  patchUserDataApi,
  refreshTokenApi,
  getUserApi,
} from "../../components/utils/data";
import { getCookie, setCookie, deleteCookie } from "../../components/utils/cookie";
import { AppDispatch, AppThunk } from "../types/store";
import { TUserData } from "../types/user";
import { NavigateFunction } from "react-router-dom";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const SEND_EMAIL = "SEND_EMAIL";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const IS_CHANGING = "IS_CHANGING";
export const STOP_CHANGING = "STOP_CHANGING";
export const SAVE_PREVIOUS_ROUTE = "SAVE_PREVIOUS_ROUTE";

export const checkAuth: AppThunk = () => {
  return function (dispatch) {
    if (getCookie("accessToken")) {
      dispatch(getUserData());
    }
  };
};

export function refreshToken() {
  return refreshTokenApi()
    .then((res) => {
      console.log(res);
      setCookie("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((err) => {
      console.log(`Ошибка рефреша токена ${err}`);
    });
}

export const getUserData: AppThunk = () => {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    return getUserApi()
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.user });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
          payload: err.message,
        });
      });
  };
};

export const setNewUserData: AppThunk = (userData: TUserData) => {
  return function (dispatch) {
    dispatch({ type: UPDATE_USER_REQUEST });
    return patchUserDataApi(userData)
      .then((res) => {
          dispatch({ type: UPDATE_USER_SUCCESS, payload: res.user });
      })
      .catch((err) => {
        console.log(`Ошибка обновления профиля ${err}`);
        dispatch({
          type: UPDATE_USER_FAILED,
          payload: err.message,
        });
      });
  };
};

export const saveUserPath = (path: string) => ({
  type: "SAVE_PREVIOUS_ROUTE",
  payload: path,
});

export const registrateUser: AppThunk = (
  userData: TUserData,
  navigate: NavigateFunction
) => {
  return function (dispatch) {
    dispatch({ type: REGISTRATION_REQUEST });
    return setUser(userData)
      .then((res) => {
        if (res.success) {
          dispatch({ type: REGISTRATION_SUCCESS, payload: res.user });
          navigate("/login");
        }

        localStorage.setItem("refreshToken", res.refreshToken);
        setCookie("accessToken", res.accessToken);
      })
      .catch((err) => {
        console.log(`Ошибка регистрации ${err}`);
        dispatch({
          type: REGISTRATION_FAILED,
          payload: err.message,
        });
      });
  };
};

export function forgotPassword(formEmail: { email: string }, navigate: NavigateFunction) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    return resetPasswordApi(formEmail)
      .then((res) => {
        if (res.success) {
          dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res });
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        console.log(`Ошибка cброса пароля ${err}`);
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          payload: err.message,
        });
      });
  };
}

export function setNewPassword(
  newData: { password: string; token: string },
  navigate: NavigateFunction
) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    return changePasswordApi(newData)
      .then((res) => {
        if (res.success) {
          dispatch({ type: RESET_PASSWORD_SUCCESS });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(`Ошибка изменения пароля ${err}`);
        dispatch({
          type: RESET_PASSWORD_FAILED,
          payload: err.message,
        });
      });
  };
}

export function logIn(
  data: { email: string; password: string },
  navigate: NavigateFunction,
  previousRoute: string
) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGIN_REQUEST });
    return loginApi(data)
      .then((res) => {
        if (res.success) {
          dispatch({ type: LOGIN_SUCCESS, payload: res.user });
          localStorage.setItem("refreshToken", res.refreshToken);
          setCookie("accessToken", res.accessToken);
          navigate(previousRoute);
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации ${err}`);
        dispatch({
          type: LOGIN_FAILED,
          payload: err.message,
        });
      });
  };
}

export const logOut: AppThunk = (navigate: Function) => {
  return function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    logoutApi(localStorage.getItem("refreshToken"))
      .then((res) => {
        if (res.success) {
          dispatch({ type: LOGOUT_SUCCESS });
          localStorage.removeItem("refreshToken");
          deleteCookie("accessToken");
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка выхода из профиля ${err}`);
        dispatch({
          type: LOGOUT_FAILED,
          payload: err.message,
        });
      });
  };
};
