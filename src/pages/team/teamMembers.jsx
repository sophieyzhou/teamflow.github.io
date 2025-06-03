import teamData from '../../data/teamData.json';
import '../TeamPage.css';

export default function TeamMembers() {
  return (
    <div>
      <h2 className="section-title">Our Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <a
            key={index}
            className="team-card"
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={member.headshot} alt={member.name} />
              <div className="team-card-hover">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="team-card-content">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
