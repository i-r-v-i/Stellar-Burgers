import { TWState, TWsActions } from './../types/wsActions';
import {
  WS_CONNECTION_SUCCESS,
  WS_ERROR,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
  WS_DISCONNECTING,
} from "../actions/wsActions";

const initialState: TWState = {
  wsConnected: false,
  error: undefined,
  orders: [],
  totalOrders: 0,
  todayOrders: 0,
};

export const wsReducer = (state = initialState, action: TWsActions): TWState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_DISCONNECTING:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        totalOrders: action.payload.totalOrders,
        todayOrders: action.payload.totalOrders
      };

    default:
      return state;
  }
};
