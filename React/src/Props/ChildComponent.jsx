import React from 'react'

const ChildComponent = ({message , onupdate }) => {
  return (
    <>
    {message}
    <button onClick={onupdate}>Update</button>
    </>
  )
}

export default ChildComponent