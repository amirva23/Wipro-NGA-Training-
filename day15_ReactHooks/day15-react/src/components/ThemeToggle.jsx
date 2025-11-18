import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline-primary">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
