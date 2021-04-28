import { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// { format } from "date-fns"
//import { compose } from 'redux';
import Send from '@material-ui/icons/Send';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './ChatList.css';
import { addChat } from '../../store/chat_store/chatActions';

// const styles = {
//     root: {
//         color: 'black',
//     },
// };


class _ChatList extends Component {
    static propTypes = {
        chats: PropTypes.array.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        chatName: '',
    };

    addChat = () => {
        this.props.addChat(this.state.chatName);
        this.setState({
            chatName: '',
        });
    };

    render() {
        const { chats,lastMessage, messages} = this.props;
        //const msg = messages[index] || []

        return (
            <div className='chat-list'>
                <List>
                    {chats.map((chat, index) => (
                        <Link key={index} to={`/chat/${index}`}>
                            
                            <ListItem button>
                                <ListItemIcon>
                                    <Send />
                                </ListItemIcon>
                                <ListItemText primary={chat} />
                            </ListItem>
                            
                        </Link>
                    ))}
                </List>
                <div className='new-chat'>
                    <TextField
                        value={this.state.chatName}
                        label='New chat'
                        onChange={(event) =>
                            this.setState({
                                chatName: event.target.value,
                            })
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                this.addChat();
                            }
                        }}
                    />
                    <IconButton
                        color='primary'
                        variant='contained'
                        onClick={this.addChat}
                    >
                        <Icon>send</Icon>
                    </IconButton>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    chats: state.chat.chats,
    //messages: state.messages.messages,
});

export const ChatList = connect(mapStateToProps, { addChat })(_ChatList);



