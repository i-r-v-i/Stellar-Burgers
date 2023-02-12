import { ADD_ITEM, ADD_BUN, DELETE_ITEM } from "../actions/burgerConstructor";


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
          action.selectedIngredient
          
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
        selectedIngredients: [...state.selectedIngredients].filter((item) => item.index !== action.selectedIngredient.index) };
    }
    default: {
      return state;
    }
  }
};
