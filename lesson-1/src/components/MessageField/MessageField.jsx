import React, { createRef } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

import {Messages} from '../Messages';
import '../styles/styles.css';

export class MessageField extends React.Component {
    static propTypes = {
      currentChat: PropTypes.string, 

    };

  state = {
    messages:{
    0:[
      {text: "Привет!", author: 'bot' },
    // {value:''},
    // {input:''},
    ],
    1:[
      
    ],
    2:[
      {text: "Пока!", author: 'bot' },
    // {value:''},
    // {input:''},
    ],
  },
    // messages: [{ text: "Привет!", author: 'bot' }],
    // value:'',
    // input:'',
    

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
      const {currentChat} = this.props;
        const { messages } = this.state;
        this.setState({ 
          messages: {
          ...this.state.messages,
          [currentChat]: [
              ...this.state.messages[currentChat],
              {
                  text: this.state.input,
                  author: 'me',
              },
          ],
      }, input: '',
      });

    };

    componentDidUpdate(_, prevState) {
      const { currentChat } = this.props;

      if (
          prevState.messages[currentChat].length !==
              this.state.messages[currentChat].length &&
          this.state.messages[currentChat].length % 2 === 1
      ) {
          setTimeout(() => {
              this.setState({
                  messages: {
                      ...this.state.messages,
                      [currentChat]: [
                          ...this.state.messages[currentChat],
                          { text: 'I am just robot', author: 'robot' },
                      ],
                  },
                  input: '',
              });
          }, 1000);
      }

      this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
  }
   
   
    render() {
      const { messages = [] } = this.state;
      const { currentChat } = this.props;
      console.log('Messages', currentChat);
     

      return (
          <div className="layout">
             {currentChat && (
                    <>
                      <div className="message-field " ref={this.fieldRef}>
                      {messages[currentChat] && messages[currentChat].map((message, index) => (
                                    <Messages key={index} message={message} />
                                ))}
                      </div>
                      <div>
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
                    </>
                     )}
          </div>
      );
    }
};
         