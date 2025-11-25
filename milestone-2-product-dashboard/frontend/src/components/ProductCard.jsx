import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isFavorite, onToggleFavorite }) => {
  return (
    <div className="col-md-4">
      <div className="card product-card shadow-lg h-100">
        <img src={product.image} alt={product.name} className="card-img-top product-img" />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <h6 className="text-muted mb-2">Category: {product.category}</h6>
          <p className="price-text mb-3">₹ {product.price}</p>

          <div className="mt-auto d-flex justify-content-between">
            <Link to={`/products/${product.id}`} className="btn btn-primary view-btn">
              View Details
            </Link>

            <button
              className={`btn fav-btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => onToggleFavorite(product.id)}
            >
              {isFavorite ? "Unfavorite" : "Favorite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
