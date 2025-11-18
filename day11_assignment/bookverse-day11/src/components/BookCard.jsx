import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./BookCard.css"; // optional CSS for styling

const BookCard = ({ book, onViewAuthor }) => {
  return (
    <Card className="book-card shadow-sm h-100">
      <Card.Img
        variant="top"
        src={book.image || "https://via.placeholder.com/250x350?text=No+Image"}
        alt={book.title}
        className="book-img"
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Author:</strong> {book.author} <br />
          <strong>Genre:</strong> {book.genre} <br />
          <strong>Price:</strong> ₹{book.price}
        </Card.Text>
        <Button
          variant="primary"
          className="w-100"
          onClick={() => onViewAuthor(book.author)}
        >
          View Author
        </Button>
      </Card.Body>
    </Card>
  );
};

//Define prop types and fallback defaults
BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string, // optional now
  }).isRequired,
  onViewAuthor: PropTypes.func, // optional handler
};

BookCard.defaultProps = {
  onViewAuthor: () => alert("Author info not available yet!"),
};

export default BookCard;
