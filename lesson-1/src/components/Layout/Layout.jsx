import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Layout.css';
import {ChatList} from '../ChatList';
import {MessageField} from '../MessageField';

class Layout extends Component {
  static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
  };

  render(){
    return (
                  <div className='chat-layout'>
                      <ChatList />
                      <MessageField />
                  </div>
              );

  }

//   render() {
//       const { match } = this.props;
//       console.log(match);

//       return (
//           <div className='chat-layout'>
//               <ChatList />
//               <Messages currentChat={match.params.chatId} />
//           </div>
//       );
//   }
}

// const Layout = withRouter(_Layout);

export { Layout };