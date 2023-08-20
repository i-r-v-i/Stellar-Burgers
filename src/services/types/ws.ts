import { TOrderInfo } from './burgerConstructor';
import {
    WS_CONNECTING,
    WS_CONNECTION_SUCCESS,
    WS_ERROR,
    WS_GET_ORDERS,
    WS_CONNECTION_CLOSED,
    WS_DISCONNECTING,
  } from "../actions/wsActions";
import { TOrder } from './order';

  
  export type TWState = {
    wsConnected: boolean;
    error: Event | undefined;
    orders: TOrder[];
    totalOrders: number;
    todayOrders: number;
  };
  
  type TWsConnectingAction = {
      readonly type: typeof WS_CONNECTING;
  }
  
  type TWsConnectionSuccessAction = {
      readonly type: typeof WS_CONNECTION_SUCCESS;
  }
  
  type TWsErrorAction = {
      readonly type: typeof WS_ERROR;
      readonly payload: Event;
  }
  
  type TWsGetOrdersAction = {
      readonly type: typeof WS_GET_ORDERS;
      readonly payload: { orders: TOrder[];
          totalOrders: number;
          todayOrders: number;}
  }
  
  
  type TWsConnectionClosedAction = {
      readonly type: typeof WS_CONNECTION_CLOSED;
  }
  
  type TWsDisconnectingAction = {
      readonly type: typeof WS_DISCONNECTING;
  }
  
  export type TWsActions = 
  | TWsConnectingAction
  | TWsConnectionSuccessAction
  | TWsErrorAction
  | TWsGetOrdersAction
  | TWsConnectionClosedAction
  | TWsDisconnectingAction