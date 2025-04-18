import React, { useEffect, useState } from 'react'

const State = () => {



  const [input , setInput] = useState('');
  const [editIndex , setEditIndex] = useState(null);
  const [ todo , setTodo] = useState([]);
  const [ search , setSearch] = useState('');


  function addTodo(){
    
    if(input.trim() === '') return ;

    if(editIndex !== null){

      const updataTodo = [...todo];
      updataTodo[editIndex] = input ;
      localStorage.setItem('form' , JSON.stringify(updataTodo))
      setTodo(updataTodo);
      setEditIndex(null);
    }else{
      const data = [...todo , input ] 
      localStorage.setItem( 'form' , JSON.stringify(data))
      setTodo(data);
    }

    setInput('')
  }

  function handleDelete(deleteIndex){
      const updated =  todo.filter((_ , index) => index !== deleteIndex)
      setTodo(updated);
      localStorage.setItem( 'form' , JSON.stringify(updated))

  }


  function handleEdit(editIndex){
      setInput(todo[editIndex])
      setEditIndex(editIndex);
  }

  const filterSearch = todo.filter( item => item.toLowerCase().includes(search.toLowerCase()))


  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem('form' || []))

    if (data) setTodo(data);

  },[])


  return (
    <>
    
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />


    <button onClick={addTodo}>
      {
        editIndex !== null ? 'Save' : 'Add'
      }
    </button><br /><br />


    <input type="text" placeholder='Search here...' value={search} onChange={(e)=> setSearch(e.target.value)}/>


    {
      todo.length > 0 ? (

       <div>
             
          <div>
            {
              filterSearch.length > 0 ? (

                filterSearch.map( ( item , index) => (

                  <ul key={index}>
                    <li>{item} {" "}
    
                      <button style={{ color : "red"}} onClick={()=> handleDelete(index) }>Delete</button>
                      <button style={{ color : "blue"}} onClick={()=> handleEdit(index) }>Edit</button>
    
                    </li>
                  </ul>
                ))
              ):(
                <h4>No Search Data </h4>
              )
            }
          </div>
       
       </div>

      ):(
          <h3>Not Available</h3>
      )
    }
    
    </>
  )
}

export default State