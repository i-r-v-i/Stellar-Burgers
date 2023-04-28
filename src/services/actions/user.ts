import { TUserData } from './../types/user';
import { AppDispatch, AppThunk } from './../types/store';
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

export const REGISTRATION_REQUEST: "REGISTRATION_REQUEST" = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED: "REGISTRATION_FAILED" = "REGISTRATION_FAILED";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" = "FORGOT_PASSWORD_FAILED";
export const SEND_EMAIL: "SEND_EMAIL" = "SEND_EMAIL";

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED: "UPDATE_USER_FAILED" = "UPDATE_USER_FAILED";

export const IS_CHANGING: "IS_CHANGING" = "IS_CHANGING";
export const STOP_CHANGING: "STOP_CHANGING" = "STOP_CHANGING";
export const SAVE_PREVIOUS_ROUTE: "SAVE_PREVIOUS_ROUTE" = "SAVE_PREVIOUS_ROUTE";

// export const checkAuth: AppThunk = () => (dispatch: AppDispatch) => {
//   if (getCookie("accessToken")) {
//     dispatch(getUserData());
//   }
// };

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

export const getUserData: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    return getUserApi(getCookie("accessToken"))
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


export const setNewUserData: AppThunk = (userData: TUserData) =>  {
  return function (dispatch: AppDispatch) {
    dispatch({ type: UPDATE_USER_REQUEST });
    return patchUserDataApi(userData, getCookie("accessToken"))
      .then((res) => {
        if(res.success) {
          console.log("обновлен пользователь");
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

export const registrateUser: AppThunk = (userData: TUserData, navigate: any) => (dispatch: AppDispatch) => {
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


export const forgotPassword: AppThunk = (email: string, navigate: any) => (dispatch: AppDispatch) => {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    resetPasswordApi(email)
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


export const setNewPassword: AppThunk = (newPassword: string, token: string, navigate: any) => (dispatch: AppDispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    changePasswordApi(newPassword, token)
      .then((res) => {
        if (res.success) {
          console.log(res);
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


export const logIn: AppThunk = (email: string, password: string, navigate: any, previousRoute: string) => (dispatch: AppDispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    loginApi(email, password)
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


export const logOut: AppThunk = (navigate: any) => (dispatch: AppDispatch) => {
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

