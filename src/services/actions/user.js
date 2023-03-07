import {
  setUser,
  resetPassword,
  changePassword,
  login,
  getUserRequest,
  logout,
  patchUserData, refreshTokenApi
} from "../../components/utils/data";
import { getCookie, setCookie, deleteCookie } from "../../components/utils/cookie";


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

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const IS_CHANGING = 'IS_CHANGING';
export const STOP_CHANGING = 'STOP_CHANGING';
export const SAVE_PREVIOUS_ROUTE = 'SAVE_PREVIOUS_ROUTE'


export const saveUserPath = (path) => ({
  type: 'SAVE_PREVIOUS_ROUTE',
  payload: path
})


export function registrateUser(userData, navigate) {
  return function (dispatch) {
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
          payload: err.message
        });
      });
  };
}

export function forgotPassword(userEmail, navigate) {
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    resetPassword(userEmail)
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
          type: FORGOT_PASSWORD_FAILED, payload: err.message
        });
      });
  };
}

export function setNewPassword(newData, navigate) {
  return function (dispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    changePassword(newData)
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
          type: RESET_PASSWORD_FAILED, payload: err.message
        });
      });
  };
}



export function logIn(data, navigate, previousRoute) {
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    login(data)
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
          type: LOGIN_FAILED, payload:err.message
        });
      });
  };
}


export function logOut(navigate) {
  return function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    logout(localStorage.getItem("refreshToken"))
      .then((res) => {
        if (res.success) {
          console.log(res);
          dispatch({ type: LOGOUT_SUCCESS});
          localStorage.removeItem("refreshToken");
          deleteCookie("accessToken");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(`Ошибка выхода из профиля ${err}`);
        dispatch({
          type: LOGOUT_FAILED, payload:err.message
        });
      });
  };
}

export function getUserData() {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    return getUserRequest(getCookie("accessToken"))
      .then((res) => {
        if (res.success) {
          console.log(res);
          dispatch({ type: GET_USER_SUCCESS, payload: res.user });
        }
      })
      .catch((err) => {
        console.log(`Пользователь не авторизован ${err}`);
        if (err.message === "jwt expired") {
          dispatch(refreshToken());
        }
        dispatch({
          type: GET_USER_FAILED,
          payload: err.message,
        })
        
      })
    }
}

export const refreshToken = () => {
  return function (dispatch) {
    refreshTokenApi(localStorage.getItem("refreshToken"))
      .then((res) => {
        if (res.success) {
          localStorage.setItem("refreshToken", res.refreshToken);
          setCookie("accessToken", res.accessToken);
          dispatch(getUserData());
        }
      })
      .catch((err) =>
        dispatch({
          type: GET_USER_FAILED,
          payload: err.message
        })
      );
  };
};


export function setNewUserData(userData) {
  return function (dispatch) {
    dispatch({ type: UPDATE_USER_REQUEST });
    return patchUserData(userData, getCookie("accessToken"))
      .then((res) => {
        if (res.success) {
          console.log(res);
          dispatch({ type: UPDATE_USER_SUCCESS, payload: res.user });
        }
      })
      .catch((err) => {
        console.log(`Ошибка обновления профиля ${err}`);
        if (err.message === "jwt expired") {
          dispatch(refreshToken());
        }
        dispatch({
          type: UPDATE_USER_FAILED,
          payload: err.message,
        });
      });
  };
}