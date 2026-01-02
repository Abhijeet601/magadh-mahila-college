import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { BilingualProvider } from './contexts/BilingualContext';
import Navbar from './components/Navbar';
import SlidingNotice from './components/SlidingNotice';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import AnnualReports from './pages/AnnualReports';

import TermsConditions from './pages/TermsConditions';
import GenericPage from './pages/GenericPage';
import News from './pages/News';
import Events from './pages/Events';
import AntiRagging from './pages/AntiRagging';
import SexualHarassment from './pages/SexualHarassment';
import GrievanceCell from './pages/GrievanceCell';
import Tender from './pages/Tender';

import NEP2020 from './pages/NEP2020';
import IQAC from './pages/IQAC';
import { Toaster } from './components/ui/toaster';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { i18n } = useTranslation();

  return (
    <BilingualProvider>
      <div>
        <Router>
          <ScrollToTop />
          <Navbar />
          <SlidingNotice />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/annual-reports" element={<AnnualReports />} />

            {/* Dedicated pages */}
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/nep-2020" element={<NEP2020 />} />
            <Route path="/iqac" element={<IQAC />} />

            {/* Generic pages for committee/info pages */}
            <Route path="/nirf" element={<GenericPage pageKey="nirf" />} />
            <Route path="/anti-ragging" element={<AntiRagging />} />
            <Route path="/sexual-harassment" element={<SexualHarassment />} />
            <Route path="/grievance" element={<GrievanceCell />} />
            <Route path="/tenders" element={<Tender />} />

            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </div>
    </BilingualProvider>
  );
}

export default App;
