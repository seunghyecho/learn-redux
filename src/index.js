import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from './modules/saga';
import {createRoot} from "react-dom/client";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__, // 이 값을 초기상태로 사용함
    applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
