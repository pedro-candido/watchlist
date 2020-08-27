import React from 'react';
import logo from '../assets/logo.png'
import './Header.scss'

const Header = () =>{
    return(
        <>
            <div className='header'>
                <img src={logo} />
            </div>
        </>
    )
}

export default Header