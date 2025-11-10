import React from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  return (
    <div>
      <h2>📝 My Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
