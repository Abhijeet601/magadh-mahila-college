import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Info, Building, Shield, UserCheck, BookOpen, GraduationCap, Home, Phone, TrendingUp, Users, Bell, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useBilingual } from '../contexts/BilingualContext';
import { motion, AnimatePresence } from 'framer-motion';
import Notifications from './Notifications';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');

  const { theme, setTheme } = useTheme();
  const { isBilingual, toggleBilingual } = useBilingual();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [nepDropdownOpen, setNepDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const [iqacDropdownOpen, setIqacDropdownOpen] = useState(false);
  const [cellsDropdownOpen, setCellsDropdownOpen] = useState(false);


  // Mobile collapsible states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const [mobileNepOpen, setMobileNepOpen] = useState(false);
  const [mobileAdminOpen, setMobileAdminOpen] = useState(false);
  const [mobileIqacOpen, setMobileIqacOpen] = useState(false);
  const [mobileCellsOpen, setMobileCellsOpen] = useState(false);


  const aboutDropdownRef = useRef(null);
  const adminDropdownRef = useRef(null);
  const nepDropdownRef = useRef(null);
  const admissionsDropdownRef = useRef(null);
  const iqacDropdownRef = useRef(null);
  const cellsDropdownRef = useRef(null);


  const adminCloseTimeoutRef = useRef(null);
  const aboutCloseTimeoutRef = useRef(null);
  const iqacCloseTimeoutRef = useRef(null);
  const admissionsCloseTimeoutRef = useRef(null);
  const nepCloseTimeoutRef = useRef(null);
  const cellsCloseTimeoutRef = useRef(null);

  // Function to close all dropdowns instantly
  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setAdminDropdownOpen(false);
    setNepDropdownOpen(false);
    setAdmissionsDropdownOpen(false);
    setIqacDropdownOpen(false);
    setCellsDropdownOpen(false);
  };

  // Scroll detection for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutItems = [
    { label: t('nav.aboutSub.welcome'), to: "/about/brief-profile" },
    { label: t('nav.aboutSub.principalProfile'), to: "/about/principal" },
    { label: t('nav.aboutSub.previousPrincipals'), to: "/about/previous-principals" },
    { label: t('nav.aboutSub.collegeEmblem'), to: "/about/emblem" },
    { label: t('nav.aboutSub.studentsRollOfHonor'), to: "/about/roll-of-honor" },
    { label: t('nav.aboutSub.codeOfEthics'), to: "/about/code-of-ethics" },
    { label: t('nav.aboutSub.codeOfConduct'), to: "/about/code-of-conduct" },
    { label: t('nav.aboutSub.instituteDistinctiveness.title'), to: "/about/institute-distinctiveness" },
    { label: t('nav.aboutSub.institutionsPride'), to: "/about/institutions-pride" },
    { label: t('nav.aboutSub.modelElectoralLiteracyClub'), to: "/about/melc" },
    { label: t('nav.aboutSub.visionMissionCoreValues'), to: "/about/vision-mission" },
    { label: t('nav.aboutSub.bestPractices'), to: "/about/best-practices" },
    { label: t('nav.aboutSub.feedback'), to: "/about/feedback-forms" },
    { label: t('nav.aboutSub.environmentalPolicy'), to: "/about/environment-policy" },
    { label: t('nav.aboutSub.mou'), to: "/about/mou" },
    { label: t('nav.aboutSub.futurePlans'), to: "/about/future-plans" },
    { label: t('nav.aboutSub.milestones'), to: "/about/milestones" },
    { label: t('nav.aboutSub.visitorsNote'), to: "/about/visitors-note" },
    { label: t('nav.aboutSub.managementAdministration'), to: "/about/management-administration" },
    { label: t('nav.aboutSub.infrastructureMaintenance'), to: "/about/infrastructure-maintenance" },
    { label: t('nav.aboutSub.mis'), to: "/about/mis" },
  ];

  const nepItems = [
    { label: t('nav.nep2020Sub.academicInfrastructure'), to: "/nep2020/academic-infrastructure" },
    { label: t('nav.nep2020Sub.courseMaterial'), to: "/nep2020/course-material" },
    { label: t('nav.nep2020Sub.fineArts'), to: "/nep2020/fine-arts" },
    { label: t('nav.nep2020Sub.humanities'), to: "/nep2020/humanities" },
    { label: t('nav.nep2020Sub.library'), to: "/nep2020/library" },
    { label: t('nav.nep2020Sub.programOutcome.title'), to: "/nep2020/program-outcome" },
    { label: t('nav.nep2020Sub.publications'), to: "/nep2020/publications" },
    { label: t('nav.nep2020Sub.science'), to: "/nep2020/science" },
    { label: t('nav.nep2020Sub.socialScience'), to: "/nep2020/social-science" },
    { label: t('nav.nep2020Sub.syllabus'), to: "/nep2020/syllabus" },
    { label: t('nav.nep2020Sub.syllabusNEP'), to: "/nep2020/syllabus-nep" },
    { label: t('nav.nep2020Sub.timeTable'), to: "/nep2020/time-table" },
    { label: t('nav.nep2020Sub.vocationalCommerce'), to: "/nep2020/vocational-commerce" },
    { label: t('nav.nep2020Sub.vocationalComputerApplication'), to: "/nep2020/vocational-computer-application" },
  ];

  const admissionsItems = [
    { label: t('nav.admissionsSub.courses'), to: "/admissions/courses" },
    { label: t('nav.admissionsSub.generalInformation'), to: "/admissions/general-information" },
    { label: t('nav.admissionsSub.intakeCapacity'), to: "/admissions/intake-capacity" },
    { label: t('nav.admissionsSub.eligibility'), to: "/admissions/eligibility" },
    { label: t('nav.admissionsSub.feeStructure'), to: "/admissions/fee-structure" },
    { label: t('nav.admissionsSub.ugAdmission'), to: "/admissions/ug-admission" },
    { label: t('nav.admissionsSub.pgAdmission'), to: "/admissions/pg-admission" },
    { label: t('nav.admissionsSub.computerApplicationCourse'), to: "/admissions/computer-application-course" },
    { label: t('nav.admissionsSub.vocationalAdmission'), to: "/admissions/vocational-admission" },
    { label: t('nav.admissionsSub.commerceAdmission'), to: "/admissions/commerce-admission" },
    { label: t('nav.admissionsSub.bbaAdmission'), to: "/admissions/bba-admission" },
    { label: t('nav.admissionsSub.admittedStudentsYearWise'), to: "/admissions/admitted-students-year-wise" },
  ];

  const iqacItems = [
    { label: 'Workshop', to: '/iqac/workshop' },
    { label: 'NAAC', to: '/iqac/naac' },
    { label: 'Feedback', to: '/iqac/feedback' },
    { label: 'Research', to: '/iqac/research' },
    { label: 'Extension Activities (NSS, NCC)', to: '/iqac/extension-activities' },
    { label: 'Collaboration', to: '/iqac/collaboration' },
    { label: 'Student Progression Form', to: '/iqac/student-progression-form' },
    { label: 'Student Satisfaction Survey', to: '/iqac/student-satisfaction-survey' },
    { label: 'Project Internship & Field Work', to: '/iqac/project-internship-fieldwork' },
    { label: 'Best practices 2023-24', to: '/iqac/best-practices-2023-24' },
    { label: 'Best Practices – Photo Gallery', to: '/iqac/best-practices-photo-gallery' },
  ];

  const linksLeft = [];

  const linksRight = [
    { to: '/campus-life', label: 'Campus Life' },
    { to: '/contact', label: 'Contact' },
    { to: '/nirf', label: 'NIRF' },
    { to: '/academics', label: 'Academics' },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
        setAdminDropdownOpen(false);
      }
      if (nepDropdownRef.current && !nepDropdownRef.current.contains(event.target)) {
        setNepDropdownOpen(false);
      }
      if (admissionsDropdownRef.current && !admissionsDropdownRef.current.contains(event.target)) {
        setAdmissionsDropdownOpen(false);
      }
      if (iqacDropdownRef.current && !iqacDropdownRef.current.contains(event.target)) {
        setIqacDropdownOpen(false);
      }

    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      className="relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >


      {/* ========== TOP BAR ========== */}
      <div className="bg-primary text-primary-foreground text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center uppercase relative z-10">
          <div className="flex gap-6">
            <Link to="/" className="nav-link hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Home className="w-4 h-4" />
              {t('nav.home')}
            </Link>
            <Link to="/notifications" className="nav-link hover:text-white transition-colors duration-300 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <Bell className="w-4 h-4" />
              </motion.div>
              {t('nav.notifications')}
            </Link>
            <Link to="/tenders" className="nav-link hover:text-white transition-colors duration-300 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('nav.tenders')}
            </Link>
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            {/* Language selector */}
            <div className="flex items-center gap-2 text-white text-xs">
              <span className="font-medium">Language</span>
              <div className="flex items-center bg-white/10 rounded-md p-0.5 backdrop-blur-sm">
                <button
                  onClick={() => {
                    i18n.changeLanguage('en');
                    if (isBilingual) toggleBilingual();
                  }}
                  className={`lang-button px-2.5 py-1 text-xs rounded-sm ${
                    i18n.language?.startsWith('en') 
                      ? 'bg-white/20 font-semibold shadow-sm' 
                      : 'opacity-90 hover:bg-white/10'
                  }`}
                  aria-pressed={i18n.language?.startsWith('en')}
                >
                  EN
                </button>
                <span className="px-1 text-white/40">|</span>
                <button
                  onClick={() => {
                    i18n.changeLanguage('hi');
                    if (!isBilingual) toggleBilingual();
                  }}
                  className={`lang-button px-2.5 py-1 text-xs rounded-sm ${
                    i18n.language?.startsWith('hi') 
                      ? 'bg-white/20 font-semibold shadow-sm' 
                      : 'opacity-90 hover:bg-white/10'
                  }`}
                  aria-pressed={i18n.language?.startsWith('hi')}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* Theme selector */}
            <div className="flex items-center gap-2 text-white text-xs">
              <span className="font-medium">Theme</span>
              <div className="flex items-center bg-white/10 rounded-md p-0.5 backdrop-blur-sm">
                <button
                  onClick={() => setTheme('blue')}
                  className={`theme-button flex items-center px-2.5 py-1 text-xs rounded-sm ${
                    theme === 'blue' 
                      ? 'bg-white/20 font-semibold shadow-sm' 
                      : 'opacity-90 hover:bg-white/10'
                  }`}
                  aria-pressed={theme === 'blue'}
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
                  Blue
                </button>
                <span className="px-1 text-white/40">|</span>
                <button
                  onClick={() => setTheme('maroon')}
                  className={`theme-button flex items-center px-2.5 py-1 text-xs rounded-sm ${
                    theme === 'maroon' 
                      ? 'bg-white/20 font-semibold shadow-sm' 
                      : 'opacity-90 hover:bg-white/10'
                  }`}
                  aria-pressed={theme === 'maroon'}
                >
                  <span className="inline-block w-2 h-2 bg-red-800 rounded-full mr-1.5"></span>
                  Maroon
                </button>
              </div>
            </div>

            <Notifications />
          </div>
        </div>
      </div>

      {/* ========== MAIN NAV ========== */}
      <div className={`bg-white border-b transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center relative">

          {/* LEFT NAVIGATION */}
          <nav className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 uppercase text-xs pr-8 lg:pr-56 items-center">
            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={() => {
                if (aboutCloseTimeoutRef.current) {
                  clearTimeout(aboutCloseTimeoutRef.current);
                  aboutCloseTimeoutRef.current = null;
                }
                closeAllDropdowns();
                setAboutDropdownOpen(true);
              }}
              onMouseLeave={() => {
                aboutCloseTimeoutRef.current = setTimeout(() => {
                  setAboutDropdownOpen(false);
                }, 800);
              }}
            >
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="nav-link hover:text-primary flex items-center font-medium tracking-wide"
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <Info className="w-4 h-4 mr-2" />
                </motion.div>
                {t('nav.about')}
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden"
                    style={{ width: 'min(520px, 80vw)', maxHeight: '70vh' }}
                  >
                    {aboutItems.map((item, index) => (
                      <motion.div
                        key={`${item.to}-${index}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ADMIN DROPDOWN */}
            <div
              className="relative"
              ref={adminDropdownRef}
              onMouseEnter={() => {
                if (adminCloseTimeoutRef.current) {
                  clearTimeout(adminCloseTimeoutRef.current);
                  adminCloseTimeoutRef.current = null;
                }
                closeAllDropdowns();
                setAdminDropdownOpen(true);
              }}
              onMouseLeave={() => {
                adminCloseTimeoutRef.current = setTimeout(() => {
                  setAdminDropdownOpen(false);
                }, 800);
              }}
            >
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              {/* Invisible hover area to keep dropdown open when hovering over Cells subdropdown */}
              <div className="absolute top-0 left-full ml-1 w-[250px] h-[400px] opacity-0 pointer-events-none" />
              <button
                onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
                className="nav-link hover:text-primary flex items-center font-medium tracking-wide"
              >
                <Building className="w-4 h-4 mr-2" />
                Administration
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${adminDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {adminDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden"
                    style={{ width: 'min(420px, 80vw)', maxHeight: '70vh' }}
                  >
                    {/* Cells */}
                    <div
                      className="relative"
                      ref={cellsDropdownRef}
                      onMouseEnter={() => {
                        if (cellsCloseTimeoutRef.current) {
                          clearTimeout(cellsCloseTimeoutRef.current);
                          cellsCloseTimeoutRef.current = null;
                        }
                        setCellsDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        cellsCloseTimeoutRef.current = setTimeout(() => {
                          setCellsDropdownOpen(false);
                        }, 800);
                      }}
                    >
                      {/* Invisible hover area to keep dropdown open */}
                      <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
                      <div className="absolute top-full left-0 mt-2 w-[200px] h-[200px] opacity-0 pointer-events-none" />
                      <button
                        className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out w-full text-left flex items-center justify-between"
                      >
                        Cells
                        <ChevronDown
                          className={`ml-1 transition-transform duration-300 ${cellsDropdownOpen ? 'rotate-180' : ''}`}
                          size={14}
                        />
                      </button>

                      <AnimatePresence>
                        {cellsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.4, 0, 0.2, 1],
                              staggerChildren: 0.05,
                              delayChildren: 0.1
                            }}
                            className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000] overflow-y-auto overflow-x-hidden"
                            style={{ width: 'min(200px, 80vw)', maxHeight: '70vh' }}
                          >
                            {[
                              { to: "/administration/cells/2023-2024", label: "Cells 2023–2024" },
                              { to: "/administration/cells/2024-2025", label: "Cells 2024–2025" },
                              { to: "/administration/cells/2025-2026", label: "Cells 2025–2026" }
                            ].map((item, index) => (
                              <motion.div
                                key={item.to}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: index * 0.03,
                                  ease: [0.4, 0, 0.2, 1]
                                }}
                              >
                                <Link
                                  to={item.to}
                                  className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
                                >
                                  <motion.span
                                    className="relative z-10"
                                    whileHover={{
                                      scale: 1.02,
                                      transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    {item.label}
                                  </motion.span>
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    initial={false}
                                    whileHover={{
                                      x: [0, 100, 0],
                                      transition: {
                                        duration: 0.6,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 2
                                      }
                                    }}
                                  />
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {[
                      { to: "/anti-ragging", label: "Anti-Ragging Committee" },
                      { to: "/sexual-harassment", label: "Sexual Harassment Committee" },
                      { to: "/grievance", label: "Grievance Cell" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: (index + 1) * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}



                    {[
                      { to: "/administration/committees", label: "Committees" },
                      { to: "/administration/incubation-centre", label: "Incubation Centre" },
                      { to: "/administration/organogram-of-institution", label: "Organogram of Institution" },
                      { to: "/administration/societies", label: "Societies" },
                      { to: "/administration/staff-council", label: "Staff Council" },
                      { to: "/administration/centres-list-2020-21", label: "Centres List 2020-21" },
                      { to: "/administration/staff-profile", label: "Staff Profile" },
                      { to: "/administration/teaching-staff-sanctioned-post", label: "Teaching Staff Sanctioned Post" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: (index + 5) * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* IQAC DROPDOWN */}
            <div
              className="relative"
              ref={iqacDropdownRef}
              onMouseEnter={() => {
                closeAllDropdowns();
                setIqacDropdownOpen(true);
              }}
              onMouseLeave={() => setIqacDropdownOpen(false)}
            >
              <button
                onClick={() => setIqacDropdownOpen(!iqacDropdownOpen)}
                className="nav-link hover:text-primary flex items-center font-medium tracking-wide"
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <Shield className="w-4 h-4 mr-2" />
                </motion.div>
                IQAC
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${iqacDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {iqacDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden"
                    style={{ width: 'min(420px, 80vw)', maxHeight: '70vh' }}
                  >
                    {iqacItems.map((item, index) => (
                      <motion.div
                        key={`${item.to}-${index}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ADMISSIONS DROPDOWN */}
            <div
              className="relative"
              ref={admissionsDropdownRef}
              onMouseEnter={() => {
                if (admissionsCloseTimeoutRef.current) {
                  clearTimeout(admissionsCloseTimeoutRef.current);
                  admissionsCloseTimeoutRef.current = null;
                }
                closeAllDropdowns();
                setAdmissionsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                admissionsCloseTimeoutRef.current = setTimeout(() => {
                  setAdmissionsDropdownOpen(false);
                }, 800);
              }}
            >
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button
                onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)}
                className="nav-link hover:text-primary flex items-center font-medium tracking-wide"
              >
                <Users className="w-4 h-4 mr-2" />
                {t('nav.admissions')}
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${admissionsDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {admissionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden"
                    style={{ width: 'min(420px, 80vw)', maxHeight: '70vh' }}
                  >
                    {admissionsItems.map((item, index) => (
                      <motion.div
                        key={`${item.to}-${index}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NEP 2020 DROPDOWN */}
            <div
              className="relative"
              ref={nepDropdownRef}
              onMouseEnter={() => {
                if (nepCloseTimeoutRef.current) {
                  clearTimeout(nepCloseTimeoutRef.current);
                  nepCloseTimeoutRef.current = null;
                }
                setNepDropdownOpen(true);
              }}
              onMouseLeave={() => {
                nepCloseTimeoutRef.current = setTimeout(() => {
                  setNepDropdownOpen(false);
                }, 800);
              }}
            >
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button
                onClick={() => setNepDropdownOpen(!nepDropdownOpen)}
                className="nav-link hover:text-primary flex items-center font-medium tracking-wide"
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <BookOpen className="w-4 h-4 mr-2" />
                </motion.div>
                NEP 2020
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${nepDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {nepDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }}
                    className="absolute top-full left-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden"
                    style={{ width: 'min(420px, 80vw)', maxHeight: '60vh' }}
                  >
                    {nepItems.map((item, index) => (
                      <motion.div
                        key={`${item.to}-${index}`}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          to={item.to}
                          className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                            whileHover={{
                              x: [0, 100, 0],
                              transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                              }
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AICTE LINK */}
            <Link to="/aicte" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              AICTE
            </Link>

          </nav>

          {/* RIGHT NAVIGATION */}
          <div className="hidden md:flex gap-8 uppercase text-xs pl-8 lg:pl-48 items-center">
            {linksRight.map(l => {
              let icon;
              switch (l.to) {
                case '/aicte':
                  icon = <Shield className="w-4 h-4 mr-2" />;
                  break;
                case '/campus-life':
                  icon = <Home className="w-4 h-4 mr-2" />;
                  break;
                case '/contact':
                  icon = <Phone className="w-4 h-4 mr-2" />;
                  break;
                case '/nirf':
                  icon = <TrendingUp className="w-4 h-4 mr-2" />;
                  break;
                case '/academics':
                  icon = <GraduationCap className="w-4 h-4 mr-2" />;
                  break;
                default:
                  icon = null;
              }
              return (
                <Link key={l.to} to={l.to} className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
                  {icon}
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden mobile-toggle p-2 hover:bg-gray-100 rounded-lg" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-b mobile-menu-enter shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="block uppercase text-xs py-3 hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>Home</Link>

            {/* About Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-bold text-primary mb-2 py-2 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <Info className="w-4 h-4 mr-2" />
                <span>About</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {mobileAboutOpen && (
                <div className="space-y-1 bg-gray-50 rounded-lg p-2">
                  {aboutItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Administration Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAdminOpen(!mobileAdminOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-bold text-primary mb-2 py-2 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <Building className="w-4 h-4 mr-2" />
                <span>Administration</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${mobileAdminOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {mobileAdminOpen && (
                <div className="space-y-1 bg-gray-50 rounded-lg p-2">
                  {/* Cells Submenu */}
                  <div className="pl-2">
                    <button
                      onClick={() => setMobileCellsOpen(!mobileCellsOpen)}
                      className="flex items-center justify-between w-full uppercase text-xs font-semibold mb-1 py-3 hover:text-primary transition-colors"
                    >
                      <span>Cells</span>
                      <ChevronDown
                        className={`transition-transform duration-300 ${mobileCellsOpen ? 'rotate-180' : ''}`}
                        size={14}
                      />
                    </button>
                    {mobileCellsOpen && (
                      <div className="space-y-1 bg-white rounded p-2 ml-2">
                        <Link to="/administration/cells/2023-2024" onClick={() => setOpen(false)} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">
                          Cells 2023–2024
                        </Link>
                        <Link to="/administration/cells/2024-2025" onClick={() => setOpen(false)} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">
                          Cells 2024–2025
                        </Link>
                        <Link to="/administration/cells/2025-2026" onClick={() => setOpen(false)} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">
                          Cells 2025–2026
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link to="/anti-ragging" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Anti-Ragging Committee</Link>
                  <Link to="/sexual-harassment" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Sexual Harassment Committee</Link>
                  <Link to="/grievance" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Grievance Cell</Link>

                  <Link to="/administration/committees" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Committees</Link>
                  <Link to="/administration/incubation-centre" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Incubation Centre</Link>
                  <Link to="/administration/organogram-of-institution" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Organogram of Institution</Link>
                  <Link to="/administration/societies" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Societies</Link>
                  <Link to="/administration/staff-council" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Staff Council</Link>
                  <Link to="/administration/centres-list-2020-21" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Centres List 2020-21</Link>
                  <Link to="/administration/staff-profile" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Staff Profile</Link>
                  <Link to="/administration/teaching-staff-sanctioned-post" onClick={() => setOpen(false)} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">Teaching Staff Sanctioned Post</Link>
                </div>
              )}
            </div>

            {/* IQAC Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileIqacOpen(!mobileIqacOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-bold text-primary mb-2 py-2 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <Shield className="w-4 h-4 mr-2" />
                <span>IQAC</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${mobileIqacOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {mobileIqacOpen && (
                <div className="space-y-1 bg-gray-50 rounded-lg p-2">
                  {iqacItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Admissions Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAdmissionsOpen(!mobileAdmissionsOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-bold text-primary mb-2 py-2 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                <span>Admissions</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${mobileAdmissionsOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {mobileAdmissionsOpen && (
                <div className="space-y-1 bg-gray-50 rounded-lg p-2">
                  {admissionsItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* NEP 2020 Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileNepOpen(!mobileNepOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-bold text-primary mb-2 py-2 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                <span>NEP 2020</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${mobileNepOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {mobileNepOpen && (
                <div className="space-y-1 bg-gray-50 rounded-lg p-2">
                  {nepItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AICTE Link */}
            <div className="pt-4 border-t border-gray-200">
              <Link to="/aicte" onClick={() => setOpen(false)} className="flex items-center uppercase text-xs font-bold text-primary py-2 hover:bg-gray-50 px-2 rounded transition-colors">
                <Shield className="w-4 h-4 mr-2" />
                AICTE
              </Link>
            </div>

            {/* Right Links */}
            <div className="pt-4 border-t border-gray-200">
              {linksRight.map(l => (
                <Link key={l.to} to={l.to} className="block uppercase text-xs py-2 hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========== SVG SHIELD LOGO ========== */}
      <Link
        to="/"
        aria-label="Magadh Mahila College home"
        className="logo-container hidden lg:block absolute left-[48%] -translate-x-1/2 top-0 z-50"
      >
        <div className="relative w-44 md:w-60 lg:w-[380px]">
          <svg viewBox="0 0 400 140" className="w-full h-auto drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M0 0 H400 V70 C300 140 100 140 0 70 Z"
              fill="url(#shieldGradient)"
            />
            <path
              d="M0 0 H400 V70 C300 140 100 140 0 70 Z"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center gap-3 px-6 pt-0">
            <img
              src="/Magadh_Mahila_College.png"
              alt="Magadh Mahila College Logo"
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="text-left leading-tight">
              <h1 className="font-serif font-bold text-primary">
                <span className="block text-sm md:text-base font-semibold text-primary">
                  {tHi('hero.title')}
                </span>
                <span className="block text-sm md:text-base font-semibold text-primary">
                  {tEn('hero.title')}
                </span>
              </h1>
              <p className="text-xs text-gray-600 font-medium mt-0.5">Patna University</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.header>
  );
};

export default Navbar;