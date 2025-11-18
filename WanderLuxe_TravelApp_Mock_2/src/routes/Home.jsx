import DestinationCard from "../components/DestinationCard";
import "./Home.css";

export default function Home() {

<div className="hero">
  <h1>Explore Your Dream Destinations </h1>
  <p>Find the best travel packages curated just for you.</p>
</div>

  const destinations = [
  {
    title: "Goa",
    subtitle: "Beaches",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Himalayas",
    subtitle: "Trek",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Paris",
    subtitle: "Romantic Escape",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    title: "Maldives",
    subtitle: "Water Villas",
    img: "https://afar.brightspotcdn.com/dims4/default/150132a/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg"
  },
  {
    title: "Dubai",
    subtitle: "Desert Safari",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Bali",
    subtitle: "Nature & Temples",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    title: "Switzerland",
    subtitle: "Snow Mountains",
    img: "https://images.ctfassets.net/lba2mur2bccb/NjmructBqAT0bXSEmy5Aq/a7e069b30ea2a13b90b27506ddf7113b/istockphoto-1211097990-2048x2048-transformed.jpeg"
  },
  {
    title: "Jaipur",
    subtitle: "Royal Heritage",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada"
  },
  {
    title: "Kerala",
    subtitle: "Backwaters",
    img: ":https://s3.india.com/wp-content/uploads/2024/12/Eco-friendly-Travel-In-Kerala.jpg?impolicy=Medium_Widthonly&w=800&h=541"
  
  },
];

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="hero">
        <h1>Find Your Next Adventure </h1>
        <p>Beautiful places. Affordable packages. Unforgettable memories.</p>
      </div>

      {/* Destinations Section */}
      <h2 className="section-title">Featured Destinations </h2>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
}
