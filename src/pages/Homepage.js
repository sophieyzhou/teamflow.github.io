import './HomePage.css';

export default function HomePage() {
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/team/iv.jpeg)` }}
        // hero link source: https://www.wvxu.org/health/2024-10-31/hospitals-iv-fluid-shortage
      >
        <div className="hero-text">
          <h1>Team Flow</h1>
          <h3>Transforming intravenous infusions <br></br> across the world</h3>
        </div>
      </div>

      <div className="content">
        <p>
          Team Flow’s primary mission is to design, develop, and validate a low-cost, user-centered IV infusion rate monitor, through close collaboration with local clinicians, iterative prototyping, and sustainable engineering practices. We aim to promote global health equity by reducing strain on practitioners and improving patient outcomes in under-resourced medical settings. 

        </p>
        <p>
          Through our work, we provide team members with real-world product development experience, with an emphasis on human centered design. We teach research and problem solving skills necessary to drive innovation in the context of global health. 
        </p>
        
      </div>
    </div>
  );
}
