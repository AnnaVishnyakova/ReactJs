import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './MessageField.css';
import { sendMessage } from '../../store/message_store/messageActions';
import { Messages } from '../Messages';

const styles = {
    root: {
        color: 'black',
    },
};

class _MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        classes: PropTypes.object,
    };
    // constructor(props) {
    //     super(props);
        
    //     const { messages} = this.props;
    // }
        
    state = {
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = (msg = '', author = '') => {
        const chatId = this.props.currentChat;

        const newMessage = msg.length ? msg : this.state.textMessage;
        const currentAuthor = author.length ? author : 'me';

        (msg.length || this.state.textMessage) &&
            this.props.sendMessage(newMessage, currentAuthor, chatId);

        this.setState({
            textMessage: '',
        });
    };

    componentDidUpdate() {
       
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    
    deleteMessages(index) {
        const chatId = this.props.currentChat;
        const messages = this.props.messages[chatId];
        

       //const clickedMessagesIndex =  messages.findIndex( s => messages.isEqual(s, item));
       //const clickedMessagesIndex = 1;
        

        if (~index) {
            messages.splice(index, 1);
            this.setState({
              messages,
            });
          }
       // console.log(messages,chatId,index);
      }




    render() {
        const { messages = {}, currentChat: chatId } = this.props;
        //console.log(messages);

        return (
            <div className='message-field'>
                {chatId && (
                    <>
                        <div className='messages' ref={this.fieldRef}>
                            {messages[chatId] &&
                                messages[chatId].map((item, index) => (
                                    <div key={index}><Messages  {...item} 
                                    
                                    // onClick={() => { this.handleDeleteElement(index) }}
                                    />
                                    <IconButton 
               
                                        onClick={this.deleteMessages.bind(this, index)}
                                    >
                                        <Icon>delete</Icon>
                                    </IconButton>
                                    </div>
                                ))}
                        </div>
                       
                        <div className='message-new'>
                            <TextField
                                inputRef={this.inputRef}
                                value={this.state.textMessage}
                                label='New message'
                                onChange={(event) =>
                                    this.setState({
                                        textMessage: event.target.value,
                                    })
                                }
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        this.addMessage();
                                    }
                                }}
                                
                            />
                            <IconButton
                                color='primary'
                                variant='contained'
                                onClick={this.addMessage}
                            >
                                <Icon>send</Icon>
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
});

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({ sendMessage }, dispatch);

export const MessageField = compose(
    withStyles(styles),
    connect(mapStateToProps, { sendMessage })
)(_MessageField);

