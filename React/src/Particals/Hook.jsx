import React, { useState } from 'react'


function useInput(initialValue ){

    const [ input , setInput] = useState(initialValue)

    function handleChange(e){
        setInput(e.target.value)
    }

    function reset(){
        setInput('')
    }

    return { input , handleChange , reset}
}

const Hook = () => {


    const {input , handleChange , reset} = useInput('')

  return (
    <>
    
    <h1>{input}</h1>

    <input type="text" value={input} onChange={handleChange} />

    <button onClick={reset}>reset</button>
   
    
    </>
  )
}

export default Hook