import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import OfflineBanner from "./components/OfflineBanner";
import WorkoutTracker from "./components/WorkoutTracker";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <div className="container my-4">
      <OfflineBanner />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Day 15 — React Advanced Features</h2>
        <ThemeToggle />
      </div>
      <WorkoutTracker />
      <hr />
      <ProductsPage />
    </div>
  );
}
