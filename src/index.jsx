import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import {
  WS_CONNECTING,
  WS_CONNECTION_SUCCESS,
  WS_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_DISCONNECTING,
  WS_SEND_ORDER
} from "./services/actions/wsActions";
import { socketMiddleware } from "./services/middleware/socketMiddleWare";

const wsActions = {
  wsConnecting: WS_CONNECTING,
  wsDisconnecting: WS_DISCONNECTING,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_ERROR,
  onMessage: WS_GET_ORDERS,
  wsSendOrder: WS_SEND_ORDER
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsActions))
);

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
