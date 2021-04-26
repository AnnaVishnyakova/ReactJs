import './Messages.css';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TextField, Icon, IconButton } from '@material-ui/core';


// deleteMessage =() =>{
//     document.querySelector('mes').outerHTML = '';
// }
const Messages = (props) => {
    return (
        <>
        <div className 
            className={`message ${props.author === 'me' ? 'message-mine' : ''}`}
        >
            <div className='message__text'>{props.text}</div>
            <div className='message__author'>{props.author}</div>
            

        </div>
       
    </>
    );
};

export { Messages };

