import './HomePage.css';

export default function HomePage() {
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/team/iv.jpeg)` }}
      >
        <div className="hero-text">
          <h1>Team Flow</h1>
          <h3>Transforming intravenous infusions across the world</h3>
        </div>
      </div>

      <div className="content">
        <p>
          Team Flow is a biomedical engineering project team at the University of Michigan building a low-cost medical device to reduce IV infusion misadministrations with a simple light-based tracking system. Our primary partnerships and affiliations are within the University of Michigan and our community partner hospital, the Komfo Anokye Teaching Hospital in Kumasi, Ghana.
        </p>
        <p>
          We are a diverse group of undergraduate and masters students studying a variety of disciplines across engineering, biological sciences, and business. For more information please reach out at <a href="mailto:mheal-team-flow-leads@umich.edu">mheal-team-flow-leads@umich.edu</a>.
        </p>
      </div>
    </div>
  );
}
