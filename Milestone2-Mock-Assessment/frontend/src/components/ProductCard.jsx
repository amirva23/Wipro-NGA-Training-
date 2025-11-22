import React from "react";

export default function ProductCard({ title, price, discount }) {
  const finalPrice = Number(price) - Number(discount);

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "16px",
    margin: "16px",
    borderRadius: "12px",
    width: "260px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "8px",
    fontWeight: "600"
  };

  const priceStyle = {
    fontSize: "14px",
    margin: "4px 0"
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={priceStyle}>Price: ₹{price}</div>
      <div style={priceStyle}>Discount: ₹{discount}</div>
      <div style={{ fontSize: "16px", marginTop: "8px", fontWeight: "bold" }}>
        Final Price: ₹{finalPrice}
      </div>
    </div>
  );
}
