import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';

import {App} from './components/App';
import {store} from './store';

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);
