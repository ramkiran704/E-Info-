import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages (located in src/Pages/)
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import About from './Pages/About.jsx';
import Registeration from './Pages/Registeration.jsx';
import Profile from './Pages/Profile.jsx';
import Help from './Pages/Help.jsx';

// Subpages (located in src/Subpages/)
import Business from './Subpages/Business.jsx';
import DisabledCitizen from './Subpages/DisabledCitizen.jsx';
import Education from './Subpages/Education.jsx';
import Employment from './Subpages/Employment.jsx';
import Farmers from './Subpages/Farmers.jsx';
import Financial from './Subpages/Financial.jsx';
import Healthcare from './Subpages/Healthcare.jsx';
import Housing from './Subpages/Housing.jsx';
import SeniorCitizen from './Subpages/SeniorCitizen.jsx';
import Students from './Subpages/Students.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />

        {/* Subpage Routes */}
        <Route path="/subpages/business" element={<Business />} />
        <Route path="/subpages/disabled-citizen" element={<DisabledCitizen />} />
        <Route path="/subpages/education" element={<Education />} />
        <Route path="/subpages/employment" element={<Employment />} />
        <Route path="/subpages/farmers" element={<Farmers />} />
        <Route path="/subpages/financial" element={<Financial />} />
        <Route path="/subpages/healthcare" element={<Healthcare />} />
        <Route path="/subpages/housing" element={<Housing />} />
        <Route path="/subpages/senior-citizen" element={<SeniorCitizen />} />
        <Route path="/subpages/students" element={<Students />} />
      </Routes>
    </Router>
  );
}