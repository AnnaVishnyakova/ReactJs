import './Messages.css';

const Messages = (props) => {
    return (
        <div
            className={`message ${props.author === 'me' ? 'message-mine' : ''}`}
        >
            <div className='message__text'>{props.text}</div>
            <div className='message__author'>{props.author}</div>
        </div>
    );
};

export { Messages };

