import React, { Component, createRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import booksData from "../data/booksData.json"; // make sure you have this file
import "./BookList.css";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      view: "grid",
      searchTerm: "",
      selectedAuthor: null,
    };
    this.searchRef = createRef();
  }

  componentDidMount() {
    console.log("📚 Books loaded successfully!");
    this.setState({ books: booksData });
  }

  handleToggleView = () => {
    this.setState((prevState) => ({
      view: prevState.view === "grid" ? "list" : "grid",
    }));
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleFocusSearch = () => {
    this.searchRef.current.focus();
  };

  handleViewAuthor = (author) => {
    this.setState({ selectedAuthor: author });
  };

  render() {
    const { books, view, searchTerm, selectedAuthor } = this.state;

    if (!Array.isArray(books)) {
      console.error("❌ Error: booksData is not an array!", books);
      return <p>Something went wrong loading the books.</p>;
    }

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="container my-5">
        <h2 className="text-center mb-4 text-primary">📖 choose your books</h2>

        <div className="d-flex justify-content-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search books..."
            ref={this.searchRef}
            className="form-control w-50"
            value={searchTerm}
            onChange={this.handleSearch}
          />
          <button className="btn btn-outline-secondary" onClick={this.handleFocusSearch}>
            Focus
          </button>
          <button className="btn btn-outline-primary" onClick={this.handleToggleView}>
            Toggle to {view === "grid" ? "List" : "Grid"} View
          </button>
        </div>

        {/* Grid/List Display */}
        <div
          className={
            view === "grid"
              ? "row row-cols-1 row-cols-md-3 g-4"
              : "d-flex flex-column align-items-center"
          }
        >
          {filteredBooks.map((book) => (
            <div
              className={view === "grid" ? "col" : "col-8 mb-3"}
              key={book.id}
            >
              <BookCard book={book} onViewAuthor={this.handleViewAuthor} />
            </div>
          ))}
        </div>

        {/* Author Info Section */}
        {selectedAuthor && (
          <div className="mt-5">
            <AuthorInfo authorName={selectedAuthor} />
          </div>
        )}
      </div>
    );
  }
}

export default BookList;
