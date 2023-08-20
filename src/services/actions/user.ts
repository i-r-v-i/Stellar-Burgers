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
import {
  getCookie,
  setCookie,
  deleteCookie,
} from "../../components/utils/cookie";
import { AppDispatch, AppThunk } from "../types/store";
import { TUserData } from "../types/user";

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

export const checkAuth:  AppThunk = () => {
  return function (dispatch: AppDispatch) {
  if (getCookie("accessToken")) {
    dispatch(getUserData());
  }
};
}

export function refreshToken() {
  return refreshTokenApi()
    .then((res) => {
      setCookie("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);

    })
    .catch((err) => {
      console.log(`Ошибка рефреша токена ${err}`);
    });
}

export const getUserData: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: GET_USER_REQUEST });
    return getUserApi()
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.user });
        console.log("getUser");
      })
      .catch((err) => {
          dispatch({
            type: GET_USER_FAILED,
            payload: err.message,
          });
      });
  };
}

export function setNewUserData(userData: TUserData) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: UPDATE_USER_REQUEST });
    return patchUserDataApi(userData)
      .then((res) => {
        if(res.success) {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: res.user });
      }
        
      })
      .catch((err) => {
        console.log(`Ошибка обновления профиля ${err}`);
          dispatch({
            type: UPDATE_USER_FAILED,
            payload: err.message,
          });
      });
  };
}

export const saveUserPath = (path: string) => ({
  type: "SAVE_PREVIOUS_ROUTE",
  payload: path,
});



export function registrateUser(userData:  TUserData, navigate: Function) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: REGISTRATION_REQUEST });
    setUser(userData)
      .then((res) => {
        if (res.success) {
          console.log(res);
          dispatch({ type: REGISTRATION_SUCCESS, payload: res });
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
}

export function forgotPassword(userEmail: string, navigate: Function) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    resetPasswordApi(userEmail)
      .then((res) => {
        if (res.success) {
          console.log(res);
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

export function setNewPassword(newData: string, navigate: Function) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    changePasswordApi(newData)
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

export function logIn(data: TUserData, navigate: Function, previousRoute: string) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGIN_REQUEST });
    loginApi(data)
      .then((res) => {
        if (res.success) {
          console.log(res);
          dispatch({ type: LOGIN_SUCCESS, payload: res });
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

export function logOut(navigate: Function) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    logoutApi(localStorage.getItem("refreshToken"))
      .then((res) => {
        if (res.success) {
          console.log(res);
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
}