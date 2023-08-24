import { TIngredient } from "./../../services/types/ingredients";
import { refreshToken } from "../../services/actions/user";
import { TUserData } from "../../services/types/user";
import { URL } from "./constants";
import { getCookie } from "./cookie";
import { TOrder } from "../../services/types/order";

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
type TGetDataResponse = {
  success: boolean;
  data: TIngredient[];
};

export function getData() {
  return fetch(URL.ingredients).then(checkResponse<TGetDataResponse>);
}

type TGetOrderNumberResponse = {
  success: boolean;
  name: string;
  order: TOrder;
};

export function getOrderNumber(data: string[], token: string = "") {
  return fetch(URL.orders, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  }).then(checkResponse<TGetOrderNumberResponse>);
}
type TRefreshToken = {
  accessToken: string;
  refreshToken: string;
};
export const fetchWithRefresh = <T>(url: string, options: any): Promise<T | any> => {
  return fetch(url, options)
    .then(checkResponse<T>)
    .catch((err) => {
      if (err.status === 401 || err.status === 403) {
        return refreshToken()
          .then((res: any) => (options.headers.authorization = res.accessToken))
          .then(() => fetch(url, options).then(checkResponse<T>));
      }
    });
};

type TGetUserResponse = {
  success: boolean;
  user: TUserData;
};
export function getUserApi() {
  return fetchWithRefresh<TGetUserResponse>(URL.user, {
    headers: {
      authorization: getCookie("accessToken"),
    },
  });
}

export function patchUserDataApi(userData: TUserData) {
  return fetchWithRefresh<TGetUserResponse>(URL.user, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(userData),
  });
}
type TLoginResponse = TRefreshToken & TGetUserResponse;

export function setUser(data: TUserData) {
  return fetch(URL.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse<TLoginResponse>);
}
type TMessageResponse = {
  success: boolean;
  message: string;
};
export function resetPasswordApi(form: { email: string }) {
  return fetch(URL.forgotPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then(checkResponse<TMessageResponse>);
}

export function changePasswordApi(data: { password: string; token: string }) {
  return fetch(URL.resetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse<TMessageResponse>);
}

export function loginApi(data: { email: string; password: string }) {
  return fetch(URL.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse<TLoginResponse>);
}

export function refreshTokenApi() {
  return fetch(URL.token, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse<TRefreshToken>);
}

export function logoutApi(refreshToken: string | null) {
  return fetch(URL.logout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse<TMessageResponse>);
}
