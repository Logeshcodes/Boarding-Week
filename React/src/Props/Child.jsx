import '../../src/App.css'
import React from 'react'

const Child = ({name , show }) => {

    let cname = 'Papa'

  return (
    <>
        <div className="card">
            <h4>Parent name is : {name}</h4>
            <button onClick={()=> show(cname)}>click me</button>
        </div>
    </>
  )
}

export default Child ;
