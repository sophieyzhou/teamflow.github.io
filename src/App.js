import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import ProblemStatementPage from './pages/ProblemStatementPage';
import CommunityPartnershipPage from './pages/CommunityPartnershipPage';
import ProjectHistoryPage from './pages/ProjectHistoryPage';
import DevicePage from './pages/DevicePage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <TopBanner />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problem-statement" element={<ProblemStatementPage />} />
        <Route path="/community-partnership" element={<CommunityPartnershipPage />} />
        <Route path="/project-history" element={<ProjectHistoryPage />} />
        <Route path="/device" element={<DevicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
