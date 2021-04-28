import {Component} from 'react';

class ControlForm extends Component{
    state ={
        userName:'',
        messageForm:'',
        agreement:false,

    }
handleChange =(event) => {
    this.setState({[event.target.name]:event.target.value})

}
handleCheckbox =(event) =>{
    this.setState({[event.target.name]:event.target.checked})
}

    render(){
        return (
            <div>
                <div> Username</div>
                <br/>
                <input 
                name="userName"
                value={this.state.userName} 
                onChange={this.handleChange}
                />
                <br/>
                <div> Input Message</div>
                <input 
                name=" messageForm"
                value={this.state.messageForm} 
                onChange={this.handleChange}
                />
                {/* <br/>
                <input name="agreement" type="checkbox" onChange={this.handleCheckbox} checked={this.state.agreement}/> */}
            </div>
        )
    }
}
export {ControlForm} ;