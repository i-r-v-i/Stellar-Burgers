import { refreshToken } from "../actions/user";

export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let url = "";

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsConnecting,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsDisconnecting,
      } = wsActions;

      if (type === wsConnecting) {
        url = payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (!data.success) {
            if (data.message === "Invalid or missing token") {
              socket.close();
              return refreshToken()
              .then(() => dispatch({type: wsConnecting}))
            }
          } 
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsDisconnecting) {
          socket.close();
        }
      }

      next(action);
    };
  };
};
