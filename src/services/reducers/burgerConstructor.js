import { ADD_ITEM, ADD_BUN, DELETE_ITEM } from "../actions/burgerConstructor";
import {v4 as uuidv4 } from 'uuid';

const burgerConstructorInitialState = {
  selectedIngredients: [],
  selectedBun: null,
  dropIngredientSuccess: false
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action
) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        selectedIngredients: [
          ...state.selectedIngredients,
          {...action.selectedIngredient, uniqId: uuidv4()}
          
        ],
        dropIngredientSuccess: true
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        selectedBun: action.selectedIngredient,
        dropIngredientSuccess: true
      };
    }
    case DELETE_ITEM: {
       return { ...state,
        selectedIngredients: [...state.selectedIngredients].filter((item) => item.uniqId !== action.uniqId) };
    }
    default: {
      return state;
    }
  }
};
