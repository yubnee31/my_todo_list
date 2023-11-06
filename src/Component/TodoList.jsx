import React from "react";
import Toggle from "./Toggle";

function TodoList({ isDone, state, todo, setTodo }) {
  const filteredTodo = isDone
    ? todo.filter((todos) => todos.isDone === true)
    : todo.filter((todos) => todos.isDone === false);
  return (
    <div>
      <h2>{state}</h2>
      <ul className="todo-list">
        {filteredTodo.map((todos) => (
          <Toggle key={todos.id} todos={todos} todo={todo} setTodo={setTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
