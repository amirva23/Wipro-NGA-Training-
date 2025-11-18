import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching book details:", err));
  }, [id]);

  if (loading)
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}></div>
    </div>
  );


  if (!book || Object.keys(book).length === 0)
    return <h3 className="text-center mt-5 text-danger">❌ Book not found</h3>;

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        padding: "40px 0",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "700px",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <div className="card-body p-4">
          <h2 className="text-center mb-3 text-dark">{book.title}</h2>
          <p className="text-muted text-center mb-4">
            by <strong>{book.author}</strong>
          </p>

          <div className="d-flex flex-column gap-2 mb-3">
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
            <p><strong>Description:</strong> {book.description}</p>
          </div>

          <div className="border-top pt-3">
            <h5 className="text-primary">About the Author</h5>
            <p>{book.authorBio}</p>
            <h6 className="mt-3 text-secondary">Top Books:</h6>
            <ul>
              {book.topBooks &&
                book.topBooks.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="text-center mt-4">
            <Link to="/home" className="btn btn-outline-primary rounded-pill px-4">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
