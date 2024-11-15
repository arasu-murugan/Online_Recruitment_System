import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="main-heading">Online Recruitment System</h1>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/job-list">Job Listings</Link></li>
          <li><Link to="/job-application">Job Application</Link></li>
          <li><Link to="/contacts">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/admin-login">Admin Login</Link></li> {/* Added Admin Login link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
