import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  //todo input
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="todo-app">
        <TodoList />
      </div>
      <div className="chatbox">
        <div className="chat-input-holder">
          <input
            className="chat-input-textarea"
            placeholder="Ask your questions here..."
            id="input"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
