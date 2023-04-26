import {
    GET_NUMBER_SUCCESS,
    GET_NUMBER_FAILED,
    GET_NUMBER_REQUEST,
    GET_NUMBER_FOR_MODAL
  } from "../actions/order";

  export type TOrderState = {
    orderNumber: number | null,
    modalOpened: boolean,
  }

type TGetNumberRequestAction = {
    readonly type: typeof GET_NUMBER_REQUEST;
}

type TGetNumberSuccessAction = {
    readonly type: typeof GET_NUMBER_SUCCESS;
    readonly payload: number;
}
type TGetNumberFailedAction = {
    readonly type: typeof GET_NUMBER_FAILED;
}
type TGetNumberForModalAction = {
    readonly type: typeof GET_NUMBER_FOR_MODAL;
    readonly payload: number;
}

export type TOrderActions = 
| TGetNumberRequestAction
| TGetNumberSuccessAction
| TGetNumberFailedAction
| TGetNumberForModalAction