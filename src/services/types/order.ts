import {
    GET_NUMBER_SUCCESS,
    GET_NUMBER_FAILED,
    GET_NUMBER_REQUEST,
    GET_NUMBER_FOR_MODAL
  } from "../actions/order";


export type TOrder = {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    owner: {
      name: string;
      createdAt: string;
      email: string;
      updatedAt: string;
    }
    price: number;
    status: "done"|"pending"|"created";
    updatedAt: string;
    _id: string;
}

export type TOrderInfo = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: "done"|"pending"|"created";
    updatedAt: string;
    _id: string;
}


export type TOrderState = {
  orderNumber: number | null,
  modalOpened: boolean,
}

export type TGetNumberRequestAction = {
    readonly type: typeof GET_NUMBER_REQUEST;
  };
  

  export type TGetNumberSuccessAction = {
    readonly type: typeof GET_NUMBER_SUCCESS;
    readonly payload: number;
  };

  export type TGetNumberFailedAction = {
    readonly type: typeof GET_NUMBER_FAILED;
  };

  export type TGetNumberForModalAction = {
    readonly type: typeof GET_NUMBER_FOR_MODAL;
    readonly payload: number;
  };

  export type TOrderActions =
  | TGetNumberRequestAction
  | TGetNumberSuccessAction
  | TGetNumberFailedAction
  | TGetNumberForModalAction;