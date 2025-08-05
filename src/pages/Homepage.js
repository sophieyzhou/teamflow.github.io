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
          <h3>Transforming intravenous infusions <br /> across the world</h3>
        </div>
      </div>

      <div className="quote-highlight">
        <div className="quote-highlight-inner">
          For 80% of the world's population, medical outcomes are not dictated by what technology exists, but rather, by what technology is accessible and financially feasible.
        </div>
      </div>

      <div className="content">

        <p>
          In hospitals across low to middle income countries, IV infusions are manually administered and untracked.
          These practices are both time consuming and error prone, compromising patients' outcomes and quality of 
          care. 
          
          Team Flow’s mission is to design, develop, and validate a low-cost, user-centered 
          IV infusion rate monitor, leveraging close collaboration with local clinicians, iterative prototyping, 
          and sustainable engineering practices to promote global health equity by reducing strain on practitioners and 
          improving patient outcomes in under resourced medical settings. Through our work, we provide team members 
          with real-world, cross-functional, product development experience, teaching human centered design, global 
          health research, and problem solving skills necessary to drive innovation. 
          For more information please reach out at 
          <a href="mailto:mheal-team-flow-leads@umich.edu">mheal-team-flow-leads@umich.edu</a>.
        </p>
        
      </div>
    </div>
  );
}
