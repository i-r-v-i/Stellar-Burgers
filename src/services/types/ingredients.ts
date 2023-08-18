import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
  } from "../actions/ingredients";
  
export type TIngredient = {
    unicId?: string;
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

  export type TIngredientsState = {
    ingredients: TIngredient[],
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
  };
  

  export type TGetIngredientsRequestAction = {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
  };
  
  export type TGetIngredientsSuccessAction = {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: TIngredient[];
  };
  
  export type TGetIngredientsFailedAction = {
    readonly type: typeof GET_INGREDIENTS_FAILED;
  };

  export type TIngredientsActions =
  | TGetIngredientsRequestAction
  | TGetIngredientsSuccessAction
  | TGetIngredientsFailedAction;