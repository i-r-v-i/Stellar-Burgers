import {
  WS_CONNECTING,
  WS_CONNECTION_SUCCESS,
  WS_ERROR,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
  WS_DISCONNECTING,
} from "../actions/wsActions";

export type TOrderInfo = {
  _id: string;
  ingredients: Array<string>;
  owner?: string;
  status: "created" | "pending" | "done";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v?: number;
};

export type TWState = {
  wsConnected: boolean;
  error: Event | undefined;
  orders: TOrderInfo[];
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
    readonly payload: { orders: TOrderInfo[];
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