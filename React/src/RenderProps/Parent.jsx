import React from 'react'
import Child from './Child'

const Parent = () => {



  return (
    <>
      <Child  render = {(count , increment) =>(
      
        <>
            <div>Count is : {count}</div>
            <button onClick={increment}>+</button>
        </>
      )}
      
      
      />
    </>
  )
}

export default Parent


// A render prop is a technique for sharing code between React components using a prop whose value is a function.