import BookCard from "./BookCard";

function BookList({ books, viewMode }) {
  if (books.length === 0)
    return <p className="no-books">No books found 😢</p>;

  return (
    <div className={`book-list ${viewMode}`}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} viewMode={viewMode} />
      ))}
    </div>
  );
}

export default BookList;
