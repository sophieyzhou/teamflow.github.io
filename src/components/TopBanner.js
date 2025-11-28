import './TopBanner.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function TopBanner() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="top-banner">
      <Link className="logo" to="/">
        <img src="/logos/logo.png" alt="Team Flow" />
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-trigger">Background</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/problem-statement">Problem Statement</Link>
              <Link to="/community-partnership">Community Partnership</Link>
              <Link to="/project-history">Project History</Link>
            </div>
          )}
        </div>
        <Link to="/device">Device</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
