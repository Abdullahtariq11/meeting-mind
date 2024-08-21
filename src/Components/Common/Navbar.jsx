import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
              <li>
                <Link to="/DashboardPage" className="Link">Dashboard</Link>
              </li>
              <li>
                <Link to="/UploadMeetingPage" className="Link">Upload Meeting</Link>
              </li>
              <li>
                <Link to="/ActionItemPage" className="Link">Action Items</Link>
              </li>
              <li>
                <Link to="/SettingPage" className="Link">Settings</Link>
              </li>
            </ul>
          </nav>
          <div className="cta-button">
            <button >Logout</button>
          </div>
        </div>
      ) : (
        <>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/" className="Link">Home</Link>
              </li>
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