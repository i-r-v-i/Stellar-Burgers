import { useEffect } from "react";
import {
  WS_CONNECTING,
  WS_DISCONNECTING,
} from "../../services/actions/wsActions";
import { tokenWS, URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import OrderList from "../order-list/OrderList";
import { checkAuth } from "../../services/actions/user";


export default function ProfileOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch({ type: WS_CONNECTING, payload: `${URL.socket}?token=${tokenWS}` });
    return () => dispatch({ type: WS_DISCONNECTING });
  }, [dispatch, tokenWS]);

  return <OrderList width="860px" isStatus="true" myOrders/>;
}
