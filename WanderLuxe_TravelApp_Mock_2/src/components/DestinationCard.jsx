import "./DestinationCard.css";

export default function DestinationCard({ title, subtitle, img }) {
  return (
    <div className="destination-card">
      <img src={img} alt={title} className="destination-img" />

      <h3>{title} - {subtitle}</h3>
    </div>
  );
}
