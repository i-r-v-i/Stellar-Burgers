import { getOrderNumber } from "../../components/utils/data";
export const GET_NUMBER_REQUEST = 'GET_NUMBER_REQUEST';
export const GET_NUMBER_SUCCESS = "GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILED = "GET_NUMBER_FAILED";

//   const makeOrder = async () => {
//     try {
//       await getOrderNumber(ingredientArr).then((data) => {
//         setOrderNumber(data.order.number);
//       });
//       console.log("Заказу присвоен номер");
//     } catch (er) {
//       console.log(`Ошибка оформления заказа: ${er}`);
//     }
//   };

export function makeOrder(ingredientArr) {
  return function (dispatch) {
    dispatch({
        type: GET_NUMBER_REQUEST,
      });
    getOrderNumber(ingredientArr).then((res) => {
      if (res) {
        dispatch({
          type: GET_NUMBER_SUCCESS,
          number: res.data,
        });
      } else {
        dispatch({
          type: GET_NUMBER_FAILED,
        });
      }
    });
  };
}

// export function getIngredients() {
//     return function (dispatch) {
//       dispatch({
//         type: GET_INGREDIENTS_REQUEST,
//       });
//       getData().then((res) => {
//         if (res) {
//           dispatch({
//             type: GET_INGREDIENTS_SUCCESS,
//             ingredients: res.data,
//           });

//         } else {
//           dispatch({
//             type: GET_INGREDIENTS_FAILED,
//           });

//         }
//       });
//     };
//   }
