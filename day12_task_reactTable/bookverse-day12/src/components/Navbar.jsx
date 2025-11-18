import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand fw-bold fs-4" to="/home">
        📚 BookVerse
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <a
              className="nav-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
