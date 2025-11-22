import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ProductCard from "./components/ProductCard";
import LoginForm from "./components/LoginForm";
import UserStatus from "./components/UserStatus";
import WidthDemo from "./components/WidthDemo";
import FormikLogin from "./components/FormikLogin";
import UserDetails from "./components/UserDetails";

function HomePage() {
  return (
    <>
      <div className="component-box">
        <ProductCard title="Shoes" price={2000} discount={500} />
      </div>
      <div className="component-box">
        <LoginForm />
      </div>
      <div className="component-box">
        <UserStatus userId={101} />
      </div>
      <div className="component-box">
        <WidthDemo />
      </div>
      <div className="component-box">
        <FormikLogin />
      </div>
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <h1>Milestone 2 Mock Assessment</h1>

      {/* Show Home UI ONLY on root route (fixes messy layout) */}
      {location.pathname === "/" && <HomePage />}

      {/* User details page */}
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
