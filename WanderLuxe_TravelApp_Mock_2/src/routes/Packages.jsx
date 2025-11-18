import "./Packages.css";
import { Link } from "react-router-dom";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Goa Beach Escape",
      price: "₹12,999",
      days: "3 Nights / 4 Days",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Himalayan Trek Adventure",
      price: "₹18,499",
      days: "5 Nights / 6 Days",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 3,
      title: "Kerala Houseboat Experience",
      price: "₹15,999",
      days: "4 Nights / 5 Days",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      id: 4,
      title: "Andaman Island Luxury Trip",
      price: "₹29,999",
      days: "4 Nights / 5 Days",
      img: "https://afar.brightspotcdn.com/dims4/default/150132a/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
    },
  ];

  return (
    <div className="packages-page">
      <h1 className="packages-title">Travel Packages for You </h1>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.img} alt={pkg.title} className="package-img" />

            <h3>{pkg.title}</h3>
            <p>{pkg.days}</p>
            <p className="price">{pkg.price}</p>

            <Link to={`/packages/${pkg.id}`} className="book-btn">
              Package Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
