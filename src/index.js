import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
