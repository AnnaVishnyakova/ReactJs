// //ES6 Modules
// import React from 'react';
// import ReactDom, { render } from 'react-dom';
// //import App from './components/App/App.jsx';
// //import {App} from './components/App/App.jsx';
// import {App} from './components/App';
// //import {Messages} from './components/Messages';
// ReactDom.render(<App />,document.querySelector('#root'));
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { MessageField} from "./components/MessageField"


//import "./index.css"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Сообщения</h1>
        <MessageField />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))