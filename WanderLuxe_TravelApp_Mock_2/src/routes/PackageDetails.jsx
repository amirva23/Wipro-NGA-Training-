import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PackageDetails() {
  const { id } = useParams();

  const allPackages = [
    {
      id: 1,
      title: "Goa Beach Escape",
      price: "₹12,999",
      days: "3 Nights / 4 Days",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Relax by the beaches, enjoy nightlife, and explore Goa’s charm."
    },
    {
      id: 2,
      title: "Himalayan Trek Adventure",
      price: "₹18,499",
      days: "5 Nights / 6 Days",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description: "A thrilling trek experience with breathtaking mountain views."
    },

    {
      id: 3,
      title: "Andaman Island Luxury Trip",
      price: "₹29,999",
      days: "4 Nights / 5 Days",
      image: "https://afar.brightspotcdn.com/dims4/default/150132a/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
      description: "Crystal clear beaches, luxury stays, and island adventures."
    },

    {
      id: 4,
      title: "Kerala Houseboat Experience",
      price: "₹15,999",
      days: "4 Nights / 5 Days",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada",
      description: "Enjoy peaceful backwaters, greenery, and a beautiful houseboat stay."
    },
  ];

  const pkg = allPackages.find((p) => p.id == id);

  if (!pkg) return <h2>Package Not Found</h2>;

  return (
    <div
  style={{
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  }}
>

      <img
  src={pkg.image}
  alt={pkg.title}
  style={{
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "20px",
  }}
/>


      <h1>{pkg.title}</h1>
      <p>{pkg.description}</p>
      <p>{pkg.days}</p>
      <p className="price">{pkg.price}</p>

      <Link to={`/book/${pkg.id}`} className="book-btn">
        Book Now
      </Link>
    </div>
  );
}
