import {Component} from 'react';
import PropTypes from'prop-types';
import '../styles/styles.css';
//import {App} from '../App';


export class Messages extends Component{
    static propTypes = {
        message: PropTypes.shape({
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      }
  
     
    render(){
        const {
            message: {text,author},
          } = this.props
        
    return (
        <div className={`message ${this.props.author === 'me' ? 'message-mine' : ''}`}>
          <div className="messageText"
           >{text}</div>
          <div className="messageAuthor">{author}</div>
        </div>
      )
      
     
   
}

  
};
