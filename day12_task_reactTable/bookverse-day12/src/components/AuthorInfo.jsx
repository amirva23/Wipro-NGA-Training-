import React, { Component, createRef } from "react";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log("AuthorInfo loaded for:", this.props.book.author);
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    const { book } = this.props;

    return (
      <div className="card shadow-lg p-4 fade-in">
        <div className="row">
          <div className="col-md-4">
            <img
              src={book.image}
              alt={book.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-8">
            <h3 className="text-primary">{book.author}</h3>
            <p className="lead">{book.bio}</p>
            <h5>📘 Top Books:</h5>
            <ul>
              {book.topBooks.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <input
              type="text"
              ref={this.inputRef}
              className="form-control my-2"
              placeholder="Search inside author works..."
            />
            <button className="btn btn-success" onClick={this.focusInput}>
              Focus Input
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
