import React from 'react';
import {
    Link
} from 'react-router-dom'

import logo from '../assets/logo.png'

const Header = ({ username }) => {
    return (
        <div className={username ? 'header' : 'headerNotLogged'}>
            <div>
                <Link to="/"><img src={logo} /></Link>
                {username
                    ? <p className="mb-0">{username}</p>
                    : null}

            </div>
        </div>
    )
}

export default Header