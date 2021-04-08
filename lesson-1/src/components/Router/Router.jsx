import {Switch, Route} from 'react-router-dom';
import {Header} from '../Header';
import {ChatList} from '../ChatList';

const Router =() =>{
    return(
        <Switch>
            <Route exact path= "/" component={ChatList}/>
            <Route exact path= "/profile" component={Header}/>
        </Switch>
    )
}

export {Router};