import './TeamPage.css';
import TeamMembers from './team/teamMembers';
import Placements from './team/placements';
import AlumniCarousel from './team/alumniCarousel';

export default function TeamPage() {
  return (
    <div className="team-page">
      <TeamMembers />
      <Placements />
      <AlumniCarousel />
    </div>
  );
}

