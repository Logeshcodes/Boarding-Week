import React from 'react'

const Child = ({name , cname }) => {

    let cname = 'Papa'

  return (
    <>
      <h4>Parent name is : {name}</h4>
      <button onClick={()=> show(cname)}>click me</button>
    </>
  )
}

export default Child ;
