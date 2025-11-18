import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import LoadingHOC from "../components/LoadingHOC";
import RenderProps from "../components/RenderProps";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("http://localhost:4000/books")
    .then((res) => res.json())
    .then((data) => {
      setBooks(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      setLoading(false);
    });
}, []);


  const BookListWithLoading = LoadingHOC(BookList);

  return (
    <div className="container mt-4">
      <RenderProps render={() => <h2 className="text-center mb-3">📚 Featured Books</h2>} />
      <BookListWithLoading isLoading={loading} books={books} />
    </div>
  );
};

export default Home;
