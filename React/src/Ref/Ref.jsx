import React, { useRef, useState } from 'react'

const Ref = () => {

    const [ text , setText] = useState('');

    const inputRef = useRef();

    function showHandle(){
        setText(inputRef.current.value);
    }

  return (
    <>
    <h3>Text value : {text}</h3>
    <input type="text" ref={inputRef}  />
    <button onClick={()=>showHandle()}>submit</button>
    </>
  )
}

export default Ref