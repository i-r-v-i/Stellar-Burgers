import { TIngredient, TIngredientsState } from './../../services/types/ingredients';
import { TBurgerConstructorState } from './../../services/types/burgerConstructor';
import { TUserState } from './../../services/types/user';
import { TOrderState } from './../../services/types/order';
import { TActiveTabState } from './../../services/types/activeTab';
import { TWState } from './../../services/types/wsActions';
import { RootState } from './../../services/types/store';
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
export const getStoreIngredients = (store: RootState): TIngredientsState=> store.ingredients;
export const getStoreBurgerConstructor = (store: RootState): TBurgerConstructorState => store.burgerConstructor;
export const getUser = (store: RootState): TUserState => store.user;
export const getOrderNumber = (store: RootState): TOrderState => store.order;
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
  done: 'done', 
  pending: 'pending'
}

export const countOfIconIngredients = 5;


export const getOrderItem = (ing: string, ingredients: Array<TIngredient>) => {
  return ingredients.find((item) => item._id === ing);
};

export const getTotalPrice = (arrOrder: Array<TIngredient> | undefined, arrAll: Array<TIngredient> | undefined): number | undefined | void=> {
  if (arrOrder && arrAll) {
  return arrOrder.reduce(
    (sum, id) => sum + arrAll.find((item) => item._id === id)?.price,
    0
  );
  }
};
