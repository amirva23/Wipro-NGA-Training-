import { Link } from "react-router-dom";
import "./PackageCard.css";

export default function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <img src={pkg.image} alt={pkg.title} className="package-img" />

      <h3>{pkg.title}</h3>
      <p>{pkg.days}</p>
      <p className="price">₹{pkg.price}</p>

      <Link to={`/packages/${pkg.id}`} className="book-btn">
        Book Now
      </Link>
    </div>
  );
}
