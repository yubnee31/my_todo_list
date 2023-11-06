import React, { useState } from "react";
import "../App.css";
import Add from "./Add";
import TodoList from "./TodoList";
import Header from "./Header";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초 공부해보기",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="App">
      <Header />
      <Add
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        todo={todo}
        setTodo={setTodo}
      />

      <TodoList
        state="Working.."
        todo={todo}
        setTodo={setTodo}
        isDone={false}
      />
      <TodoList state="Done.." todo={todo} setTodo={setTodo} isDone={true} />
    </div>
  );
};

export default App;
