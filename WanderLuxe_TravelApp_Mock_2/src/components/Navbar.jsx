import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">WanderLuxe </h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact </Link>
      </div>
    </nav>
  );
}
