import './TopBanner.css';

export default function TopBanner() {
  return (
    <div className="top-banner">
      <a className="logo" href="/">
        <img src="/logos/logo.png" alt="Team Flow" />
        <span>Team Flow</span>
      </a>
      <nav className="nav-links">
        <a href="/about">About Us</a>
        <a href="/background">Background</a>
        <a href="/device">Our Device</a>
        <a href="/team">Our Team</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </div>
  );
}
