import {Switch, Route} from 'react-router-dom';
import {Layout} from '../Layout';
import {Header} from '../Header';

const Router =() =>{
    return(
        <Switch>
            <Route exact path= "/" component={Layout}/>
            <Route exact path= "/profile" component={Header}/>
        </Switch>
    )
}

export {Router};