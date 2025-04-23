import React, { createContext, useState } from 'react'
import CheckBox from './CheckBox'

export const CheckBoxContext =  createContext()

const CheckContext = () => {

    const [ checked , setChecked] = useState(false)


    function boxClick(){
        setChecked(prev => !prev )
    }



  return (
    <>

    <CheckBoxContext.Provider value={{checked , boxClick}}>
        <CheckBox   />
    </CheckBoxContext.Provider>


    
    </>
  )
}

export default CheckContext