import React from 'react'
import InputNum from 'react-input-number'

const InputNumber = ({children, value, inputName, inputPlaceholder, onChange}) => {
   return (
      <div>
         <label htmlFor="">{children}</label>
         <InputNum 
            value={value}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={onChange}
            min={1}
            max={5}
         >
         </InputNum>
      </div>
   )
}

export default InputNumber
