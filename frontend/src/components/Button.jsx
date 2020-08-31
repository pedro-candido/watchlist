import React from 'react';
import './Button.scss'

const Button = ({label, type}) =>{
    return(
        <>
            <div className={type}>
                {label}      
            </div>
        </>
    )
}

export default Button