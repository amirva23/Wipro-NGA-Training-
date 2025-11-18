import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card card shadow-sm border-0" style={{ width: "250px", borderRadius: "15px" }}>
      <img
        src={book.image}
        alt={book.title}
        className="card-img-top"
        style={{
          height: "280px",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted mb-1">{book.author}</p>
        <p className="fw-bold text-primary mb-2">₹{book.price}</p>
        <Link
          to={`/book/${book.id}`}
          className="btn btn-outline-primary btn-sm rounded-pill px-3"
        >
          View Author
        </Link>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
