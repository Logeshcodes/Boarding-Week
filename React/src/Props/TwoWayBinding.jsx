import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [username , setUsername] = useState()

  return (
    <>

        {/* React → DOM (bind input value) */}
        {/* DOM → React (update state) */}



        <h2>Two way binding</h2>
        <input type="text" placeholder='Enter the username' onChange={(e)=> setUsername(e.target.value)} />
        <h4>Hello {username} !</h4>  
    </>
  )
}

export default TwoWayBinding