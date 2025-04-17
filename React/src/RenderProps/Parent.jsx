import React from 'react'
import Child from './Child'

const Parent = () => {

  return (
    <>
    
    <Child

        render={ (count , increment)=>{
            return(
                <>
                <div>Count is : {count}</div>
                <button onClick={increment}>Increment</button>
                </>
            )
        }}
    
    />
    </>
  )
}

export default Parent


// A render prop is a technique for sharing code between React components using a prop whose value is a function.