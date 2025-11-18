import React from "react";

const LayoutToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="mb-2">
      <button
        className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"} me-2`}
        onClick={() => setViewMode("grid")}
      >
        Grid View
      </button>
      <button
        className={`btn ${viewMode === "list" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setViewMode("list")}
      >
        List View
      </button>
    </div>
  );
};

export default LayoutToggle;
