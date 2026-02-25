import React from "react";
import TodoList from "./ToDoList";
import './App.css'; 

const beginTodo = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
];

class ToDoApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || beginTodo,
      inputValue: ""
    };

  }

  addTodo = () => {
    const { todos, inputValue } = this.state;

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        name: inputValue
      };

      const newTodos = [...todos, newTodo];

      this.setState(
        { todos: newTodos, inputValue: "" }, () => {
          localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
      );
    }
  }

  deleteToDo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState(
      { todos: newTodos }, () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  clearTodo = () => {
    this.setState({ todos: [] }, () => {
        localStorage.removeItem("todos");
      }
    );
  }

  handelInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handelKeyDown = (e) => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  }

  render() {
    const { todos, inputValue } = this.state;
    return (
      <div className="obj">
        <input
          className="inputTodo"
          type="text"
          value={inputValue}
          onChange={this.handelInputChange}
          onKeyDown={this.handelKeyDown}
        />
        <p className="num">{todos.length}</p>

        <TodoList
          todos={todos}
          onDelete={this.deleteToDo}
        />

        <button
          className="mainBT"
          onClick={this.addTodo}
        >
          Add ToDo
        </button>

        <button
          className="mainBT"
          onClick={this.clearTodo}
        >
          Clear All ToDos
        </button>

      </div>

    )
  }
}

export default ToDoApp;