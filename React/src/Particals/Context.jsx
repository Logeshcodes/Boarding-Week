import React, { createContext, useState } from 'react'
import ChildContext from './ChildContext'

export const CounterContext = createContext()

const Context = () => {

    const [ count , setCount] = useState(0)


    function increment(){
        setCount(count +1)
    }
    function decrement(){
        setCount(count -1)
    }
    function reset(){
        setCount(0)
    }


  return (
    <>
    <CounterContext.Provider value={{increment, decrement , reset , count}}>
        <ChildContext/>
    </CounterContext.Provider>
    </>
  )
}

export default Context