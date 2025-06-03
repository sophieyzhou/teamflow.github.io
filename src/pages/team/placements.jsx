import placements from '../../data/placementsData';
import '../TeamPage.css';

export default function Placements() {
  return (
    <div>
      <h2 className="section-title">Placements</h2>
      <div className="placements-grid">
        {placements.map((placement, index) => (
          <a
            key={index}
            href={placement.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={placement.logo} alt={placement.name} />
          </a>
        ))}
      </div>
    </div>
  );
}
