import { getCookie } from "../../components/utils/cookie"; 
import { refreshToken } from "../actions/user";
import { tokenWS } from "../../components/utils/constants";

export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let url = "";
    // const token = getCookie("accessToken").split(' ')[1];


    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsConnecting,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsSendOrder,
        wsDisconnecting,
      } = wsActions;

      if (type === wsConnecting) {
        url = payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = (event) => {
          console.log("socket.open", event);
          dispatch({ type: onOpen, payload: event });
          // if(payload.success == "false") {
          //   refreshToken().then(() => dispatch({ type: onOpen, payload: event }))
          // }
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          if (event.code !== 1000 ) {
            console.log('socket.onclose', event);
          
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendOrder) {
          const order = {
            ...payload,
            token: tokenWS,
          };
          socket.send(JSON.stringify(order));
        }

        if (type === wsDisconnecting) {
          socket.close();
        }
      }
   
      next(action);
    };
  };
};
}
