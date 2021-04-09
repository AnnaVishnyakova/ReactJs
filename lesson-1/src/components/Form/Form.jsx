import {Component,createRef} from 'react';

class Form extends Component{
    state={
        input:'',
    }
        
    // userNameRef= createRef();
    // messageFormRef = createRef();
    // hendleSend =()=>{
    //     const userName =  this.userNameRef.current.value;
    //     const messageForm=  this.messageFormRef.current.value;

    //     console.log(userName , messageForm);
    // }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
 
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    //     console.log('очистка инпута');
    //     let mchatField = document.querySelectorAll('input');
    //     mchatField.value = '';
    // }
    // componentDidUpdate() {
    // this.userNameRef.current.value= ' ';
    // }

    // handleClick = (message) => {
    //     this.sendMessage(message)
    // };
 
    render(){
        return (
            <div>
                {/* <div> Username</div>
                <br/>
                <input name="userName" 
               

                // ref={this.userNameRef}
                
                /> */}
                <br/>
                <div> Input Message</div>
                <input name="messageForm"
                 onChange={ this.handleChange }
                // ref={this.messageFormRef}
                //value={ this.state.input }

                />
                <button style={ { fontSize: '22px' } }
               onClick={ () => this.handleClick(this.state.input) }>Отправить сообщение</button>
            </div>
        )
    }
}
export {Form} 