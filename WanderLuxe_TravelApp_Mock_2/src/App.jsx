import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Packages from "./routes/Packages.jsx";
import PackageDetails from "./routes/PackageDetails.jsx";
import BookingForm from "./routes/BookingForm.jsx";
import About from "./routes/About.jsx";

import Contact from "./routes/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
