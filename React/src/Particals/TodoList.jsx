import React, { useState } from 'react'

const TodoList = () => {


    const [input , setInput] = useState('');
    const [todos , setTodos] = useState([]);
    const [ editIndex , setEditIndex] = useState(null);
    const [ search , setSearch] = useState('')

    const filterSearch = todos.filter( (item)=> item.toLowerCase().includes(search.toLowerCase())) ;


    const addTodo = () =>{

        if(input.trim() === '') return ;

        if(editIndex !== null){

            const updatedTodos = [...todos];
            updatedTodos[editIndex] = input ;
            setTodos(updatedTodos);
            setEditIndex(null)
        }else{
            setTodos([...todos , input])
        }
        setInput('')
    }


    const deleteTodo = (deleteIndex) => {

        let update = todos.filter( (_ , index) => index !== deleteIndex);
        setTodos(update);
    }


    const editTodo = (editIndex) =>{

        setInput(todos[editIndex]);
        setEditIndex(editIndex);
    }
    

  return (
    <>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        

        <button onClick={addTodo}>
            {
                editIndex !== null ? "Save" : "Add"
            }
        </button>

        

        <div>
        <input placeholder='search here...' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

    
        </div>


        <div>
            {
                todos.length > 0 ? (
                    <ul>
                        {
                           filterSearch.length > 0 ? (
                            filterSearch.map( (item , i)=>(
                                <li key={i}>
                                    {item} {' '}
                                    <button style={{color : 'blue'}} onClick={()=> editTodo(i)}>Edit</button>
                                    <button style={{color : 'red'}} onClick={()=> deleteTodo(i)}>Delete</button>
                                </li>
                            ))
                           ):(
                            <h3>No search data...</h3>
                           )
                        }
                    </ul>
                ) :(
                    <h2> No data Available</h2>
                )
            }
        </div>
    </>
  )
}

export default TodoList