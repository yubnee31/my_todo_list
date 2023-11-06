import React from "react";

function Add({ title, setTitle, body, setBody, todo, setTodo }) {
  const addButtonHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      제목 : <input value={title} onChange={titleChangeHandler} />
      내용 : <input value={body} onChange={bodyChangeHandler} />
      <form onSubmit={addButtonHandler}>
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default Add;
