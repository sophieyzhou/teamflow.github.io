import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src="/logos/block-m.png" alt="Block M" />
        <img src="/logos/bme.png" alt="Biomedical Engineering" />
        <img src="/logos/lilly.png" alt="Eli Lilly" />
        <img src="/logos/mheal.png" alt="M-HEAL" />
        <img src="/logos/cfe.png" alt="CFE" />
        <img src="/logos/kath.png" alt="Komfo Anokye" />
        <img src="/logos/stryker.jpg" alt="Stryker" />
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>

        <div className="footer-email">
          mheal-team-flow-leads@umich.edu
        </div>
      </div>
    </footer>
  );
}
