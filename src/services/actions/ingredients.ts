import { AppDispatch, AppThunk } from './../types/store';
import { getData } from "../../components/utils/data";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" = "GET_INGREDIENTS_FAILED";


export const getIngredients:  AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getData().then((res) => {
      if (res) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: res.data,
          //  ingredients: res.data,
        });
       
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
       
      }
    });
  };
}
