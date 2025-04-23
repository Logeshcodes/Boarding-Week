import React from 'react'
import { CounterContext } from './Context'
import { useContext } from 'react'


const ChildContext = () => {

    const {increment , decrement , reset , count} = useContext(CounterContext);

  return (
    <>
    
    <h1>{count}</h1>

    <button onClick={increment}>increment</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrement}>decrement</button>
    
    </>
  )
}

export default ChildContext