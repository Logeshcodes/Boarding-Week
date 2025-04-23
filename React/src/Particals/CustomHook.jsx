import React, { useState } from 'react'


function useCounter(initialValue){

    const [count , setCount] = useState(initialValue);


    function increment(){
        setCount(count +1)
    }
    function decrement(){
        setCount(count -1)
    }
    function reset(){
        setCount(0)
    }

    return { increment , decrement , reset , count}


}

const CustomHook = () => {

    const {increment , decrement , reset , count } = useCounter(0)

  return (
    <>
    <h1>{count}</h1>

    <button onClick={increment}>increment</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
}

export default CustomHook