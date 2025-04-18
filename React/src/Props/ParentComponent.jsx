import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {


  const [ message , setMessage] = useState('Hello from Parent')

  function handleUpdate(){
    setMessage('Message Updated...')
  }

  return (
    <>
    <ChildComponent message={message} onupdate={handleUpdate} />
    </>
  )
}

export default ParentComponent