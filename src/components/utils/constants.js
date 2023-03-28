import { getCookie } from "../utils/cookie";

export const URL = {
  ingredients: "https://norma.nomoreparties.space/api/ingredients",
  orders: "https://norma.nomoreparties.space/api/orders",
  forgotPassword: "https://norma.nomoreparties.space/api/password-reset",
  resetPassword: "https://norma.nomoreparties.space/api/password-reset/reset",
  register: "https://norma.nomoreparties.space/api/auth/register",
  login: "https://norma.nomoreparties.space/api/auth/login",
  user: "https://norma.nomoreparties.space/api/auth/user",
  logout: "https://norma.nomoreparties.space/api/auth/logout",
  token: "https://norma.nomoreparties.space/api/auth/token",
  socket: "wss://norma.nomoreparties.space/orders",
};

// export let tokenWS;
// if(getCookie("accessToken")) {
//   tokenWS = getCookie("accessToken").split(" ")[1];
// }


export const getStore = (store) => store;
export const getStoreIngredients = (store) => store.ingredients;
export const getStoreBurgerConstructor = (store) => store.burgerConstructor;
export const getUser = (store) => store.user;
export const getcurrentIngredient = (store) => store.currentIngredient;
export const getOrderNumber = (store) => store.order;
export const getactiveTab = (store) => store.activeTab;
export const getStoreOrders = (store) => store.ws;

export const getStatus = (status) => {
  if (status === "done") {
    return "Выполнен";
  } else if (status === "pending") {
    return "Готовится";
  } else {
    return "Оформлен";
  }
};

export const getOrderItem = (ing, ingredients) => {
  return ingredients.find((item) => item._id === ing);
};

export const getTotalPrice = (arrOrder, arrAll) => {
  return arrOrder.reduce(
    (sum, id) => sum + arrAll.find((item) => item._id === id).price,
    0
  );
};
