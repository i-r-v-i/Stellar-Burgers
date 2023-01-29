const url = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
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
