import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { VscChromeClose } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  let [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  let submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} style={{ userSelect: "none" }} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <VscChromeClose
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <MdEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
