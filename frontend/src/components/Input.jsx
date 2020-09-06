import React from 'react';

const Input = ({inputName, inputType, inputPlaceholder, children}) =>{
    return (
        <div className='inputFields d-flex flex-column container'>
            <label htmlFor={inputName}>{children}</label>
            <input 
                type={inputType} 
                name={inputName} 
                placeholder={inputPlaceholder} 
            />
        </div>
    )
}

export default Input