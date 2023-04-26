// import {
//   DATA_MODAL_SUCCESS,
//   DATA_MODAL_FAILED,
// } from "../actions/currentIngredient";
// import { TCurrentIngredientActions, TCurrentIngredientState } from "../types/currentIngredient";

// const currentIngredientInitialtState: TCurrentIngredientState = {
//   dataModal: null,
// };

// export const currentIngredientReducer = (
//   state = currentIngredientInitialtState,
//   action: TCurrentIngredientActions
// ): TCurrentIngredientState => {
//   switch (action.type) {
//     case DATA_MODAL_SUCCESS: {
//       return {
//         dataModal: action.payload,
//       };
//     }
//     case DATA_MODAL_FAILED: {
//       return {
//         dataModal: null,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
