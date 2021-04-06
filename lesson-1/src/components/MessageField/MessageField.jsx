import React from 'react';
import {Messages} from '../Messages';

export class MessageField extends React.Component {
   state = {
       messages: [{author:'User',value:'Сообщение'}],value:"" 
   };
   
    addMessage = () => {
        const { messages } = this.state
        this.setState({  messages: [...this.state.messages, { author: "Виктор", value: "Нормально" }],});
    };   
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length%2===1){
            setTimeout(() =>{
                this.setState({messages:[...this.state.messages, { author: "I am Robot", value: "Как твои дела?" } ]});
            },1000);
        }
        
    };
    

    

    render() {
        const { messages } = this.state;
        return (
            <div>
              <button onClick={this.addMessage}>Отправить сообщение</button>
      
              {messages.map((message, index) => (
                <Messages message={message} key={index} />
              ))}
            </div>
          )
//        const messageElements = this.state.messages.map((text, index) => (
//            <Message key={ index } text={ text } />));

//        return <div>
//            { messageElements }
//            <button onClick={ this.addMessage}>Отправить сообщение</button>
//        </div>
  }
}
