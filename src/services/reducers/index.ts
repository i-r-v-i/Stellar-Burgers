import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burgerConstructor";
import { orderReducer } from "./order";
import { activeTabReducer } from "./activeTab";
import { userReducer } from "./user";
import { wsReducer } from "./ws";


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  activeTab: activeTabReducer,
  user: userReducer,
  ws: wsReducer
});
