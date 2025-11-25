import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";

const API_URL = "http://localhost:4000/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Try to get from context first, else GET /products/:id
  useEffect(() => {
    const existing = products.find((p) => p.id === Number(id));
    if (existing) {
      setProduct(existing);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${API_URL}/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error loading product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, products]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2>Product Detail</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h5 className="card-subtitle mb-2 text-muted">
            Category: {product.category}
          </h5>
          <p className="card-text">Price: ₹ {product.price}</p>
          <p className="card-text">Description: {product.description}</p>
          <Link to="/products" className="btn btn-secondary mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
