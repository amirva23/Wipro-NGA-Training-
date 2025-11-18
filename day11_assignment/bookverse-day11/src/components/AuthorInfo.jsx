import React, { Component } from "react";

class AuthorInfo extends Component {
  render() {
    const { author } = this.props;
    const authorDetails = {
      "J.K. Rowling": {
        bio: "British author known for the Harry Potter series.",
        topBooks: ["Harry Potter 1", "Harry Potter 2", "Fantastic Beasts"],
      },
      "Dan Brown": {
        bio: "American author famous for thrillers like The Da Vinci Code.",
        topBooks: ["The Da Vinci Code", "Inferno", "Angels & Demons"],
      },
      "George R.R. Martin": {
        bio: "American novelist known for A Song of Ice and Fire series.",
        topBooks: ["Game of Thrones", "Clash of Kings", "Storm of Swords"],
      },
    };

    const info = authorDetails[author];

    if (!info) return <p className="mt-3">No details available.</p>;

    return (
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4 className="card-title text-primary">{author}</h4>
          <p className="card-text">{info.bio}</p>
          <h6>Top 3 Books:</h6>
          <ul>
            {info.topBooks.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
