import { TActiveTabState } from "../../services/types/activeTab";
import { TBurgerConstructorState } from "../../services/types/burgerConstructor";
import { TIngredient, TIngredientsState } from "../../services/types/ingredients";
import { RootState } from "../../services/types/store";
import { TUserState } from "../../services/types/user";
import { TWState } from "../../services/types/ws";

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

export const getStore = (store: RootState) => store;
export const getStoreIngredients = (store: RootState): TIngredientsState =>
  store.ingredients;
export const getStoreBurgerConstructor = (store: RootState): TBurgerConstructorState =>
  store.burgerConstructor;
export const getUser = (store: RootState): TUserState => store.user;
export const getOrderNumber = (store: RootState) => store.order;
export const getActiveTab = (store: RootState): TActiveTabState => store.activeTab;
export const getStoreOrders = (store: RootState): TWState => store.ws;

export const getStatus = (status: string) => {
  if (status === "done") {
    return "Выполнен";
  } else if (status === "pending") {
    return "Готовится";
  } else {
    return "Оформлен";
  }
};

export const orderStatus = {
  done: "done",
  pending: "pending",
};

export const countOfIconIngredients = 5;

export const getOrderItem = (itemId: string, ingredients: TIngredient[]) => {
  return ingredients.find((ingredient) => ingredient._id === itemId);
};

export const getTotalPrice = (arrIdOrder: string[], arrAll: TIngredient[]) => {
  if (arrIdOrder && arrAll) {
    return arrIdOrder.reduce(
      (sum, id) => sum + arrAll.find((item) => item?._id === id)?.price!,
      0
    );
  }
};
