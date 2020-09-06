import React from 'react';

const Button = ({children, type}) =>{
    return(
        <>
            <div className={type}>
                {children}      
            </div>
        </>
    )
}

export default Button