import React, { useState } from 'react'

const Child = ({render}) => {


  const [ count , setCount ] = useState(0);

  const increment = ()=>{
      setCount(count +1);
  }


  return render( count , increment )
}

export default Child