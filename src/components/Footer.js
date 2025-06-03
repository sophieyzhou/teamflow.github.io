import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-logos">
        <img src="/logos/mheal.png" alt="M-HEAL" />
        <img src="/logos/bme.png" alt="Biomedical Engineering" />
        <img src="/logos/lilly.png" alt="Eli Lilly" />
        <img src="/logos/cfe.png" alt="CFE" />
        <img src="/logos/stryker.jpg" alt="Stryker" />
        <img src="/logos/kath.png" alt="Komfo Anokye" />
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="social-icons">
            <a
              className="instagram"
              href="https://www.instagram.com/teamflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/team/ig.png" alt="Instagram" />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/company/teamflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/team/linkedin.png" alt="LinkedIn" />
            </a>
          </div>

          <a className="footer-email" href="mailto:mheal-team-flow-leads@umich.edu">
            mheal-team-flow-leads@umich.edu
          </a>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} Team Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
