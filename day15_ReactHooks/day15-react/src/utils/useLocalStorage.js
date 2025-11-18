// src/utils/localStorage.js

export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

export const loadTheme = () => {
  return localStorage.getItem("theme") || "light"; // default light
};
