import {
  ADD_ITEM,
  ADD_BUN,
  DELETE_ITEM,
  CLEAR_STATE,
  SORT_ITEM,
} from "../actions/burgerConstructor";
import { v4 as uuidv4 } from "uuid";

const burgerConstructorInitialState = {
  selectedIngredients: [],
  selectedBun: null,
  dropIngredientSuccess: false,
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action
) => {
  switch (action.type) {
    case CLEAR_STATE: {
      return {
        selectedIngredients: [],
        selectedBun: null,
        dropIngredientSuccess: false,
      };
    }

    case ADD_ITEM: {
      return {
        ...state,
        selectedIngredients: [
          ...state.selectedIngredients,
          { ...action.selectedIngredient, uniqId: uuidv4() },
        ],
        dropIngredientSuccess: true,
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        selectedBun: action.selectedIngredient,
        dropIngredientSuccess: true,
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients].filter(
          (item) => item.uniqId !== action.uniqId
        ),
      };
    }
    case SORT_ITEM: {
      const newArrIngredients = [...state.selectedIngredients];
      const ingredient = newArrIngredients[action.dragIndex];
      newArrIngredients[action.dragIndex] =
        newArrIngredients[action.hoverIndex];
      newArrIngredients[action.hoverIndex] = ingredient;

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
