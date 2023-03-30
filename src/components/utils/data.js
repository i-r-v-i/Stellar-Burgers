import { refreshToken } from "../../services/actions/user";
import { URL } from "./constants";
import { getCookie } from "./cookie";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getData() {
  return fetch(URL.ingredients).then(checkResponse);
}

export function getOrderNumber(data, token) {
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

export const fetchWithRefresh = (url, options) => {
  return fetch(url, options)
    .then(checkResponse)
    .catch((err) => {
      console.log(err, 'попали сюда')
         return refreshToken()
        .then((res) => options.headers.authorization = res.accessToken)
        .then(() => fetch(url, options).then(checkResponse))
      })
};

export function getUserApi() {
  return fetchWithRefresh(URL.user, {
    headers: {
      authorization: getCookie("accessToken"),
    },
  });
}

export function patchUserDataApi(userData) {
  return fetchWithRefresh(URL.user, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(userData),
  });
}

export function setUser(data) {
  return fetch(URL.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function resetPasswordApi(data) {
  return fetch(URL.forgotPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function changePasswordApi(data) {
  return fetch(URL.resetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function loginApi(data) {
  return fetch(URL.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
  }).then((data) => checkResponse(data));
}

export function logoutApi(refreshToken) {
  return fetch(URL.logout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
}
