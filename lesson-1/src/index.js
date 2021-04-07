// //ES6 Modules
// import React from 'react';
// import ReactDom, { render } from 'react-dom';
// //import App from './components/App/App.jsx';
// //import {App} from './components/App/App.jsx';
import {App} from './components/App';
// //import {Messages} from './components/Messages';
// ReactDom.render(<App />,document.querySelector('#root'));
import React, { Component } from "react"
import ReactDOM from "react-dom"
//import { MessageField} from "./components/MessageField"


ReactDOM.render(<App />, document.getElementById("root"))