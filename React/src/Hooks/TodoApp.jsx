import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      // Editing mode
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add mode
      setTodos([...todos, input]);
    }

    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
   
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>
        {editIndex !== null ? "Save" : "Add"}
      </button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}{" "}
            <button onClick={() => editTodo(i)} style={{ color: "blue" }}>
              Edit
            </button>{" "}
            <button onClick={() => deleteTodo(i)} style={{ color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
