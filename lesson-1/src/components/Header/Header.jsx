import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


export class Header extends React.Component{
    render (){
        return(
            <div className='header'> 
            <Link to='/' className='menu-item'>
                Chats
            </Link>
            <Link to='/profile' className='menu-item'>
                Profile
            </Link>
        </div>
        )
    }
}