import React, { useState } from "react";
import dispatcher from "../dispatcher/Dispatcher.jsx";

function AddTodo() {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatcher.dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write your todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={handleAdd}>➕ Add Todo</button>
    </div>
  );
}

export default AddTodo;
