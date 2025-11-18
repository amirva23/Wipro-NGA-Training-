function BookCard({ title, author, price, cover, viewMode }) {
  return (
    <div className={`book-card ${viewMode}`}>
      <div className="book-image">
        <img src={cover} alt={title} />
      </div>

      <div className="book-details">
        <h3>{title}</h3>
        <p className="author">by {author}</p>
        <p className="price">₹{price}</p>
      </div>
    </div>
  );
}

export default BookCard;
