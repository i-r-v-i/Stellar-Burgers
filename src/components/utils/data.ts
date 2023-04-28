import { TUserData } from './../../services/types/user';
import { TOptions } from './api';
import { refreshToken } from "../../services/actions/user";
import { URL } from "./constants";


export function checkResponse(res: Response) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getData() {
  return fetch(URL.ingredients).then(checkResponse);
}

export function getOrderNumber(data: string[], token: string | any) {
  return fetch(URL.orders, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  }).then(checkResponse);
}

export const fetchWithRefresh = (url: string, options: any) => {
  return fetch(url, options)
    .then(checkResponse)
    .catch((err) => {
      if(err === 401 || err === 403) {
        return refreshToken()
        .then((res: any) => (options.headers.authorization = res.accessToken))
        .then(() => fetch(url, options).then(checkResponse));
      }
      
});
};
export type TUserResponse = {
  user: TUserData;
};

export function getUserApi(accessToken: string | undefined) {
  return fetchWithRefresh(URL.user, {
    method: "GET",
    headers: {
      authorization: accessToken ,
    },
  });
}

export function patchUserDataApi(userData: TUserData, accessToken: string | undefined) {
  return fetchWithRefresh(URL.user, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken,
    },
    body: JSON.stringify(userData),
  });
}

export function setUser(data: TUserData) {
  return fetch(URL.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function resetPasswordApi(email: string) {
  return fetch(URL.forgotPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  }).then(checkResponse);
}

export function changePasswordApi(password: string, token: string) {
  return fetch(URL.resetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, token}),
  }).then(checkResponse);
}

export function loginApi(email: string, password: string) {
  return fetch(URL.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password}),
  }).then(checkResponse);
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
  }).then(checkResponse);
}

export function logoutApi(refreshToken: string | null) {
  return fetch(URL.logout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
}
