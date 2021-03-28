import React from 'react';
import {Message} from '../Messages'
const App = () => {
    //return React.createElement('div',{id:'test-id'},'Hello');
    return <div id="test-id">
        <h2>Hello</h2>
        <Message text="my new message"/>
        
    </div>;
};
//export default App;
export {App};