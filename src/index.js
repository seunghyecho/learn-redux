import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';

import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from "./modules/saga";

// import {createLogger} from "redux-logger";
// import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";

// redux-thunk
// const logger = createLogger();
// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

// redux-saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
