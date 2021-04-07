import {Component} from 'react';
import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessageField} from '../MessageField';
//import {ControlForm,Form} from '../Form/';


class App extends Component {
    render() {
      return (
        <div style={appStyle}>
          <h1>Мой первый чат</h1>
          <Header/>
          <ChatList/>
          <MessageField />
          {/* <Form/> */}
          {/* <ControlForm/> */}
        </div>
      )
    }
  }



export {App};
const appStyle = {
  margin: '10px auto',
  maxWidth: '800px',
};