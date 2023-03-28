import { useEffect } from "react";
import {
  WS_CONNECTING,
  WS_DISCONNECTING,
} from "../../services/actions/wsActions";
import { URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import OrderList from "../order-list/OrderList";
import { checkAuth } from "../../services/actions/user";
import { getCookie } from "../utils/cookie";


export default function ProfileOrders() {
  const dispatch = useDispatch();

  let token = getCookie("accessToken").split(' ')[1];

  useEffect(() => {
    dispatch(checkAuth());
    dispatch({ type: WS_CONNECTING, payload: `${URL.socket}?token=${token}` });
    return () => dispatch({ type: WS_DISCONNECTING });
  }, [dispatch, token]);

  return <OrderList width="860px" isStatus="true" myOrders/>;
}
