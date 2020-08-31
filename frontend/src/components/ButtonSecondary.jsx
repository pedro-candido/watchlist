import React from 'react';
import './ButtonSecondary.scss'

const ButtonSecondary = ({label, type}) =>{
    return(
        <>
            <div className={type}>
                {label}
            </div>
        </>
    )
}

export default ButtonSecondary