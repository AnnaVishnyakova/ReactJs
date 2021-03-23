//ES6 Modules
import React from 'react';
import ReactDom, { render } from 'react-dom';
const App = () => {
    //return React.createElement('div',{id:'test-id'},'Hello');
    return <div id="test-id">Hello</div>;
};
ReactDom.render(<App />,document.querySelector('#root'));