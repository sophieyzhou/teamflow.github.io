import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import BackgroundPage from './pages/BackgroundPage';
import DevicePage from './pages/DevicePage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <TopBanner />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/background" element={<BackgroundPage />} />
        <Route path="/device" element={<DevicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
