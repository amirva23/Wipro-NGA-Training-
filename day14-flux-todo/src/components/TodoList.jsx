import React, { useState, useEffect } from "react";
import TodoStore from "../stores/TodoStore.jsx";

function TodoList() {
  const [todos, setTodos] = useState(TodoStore.getTodos());
  const [completed, setCompleted] = useState([]); // store completed indexes

  useEffect(() => {
    const update = () => setTodos([...TodoStore.getTodos()]);
    TodoStore.on("change", update);
    return () => TodoStore.off("change", update);
  }, []);

  const toggleComplete = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => toggleComplete(index)}
          style={{
            cursor: "pointer",
            textDecoration: completed.includes(index) ? "line-through" : "none",
            color: completed.includes(index) ? "#999" : "#333",
          }}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
