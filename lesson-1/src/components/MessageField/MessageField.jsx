import React, { createRef } from 'react';
import {Messages} from '../Messages';
import '../styles/styles.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export class MessageField extends React.Component {
    
  state = {
    messages: [{ text: "Привет!", author: 'bot' }],
    value:'',
    input:'',
    

};
  fieldRef= createRef();

  handleClick = (message) => {
    this.addMessage(message);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        this.addMessage(message)
    }
  };


    addMessage = (message) => {
        const { messages } = this.state
        this.setState({ messages: [ ...this.state.messages, {text: message, author: 'me'} ], 
        input: '',
      });

    };

    componentDidUpdate(_,prevState) {
      console.log('componentDidUpdate');
      if ( prevState.messages.length !==
        this.state.messages.length &&
        this.state.messages.length % 2 === 1){
          setTimeout(() =>{
              this.setState({messages:[...this.state.messages, {text:"Как твои дела?" ,author: "I am Robot"} ]});
          },1000);
      }
      this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;

  };
    render() {

      const messageElements = this.state.messages.map((message, index) => (
           <Messages key={ index } message={message} />));

      return (
          <div className="layout">
           <div className="message-field message-field-chat1" ref={this.fieldRef}>
               { messageElements }
           </div>
           <Input

              color="primary"
               name="input"
               value={this.state.input} 
               style={ { fontSize: '22px' } }
               onChange={ this.handleChange }
              onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
           />
           <br/>
           <Button
               style={ { marginTop: '10px' } }  
              variant="contained" color="primary"
              startIcon ={<Icon>send</Icon>}
               onClick={ () => this.handleClick(this.state.input) }
           >
               Отправить сообщение
           </Button>
          </div>

            // <div id='main' className='message-field'>
            //   <button onClick={this.addMessage}>Отправить сообщение</button>
      
            //   {messages.map((message, index) => (
            //     <Messages message={message} key={index} />
            //   ))}
            // </div>
          )
//        const messageElements = this.state.messages.map((text, index) => (
//            <Message key={ index } text={ text } />));

//        return <div>
//            { messageElements }
//            <button onClick={ this.addMessage}>Отправить сообщение</button>
//        </div>
  }
}

//export {MessageField};