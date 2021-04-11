import {Component} from 'react';
import { Header } from '../Header';
import { Router } from '../Router';


class App extends Component {
    render() {
      return (
        <div style={appStyle}>
          <h1>Мой первый чат</h1>
          <Header/>
          <Router/>
        
        </div>
      );
    }
  };



export {App};
const appStyle = {
  margin: '10px auto',
  maxWidth: '800px',
};