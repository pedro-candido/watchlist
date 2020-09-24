import React from 'react';

const Button = ({children, type, onClick}) =>{
    return(
        <>
            <div 
                className={type}
                onClick={onClick}
                >
                {children}      
            </div>
        </>
    )
}

export default Button