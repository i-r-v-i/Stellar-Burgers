import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
// import { burgerConstructorReducer } from "./burgerConstructor";
import { currentIngredientReducer } from "./currentIngredient";
// import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  // burgerConstructor: burgerConstructorReducer,
  currentIngredient: currentIngredientReducer,
  // order: orderReducer,
});
