import React from 'react'

function Input({label,...rest}) {
  return (
    <>
  {label && (  
    <>
    <label forhtml={label}>
    {label}
    </label>
    
    <input   {...rest}  />
    </>
    )}
    </>
  )
}

export default Input