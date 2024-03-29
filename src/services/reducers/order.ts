import {
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILED,
  GET_NUMBER_REQUEST,
  GET_NUMBER_FOR_MODAL
} from "../actions/order";
import { TOrderActions, TOrderState } from "../types/order";

const orderInitialState: TOrderState = {
  orderNumber: null,
  modalOpened: false,
};

export const orderReducer = (state = orderInitialState, action: TOrderActions) => {
  switch (action.type) {
    case GET_NUMBER_REQUEST: {
      return {
        ...state,
        modalOpened: true,
      };
    }
    case GET_NUMBER_SUCCESS: {
      return {
        orderNumber: action.payload,
        modalOpened: true,
      };
    }
    case GET_NUMBER_FOR_MODAL: {
      return {
        orderNumber: action.payload,
        modalOpened: false,
      };
    }
    case GET_NUMBER_FAILED: {
      return {
        orderNumber: null,
        modalOpened: false,
      };
    }
    default: {
      return state;
    }
  }
};
