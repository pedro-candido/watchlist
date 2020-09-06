import React from 'react';
import logo from '../assets/logo.png'

const Header = ({ username }) => {
    return (
        <div className={username ? 'header' : 'headerNotLogged'}>
            <div>
                <img src={logo} />
                {username 
                ? <p className="mb-0">{username}</p> 
                : null}

            </div>
        </div>
    )
}

export default Header