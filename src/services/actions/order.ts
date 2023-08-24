import { getOrderNumber } from "../../components/utils/data";
import { getCookie } from "../../components/utils/cookie";
import { AppDispatch, AppThunk } from "../types/store";
export const GET_NUMBER_REQUEST = "GET_NUMBER_REQUEST";
export const GET_NUMBER_SUCCESS = "GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILED = "GET_NUMBER_FAILED";
export const GET_NUMBER_FOR_MODAL = "GET_NUMBER_FOR_MODAL";

export const makeOrder: AppThunk = (ingArr: string[]) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_NUMBER_REQUEST,
    });
    getOrderNumber(ingArr, getCookie("accessToken")).then((res) => {
      if (res.success) {
        dispatch({
          type: GET_NUMBER_SUCCESS,
          payload: res.order.number,
        });
      } else {
        dispatch({
          type: GET_NUMBER_FAILED,
        });
      }
    });
  };
};
