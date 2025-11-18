import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
