import {Component} from 'react';
import PropTypes from'prop-types';

export class Messages extends Component{
    static propTypes = {
        message: PropTypes.shape({
          author: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        }),
      }
//     state = {
//         messages: ['Hello world','How are you?'],
        
//    };
//    addMessage = () => {
//         this.setState({messages:[...this.state.messages,'Hi Nany']});
//     };
    
//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//         if (this.state.messages.length %2===1){
//             setTimeout(() =>{
//                 this.setState({messages:[...this.state.messages,'No, i am robot']});
//             },1000);
//         }
        
//     };

   
    
    render(){
        const {
            message: { value, author },
          } = this.props
       
    return (
        <div>
          <h3>{value}</h3>
          <p>{author}</p>
        </div>
      )
        // console.log('render',console.state);
        // const {messages= []} = this.state;
        //const{ messages =[],count,handleClick } = this.props;

        // return (
        // <>
        // <div className='messages'>
        //     {messages.map((item, index) => (
                
        //         <Message key={index} text={item}/>
        //     ))}

        // </div>
        // <button onClick={this.addMessage}>Send Message</button>
        // </>
        // );
    }
}

// const Message = (props) => {
//    return (
//     <>
        
//         <div className="my-class">{props.text}</div>
//     </>)
// }

//export{Messages};