// import React from "react";
// import TodoList from "./ToDoList";
// import './App.css'; 

// const beginTodo = [
//     { id: 1, name: "1" },
//     { id: 2, name: "2" },
//     { id: 3, name: "3" },
// ];

// class ToDoApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: JSON.parse(localStorage.getItem("todos")) || beginTodo,
//       inputValue: ""
//     };
//   }

//   addTodo = () => {
//     const { todos, inputValue } = this.state;

//     if (inputValue.trim() !== "") {
//       const newTodo = {
//         id: todos.length ? todos[todos.length - 1].id + 1 : 1,
//         name: inputValue
//       };

//       const newTodos = [...todos, newTodo];

//       this.setState(
//         { todos: newTodos, inputValue: "" }, () => {
//           localStorage.setItem("todos", JSON.stringify(this.state.todos));
//         }
//       );
//     }
//   }

//   deleteToDo = (id) => {
//     const newTodos = this.state.todos.filter(todo => todo.id !== id);
//     this.setState(
//       { todos: newTodos }, () => {
//         localStorage.setItem("todos", JSON.stringify(this.state.todos));
//       }
//     );
//   }

//   clearTodo = () => {
//     this.setState({ todos: [] }, () => {
//         localStorage.removeItem("todos");
//       }
//     );
//   }

//   handelInputChange = (e) => {
//     this.setState({ inputValue: e.target.value });
//   }

//   handelKeyDown = (e) => {
//     if (e.key === "Enter") {
//       this.addTodo();
//     }
//   }

//   render() {
//     const { todos, inputValue } = this.state;
//     return (
//       <div className="obj">
//         <input
//           className="inputTodo"
//           type="text"
//           value={inputValue}
//           onChange={this.handelInputChange}
//           onKeyDown={this.handelKeyDown}
//         />
//         <p className="num">{todos.length}</p>

//         <TodoList
//           todos={todos}
//           onDelete={this.deleteToDo}/>

//         <button
//           className="mainBT"
//           onClick={this.addTodo}>
//           Add ToDo
//         </button>

//         <button
//           className="mainBT"
//           onClick={this.clearTodo}>
//           Clear All ToDos
//         </button>

//       </div>

//     )
//   }
// }

// export default ToDoApp;


// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import './App.css'; 

// function useEffectFunction() {
//     const [count, setCount] = useState(0);
    
//     useEffect(() => {
//         console.log("useEffect");
//     })

//     return (
//         <div>
//             <p className="num">Count: {count}</p>
//             <button className="mainBT" onClick={() => setCount(count + 1)}> + 1 </button>
//         </div>
//     );
    
// }


// export default useEffectFunction;




// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// import React, { useState, useLayoutEffect } from "react";
// import './App.css'; 

// function LayoutEffect() {
//   const [paragrephs, setParagraphs] = useState([]);

//   useLayoutEffect(() => { }, [paragrephs]);

//   const addPar = () => {
//     setParagraphs([...paragrephs, "NewParagraph"]);
//   }
//   return (
//     <div>
//       <button className="mainBT" onClick={addPar}>Add Paragraph</button>
//       {paragrephs.map((p, index) => (
//         <p key={index}>{p}</p>
//       ))}
//     </div>
//   )
// }

// export default LayoutEffect;



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import './App.css'; 

// function RandomHello() {
//   const names = ["Ann", "Tom", "Ben", "Mia", "Nik"]
//   const [message, setMess] = useState("");

//   const makeMess = () => {
//     const rendomName = names[Math.floor(Math.random() * names.length)]
//     setMess(`Hello ${rendomName}`)
//   }
//   return (
//     <div>
//       <p className="num">{message}</p>
//       <button className="mainBT" onClick={makeMess}>Hello to ...</button>
//     </div>
//   )
// }
// export default RandomHello;


// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// import React, { useReducer, useState } from "react";
// import './App.css'; 

// const beginState = { name: "", lastName: "", birthYear: "" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.payload };
//     case "lastName":
//       return { ...state, lastName: action.payload };
//     case "birthYear":
//       return { ...state, birthYear: action.payload };
//     default:
//       return state;
//   }
// }

// function ReducerWork() {
//   const [state, dispatch] = useReducer(reducer, beginState); // стан + dispatch
//   const [input, setInput] = useState(""); // локальний стан для input

//   return (
//     <div>
//       <input 
//         className="inputTodo"
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} 
//         placeholder="Введіть текст"
//       />
//       <button className="mainBT" onClick={() => dispatch({ type: "name", payload: input })}>
//         Ім'я
//       </button>
//       <button className="mainBT" onClick={() => dispatch({ type: "lastName", payload: input })}>
//         Прізвище
//       </button>
//       <button className="mainBT" onClick={() => dispatch({ type: "birthYear", payload: input })}>
//         Рік народження
//       </button>

//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </div>
//   )
// }

// export default ReducerWork;



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

import React, { useRef } from "react";
import './App.css'; 

function Ref() {
  const inpRef = useRef(null)

  const focus = () => inpRef.current.focus()
  const blur = () => inpRef.current.blur()

  return (
    <div>
      <input
        className="inputTodo"
        ref={inpRef}
        type="text"
      ></input>

      <button className="mainBT" onClick={focus}>focus</button>
      <button className="mainBT" onClick={blur}>blur</button>
    </div>
  )
}

export default Ref;

