import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

const ProductDetail = lazy(() => import("./components/ProductDetail")); // Lazy Loading (Bonus)

function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/products">
            React Product Dashboard
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/new">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<AddProductForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
