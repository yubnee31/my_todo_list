import React from "react";

function Toggle({ todos, todo, setTodo }) {
  function toggleButtonHandler(id) {
    setTodo(
      todo.map((todos) => {
        if (todos.id === id) {
          todos.isDone = !todos.isDone;
        }
        return todos;
      })
    );
  }

  const removeButtonHandler = (id) => {
    const newTodo = todo.filter((todos) => todos.id !== id);
    setTodo(newTodo);
  };

  return (
    <li key={todos.id} className="component-style">
      <p>{todos.title}</p>
      <p>{todos.body}</p>
      <div className="toggle-btns">
        <button onClick={() => removeButtonHandler(todos.id)}>삭제하기</button>
        <button onClick={() => toggleButtonHandler(todos.id)}>
          {todos.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default Toggle;
