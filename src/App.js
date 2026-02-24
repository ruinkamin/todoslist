import React, { useState } from "react";
import './App.css'; 

function ToDoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("")
    }
  }

  return (
    <div>
      <h1>My ToDoApp</h1>
      <input type="text" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="input todo"
        onKeyDown={(e) => e.key === "Enter" && addTodo()}></input>
      
      <p>{todos.length}</p>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      
      <button onClick={addTodo}>Add</button>
    </div>
  );
}


export default ToDoApp;