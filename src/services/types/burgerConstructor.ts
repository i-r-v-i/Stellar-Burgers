import { TIngredient } from "./ingredients";
import {
  ADD_ITEM,
  ADD_BUN,
  DELETE_ITEM,
  CLEAR_STATE,
  SORT_ITEM,
} from "../actions/burgerConstructor";

// export type TConstructorElement = {
//   ingredient: TIngredient;
//   uniqId?: string;
// };


// export type TOrderInfo = {
//   _id: string;
//   ingredients: Array<string>;
//   owner?: string;
//   status: "created" | "pending" | "done";
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   number: number;
//   __v?: number;
// };

// export type TBurgerConstructorState = {
//   selectedIngredients: TConstructorElement[];
//   selectedBun: TConstructorElement | null;
//   dropIngredientSuccess: boolean;
// };
export type TBurgerConstructorState = {
  selectedIngredients: TIngredient[];
  selectedBun: TIngredient | null;
  dropIngredientSuccess: boolean;
};


type TAddItemAction = {
  readonly type: typeof ADD_ITEM;
  readonly payload: TIngredient;
 
};

type TAddBunAction = {
  readonly type: typeof ADD_BUN;
  readonly payload: TIngredient;
};

type TDeleteItemAction = {
  readonly type: typeof DELETE_ITEM;
  readonly payload: string;
};

type TClearStateAction = {
  readonly type: typeof CLEAR_STATE;
};

type TSortItemAction = {
  readonly type: typeof SORT_ITEM;
  readonly payload: { dragIndex: number; hoverIndex: number };
};

export type TBurgerConstructorActions =
  | TAddItemAction
  | TAddBunAction
  | TDeleteItemAction
  | TClearStateAction
  | TSortItemAction;
