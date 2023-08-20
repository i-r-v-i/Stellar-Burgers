import {
    GET_NUMBER_SUCCESS,
    GET_NUMBER_FAILED,
    GET_NUMBER_REQUEST,
    GET_NUMBER_FOR_MODAL
  } from "../actions/order";

export type TOrder = {
    _id: string;
    ingredients: Array<string>;
    status: "done"|"pending"|"created";
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number
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