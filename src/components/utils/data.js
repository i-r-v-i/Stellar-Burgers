import { getCookie, setCookie } from "../../components/utils/cookie";

export const url = "https://norma.nomoreparties.space/api";

export function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Что-то пошло не так: ${res.status}`);
}

export function getData() {
  return fetch(`${url}/ingredients`).then(checkResponse);
}

export function getOrderNumber(data) {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  }).then(checkResponse);
}

export function setUser(data) {
  return fetch(`${url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function resetPassword(data) {
  return fetch(`${url}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function changePassword(data) {
  return fetch(`${url}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function login(data) {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function getUserApi() {
  return fetchWithRefresh(`${url}/auth/user`, {
    headers: {
      authorization: getCookie("accessToken"),
    },
  });
}

export function patchUserData(userData) {
  return fetchWithRefresh(`${url}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(userData),
  });
}

function refreshTokenApi() {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  });
}


const fetchWithRefresh = (url, options) => {
  return fetch(url, options)
    .then((res) => checkResponse(res))
    .catch((error) => {
      if (error.message === "jwt expired") {
        return refreshTokenApi().then((refreshData) => {
          if (!refreshData.success) {
            return Promise.reject(refreshData);
          }
          localStorage.setItem("refreshToken", refreshData.refreshToken);
          setCookie("accessToken", refreshData.accessToken);
          options.headers.authorization = refreshData.accessToken;
          return fetch(url, options)
            .then((res) => checkResponse(res))
            .catch((error) => Promise.reject(error));
        });
      } else {
        return Promise.reject(error);
      }
    });
};

export function logout(refreshToken) {
  return fetch(`${url}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
}

export const getStore = (store) => store;
export const getStoreIngredients = (store) => store.ingredients;
export const getStoreBurgerConstructor = (store) => store.burgerConstructor;
export const getUser = (store) => store.user;

// export const getcurrentIngredient
export const getorder = (store) => store.order;
// export const getactiveTab
