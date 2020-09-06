import React from 'react';
import logo from '../assets/logo.png'

const Header = ({ username }) => {
    return (
        <div className={username ? 'header' : 'headerNotLogged'}>
            <div>
                <img src={logo} />
                {username 
                ? <p>{username}</p> 
                : null}

            </div>
        </div>
    )
}

export default Header