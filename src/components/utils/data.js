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

export function getUserRequest(token) {
  return fetch(`${url}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then(checkResponse);
}

export function refreshTokenApi(refreshToken) {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
}

export function patchUserData(userData, token) {
  return fetch(`${url}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
}

export function logout(refreshToken) {
  return fetch(`${url}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
}


// export const getStore = (store) => store;
// export const getStoreIngredients = (store) => store.ingredients;
// export const getStoreBurgerConstructor = (store) => store.orderData.number;

// export const getUser = (store) => store.user;

// export const getcurrentIngredient
// export const getorder
// export const getactiveTab
