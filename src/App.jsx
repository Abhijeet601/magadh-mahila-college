import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, Suspense } from 'react';
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

// NEP 2020 pages
import ProgramOutcome from './pages/nep2020/ProgramOutcome';
import Humanities from './pages/nep2020/Humanities';
import SocialScience from './pages/nep2020/SocialScience';
import Science from './pages/nep2020/Science';
import FineArts from './pages/nep2020/FineArts';
import VocationalCommerce from './pages/nep2020/VocationalCommerce';
import VocationalComputerApplication from './pages/nep2020/VocationalComputerApplication';
import AcademicInfrastructure from './pages/nep2020/AcademicInfrastructure';
import CourseMaterial from './pages/nep2020/CourseMaterial';
import Library from './pages/nep2020/Library';
import Publications from './pages/nep2020/Publications';
import TimeTable from './pages/nep2020/TimeTable';
import Syllabus from './pages/nep2020/Syllabus';
import SyllabusNEP from './pages/nep2020/SyllabusNEP';

// About pages
import BriefProfile from './pages/about/BriefProfile';
import PrincipalProfile from './pages/about/PrincipalProfile';
import PreviousPrincipals from './pages/about/PreviousPrincipals';
import CollegeEmblem from './pages/about/CollegeEmblem';
import StudentsRollOfHonor from './pages/about/StudentsRollOfHonor';
import CodeOfEthics from './pages/about/CodeOfEthics';
import CodeOfConduct from './pages/about/CodeOfConduct';
import MELC from './pages/about/MELC';
import VisionMission from './pages/about/VisionMission';
import BestPractices from './pages/about/BestPractices';
import FeedbackForms from './pages/about/FeedbackForms';
import EnvironmentalPolicy from './pages/about/EnvironmentalPolicy';
import MOU from './pages/about/MOU';
import FuturePlans from './pages/about/FuturePlans';
import Milestones from './pages/about/Milestones';
import VisitorsNote from './pages/about/VisitorsNote';
import ManagementAdministration from './pages/about/ManagementAdministration';
import MIS from './pages/about/MIS';

// Administration pages
import Cells from './pages/administration/Cells';
import Committees from './pages/administration/Committees';
import IncubationCentre from './pages/administration/IncubationCentre';
import OrganogramOfInstitution from './pages/administration/OrganogramOfInstitution';
import Societies from './pages/administration/Societies';
import StaffCouncil from './pages/administration/StaffCouncil';
import CentresList202021 from './pages/administration/CentresList202021';
import StaffProfile from './pages/administration/StaffProfile';
import TeachingStaffSanctionedPost from './pages/administration/TeachingStaffSanctionedPost';

// Admissions pages
import Courses from './pages/admissions/Courses';
import GeneralInformation from './pages/admissions/GeneralInformation';
import IntakeCapacity from './pages/admissions/IntakeCapacity';
import Eligibility from './pages/admissions/Eligibility';
import FeeStructure from './pages/admissions/FeeStructure';
import UGAdmission from './pages/admissions/UGAdmission';
import PGAdmission from './pages/admissions/PGAdmission';
import ComputerApplicationCourse from './pages/admissions/ComputerApplicationCourse';
import VocationalAdmission from './pages/admissions/VocationalAdmission';
import CommerceAdmission from './pages/admissions/CommerceAdmission';
import BBAAdmission from './pages/admissions/BBAAdmission';
import AdmittedStudentsYearWise from './pages/admissions/AdmittedStudentsYearWise';

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

  if (!i18n.isInitialized) {
    return <div>Loading translations...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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

            {/* NEP 2020 pages */}
            <Route path="/nep2020/program-outcome" element={<ProgramOutcome />} />
            <Route path="/nep2020/humanities" element={<Humanities />} />
            <Route path="/nep2020/social-science" element={<SocialScience />} />
            <Route path="/nep2020/science" element={<Science />} />
            <Route path="/nep2020/fine-arts" element={<FineArts />} />
            <Route path="/nep2020/vocational-commerce" element={<VocationalCommerce />} />
            <Route path="/nep2020/vocational-computer-application" element={<VocationalComputerApplication />} />
            <Route path="/nep2020/academic-infrastructure" element={<AcademicInfrastructure />} />
            <Route path="/nep2020/course-material" element={<CourseMaterial />} />
            <Route path="/nep2020/library" element={<Library />} />
            <Route path="/nep2020/publications" element={<Publications />} />
            <Route path="/nep2020/time-table" element={<TimeTable />} />
            <Route path="/nep2020/syllabus" element={<Syllabus />} />
            <Route path="/nep2020/syllabus-nep" element={<SyllabusNEP />} />

            {/* Generic pages for committee/info pages */}
            <Route path="/nirf" element={<GenericPage pageKey="nirf" />} />
            <Route path="/anti-ragging" element={<AntiRagging />} />
            <Route path="/sexual-harassment" element={<SexualHarassment />} />
            <Route path="/grievance" element={<GrievanceCell />} />
            <Route path="/tenders" element={<Tender />} />

            {/* Administration pages */}
            <Route path="/administration/cells" element={<Cells />} />
            <Route path="/administration/committees" element={<Committees />} />
            <Route path="/administration/incubation-centre" element={<IncubationCentre />} />
            <Route path="/administration/organogram-of-institution" element={<OrganogramOfInstitution />} />
            <Route path="/administration/societies" element={<Societies />} />
            <Route path="/administration/staff-council" element={<StaffCouncil />} />
            <Route path="/administration/centres-list-2020-21" element={<CentresList202021 />} />
            <Route path="/administration/staff-profile" element={<StaffProfile />} />
            <Route path="/administration/teaching-staff-sanctioned-post" element={<TeachingStaffSanctionedPost />} />

            {/* Admissions pages */}
            <Route path="/admissions/courses" element={<Courses />} />
            <Route path="/admissions/general-information" element={<GeneralInformation />} />
            <Route path="/admissions/intake-capacity" element={<IntakeCapacity />} />
            <Route path="/admissions/eligibility" element={<Eligibility />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            <Route path="/admissions/ug-admission" element={<UGAdmission />} />
            <Route path="/admissions/pg-admission" element={<PGAdmission />} />
            <Route path="/admissions/computer-application-course" element={<ComputerApplicationCourse />} />
            <Route path="/admissions/vocational-admission" element={<VocationalAdmission />} />
            <Route path="/admissions/commerce-admission" element={<CommerceAdmission />} />
            <Route path="/admissions/bba-admission" element={<BBAAdmission />} />
            <Route path="/admissions/admitted-students-year-wise" element={<AdmittedStudentsYearWise />} />

            <Route path="/terms-conditions" element={<TermsConditions />} />

            {/* About pages */}
            <Route path="/about/brief-profile" element={<BriefProfile />} />
            <Route path="/about/principal" element={<PrincipalProfile />} />
            <Route path="/about/previous-principals" element={<PreviousPrincipals />} />
            <Route path="/about/emblem" element={<CollegeEmblem />} />
            <Route path="/about/roll-of-honor" element={<StudentsRollOfHonor />} />
            <Route path="/about/code-of-ethics" element={<CodeOfEthics />} />
            <Route path="/about/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/about/melc" element={<MELC />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/best-practices" element={<BestPractices />} />
            <Route path="/about/feedback-forms" element={<FeedbackForms />} />
            <Route path="/about/environment-policy" element={<EnvironmentalPolicy />} />
            <Route path="/about/mou" element={<MOU />} />
            <Route path="/about/future-plans" element={<FuturePlans />} />
            <Route path="/about/milestones" element={<Milestones />} />
            <Route path="/about/visitors-note" element={<VisitorsNote />} />
            <Route path="/about/management-administration" element={<ManagementAdministration />} />
            <Route path="/about/mis" element={<MIS />} />
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </div>
    </BilingualProvider>
    </Suspense>
  );
}

export default App;
