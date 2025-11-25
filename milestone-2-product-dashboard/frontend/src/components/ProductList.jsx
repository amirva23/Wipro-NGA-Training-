import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  static contextType = ProductContext;

  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    };
  }

  toggleFavorite = (id) => {
    this.setState((prevState) => ({
      favorites: {
        ...prevState.favorites,
        [id]: !prevState.favorites[id]
      }
    }));
  };

  render() {
    const { products, loading, error } = this.context;
    const { favorites } = this.state;

    if (loading) return <p>Loading products...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
          <h2 className="page-title fw-bold">Product Catalog</h2>

          <Link to="/products/new" className="btn btn-success btn-lg add-btn">
            + Add Product
          </Link>
        </div>

        <div className="row gy-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={!!favorites[product.id]}
              onToggleFavorite={this.toggleFavorite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
