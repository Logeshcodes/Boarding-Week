import React, { useMemo, useState } from 'react'

// memozied a computed Value

const UseMemo = () => {


    const [ count , setCount] = useState(0);
    const [ dark , setDark] = useState(false);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
          result += num;
        }
        return result;
      };

    const memoizedValue = useMemo( ()=>expensiveCalculation(count) ,[count])

    const theme = {
        backgroundColor : dark ? '#000' : '#fff',
        color : dark ? '#fff' : '#000'
    }


  return (
    <div style={theme}>

        <h3>Expensive Calculation : {memoizedValue}</h3>

        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setDark(!dark)}>Toggle Theme</button>



    </div>
  )
}

export default UseMemo