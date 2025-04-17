import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {

    const [ items , setItems] = useState([]);

    useEffect(()=>{
        console.log('Updating items...');
        setItems(getItems())
    }, [getItems])

    return items.map((item, index) => <div key={index}>{item}</div>);
  
}

export default List