import React from "react";

function TodoList({ todos, onDelete }) {
    return (
        <ul className="tasks">
            {todos.map((todo) => (
                <li className="task" key={todo.id}>
                    {todo.name}
                    <button
                        className="delBT"
                        onClick={() => onDelete(todo.id)}>
                        ✕
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default TodoList;