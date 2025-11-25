import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const API_URL = "http://localhost:4000/products";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (err) {
      console.error("Error loading products:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // Add new product via POST
  const addProduct = async (productData) => {
    try {
      setError(null);
      const response = await axios.post(API_URL, productData);
      setProducts((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product");
      throw err;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, fetchProducts, addProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
