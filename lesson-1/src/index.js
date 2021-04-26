import React, { Component } from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import {App} from './components/App';
import { store, persistor, history } from "./store"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);
