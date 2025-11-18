import { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travellers: 1,
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your trip is booked successfully !!");
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="title"> Book Your Vacations</h2>
        <p className="subtitle">Package ID: {id}</p>

        <form onSubmit={handleSubmit} className="form">

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>No. of Travellers</label>
          <input
            type="number"
            name="travellers"
            min="1"
            required
            value={formData.travellers}
            onChange={handleChange}
          />

          <label>Travel Days </label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />

          <button className="submit-btn">Book Now </button>
        </form>
      </div>
    </div>
  );
}
