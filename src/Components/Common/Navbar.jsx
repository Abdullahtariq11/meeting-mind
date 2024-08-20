import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLogin, setLogin] = useState(true);
  return (
    <header className="header-section">
      {isLogin ? (
        <div className="header-content">
          <div className="logo">
            <img src="/path-to-logo/logo.png" alt="MeetingMind Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li>Dashboard</li>
              <li>Upload Meeting</li>
              <li>Action Item</li>
              <li>Settings</li>
            </ul>
          </nav>
          <div className="cta-button">
            <button>Logout</button>
          </div>
        </div>
      ) : (
        <>
          <nav className="navigation">
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </nav>
          <div className="cta-button">
            <button>Get Started</button>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
