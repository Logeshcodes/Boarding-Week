import React, { useRef, useState } from 'react'
import Forward from './Forward';

const Ref = () => {

    const [msg , setMsg] = useState('')
    const inputRef = useRef();

    function showHandle(){
        setMsg(inputRef.current.value);
    }

    function handleChange(e){
        setMsg(e.target.value)
    }

  return (
    <>
    <Forward ref={inputRef} onChange={handleChange}/>

    <h1>{msg}</h1>

    <button onClick={()=> showHandle()}>show</button>
    </>
  )
}

export default Ref