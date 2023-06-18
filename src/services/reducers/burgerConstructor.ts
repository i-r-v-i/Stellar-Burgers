import { TBurgerConstructorState, TBurgerConstructorActions } from './../types/burgerConstructor';
import {
  ADD_ITEM,
  ADD_BUN,
  DELETE_ITEM,
  CLEAR_STATE,
  SORT_ITEM,
} from "../actions/burgerConstructor";
// import { v4 as uuidv4 } from "uuid";

const burgerConstructorInitialState: TBurgerConstructorState = {
  selectedIngredients: [],
  selectedBun: null,
  dropIngredientSuccess: false,
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action: TBurgerConstructorActions
  ): TBurgerConstructorState => {
  
    switch (action.type) {
    case CLEAR_STATE: {
      return {
        selectedIngredients: [],
        selectedBun: null,
        dropIngredientSuccess: false,
      };
    }

    case ADD_ITEM: {
      const { ingredient, uniqId} = action.payload;
      return {
        ...state,
        selectedIngredients: [
          ...state.selectedIngredients,
           {ingredient: ingredient, uniqId: uniqId}
        ],
        dropIngredientSuccess: true,
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        selectedBun: action.payload,
        dropIngredientSuccess: true,
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients].filter(
          (item) => item.uniqId !== action.payload.uniqId
        ),
      };
    }
    case SORT_ITEM: {
      const newArrIngredients = [...state.selectedIngredients];
      const ingredient = newArrIngredients[action.payload.dragIndex];
      newArrIngredients[action.payload.dragIndex] =
        newArrIngredients[action.payload.hoverIndex];
      newArrIngredients[action.payload.hoverIndex] = ingredient;

      return {
        ...state,
        selectedIngredients: newArrIngredients,
      };
    }
    default: {
      return state;
    }
  }
};
