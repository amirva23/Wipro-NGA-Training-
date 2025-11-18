import React from "react";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">📚 BookVerse</h1>
      <BookList />
    </div>
  );
}

export default App;
