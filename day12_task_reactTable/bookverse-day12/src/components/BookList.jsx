import React, { useState } from "react";
import BookCard from "./BookCard";
import LayoutToggle from "./LayoutToggle";

const BookList = ({ books }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <LayoutToggle viewMode={viewMode} setViewMode={setViewMode} />
      <input
        type="text"
        className="form-control my-3 shadow-sm"
        placeholder="🔍 Search by book title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div
        className={`book-container ${
          viewMode === "grid"
            ? "d-flex flex-wrap justify-content-center"
            : "list-view"
        }`}
      >
        {filteredBooks.map((book) => (
          <div key={book.id} className="m-2">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
