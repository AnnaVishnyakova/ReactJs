//ES6 Modules
import React from 'react';
import ReactDom, { render } from 'react-dom';
//import App from './components/App/App.jsx';
//import {App} from './components/App/App.jsx';
import {App} from './components/App';
ReactDom.render(<App />,document.querySelector('#root'));