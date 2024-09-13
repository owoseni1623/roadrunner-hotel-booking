import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="/image/Hotel logo.jpeg" alt="Hotel Logo" className="logo" />
        <h1 className="app-title">Roadrunner Hotel Booking</h1>
      </div>
      <nav className="nav-links">
        <Link to="/booking/123" className="nav-button book-now">Book Now</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/logout" className="nav-link">Logout</Link>
        <Link to="/profile" className="nav-link user-profile-link">
          <img src="/image/avatar1.jpg" alt="Ganiyat" className="user-avatar" />
          <span className="user-name">Ganiyat</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;