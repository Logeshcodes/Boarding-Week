import React, { useContext } from 'react'
import { CheckBoxContext } from './CheckContext'


const CheckBox = () => {

    const {checked , boxClick} = useContext(CheckBoxContext)


  return (
    <>

        <input type="checkbox" checked={checked} />

        <button onClick={boxClick}>change</button>
    
    
    </>
  )
}

export default CheckBox