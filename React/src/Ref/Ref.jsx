import React, { useRef, useState } from 'react'

const Ref = () => {

  const inputRef = useRef();
  const [message , setMessage] = useState('')

  function handleShow(){
      setMessage(inputRef.current.value)
  }


  return (
    <>
    <input type="text"  placeholder='Enter a Text' ref={inputRef}/>

    <button onClick={handleShow}>show</button>

    <h3>{message}</h3>

    </>
  )
}

export default Ref