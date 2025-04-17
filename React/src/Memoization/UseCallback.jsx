import React, { useCallback, useState } from 'react'
import List from './List';

const UseCallback = () => {

    const [number , setNumber] = useState(1);
    const [dark , setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
      }, [number]);

    const theme = {
        backgroundColor : dark ? '#000' : '#fff',
        color : dark ?  '#fff' : '#000'
    }


  return (
    <div style={theme}>

        <h3>Callback example</h3>

        <input type="number" value={number} onChange={(e) =>{
            setNumber(parseInt(e.target.value))
        }} />

        <button onClick={()=> setDark( !dark)}>toggle button</button>
        
        <List getItems={getItems}/>

    </div>
  )
}

export default UseCallback