import './TopBanner.css';
import { Link } from 'react-router-dom';

export default function TopBanner() {
  return (
    <div className="top-banner">
      <Link className="logo" to="/">
        <img src="/logos/logo.png" alt="Team Flow" />
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/background">Background</Link>
        <Link to="/device">Device</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
