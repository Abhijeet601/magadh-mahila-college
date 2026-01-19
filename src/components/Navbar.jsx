import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useBilingual } from '../contexts/BilingualContext';
import Notifications from './Notifications';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');

  const { theme, setTheme } = useTheme();
  const { isBilingual, toggleBilingual } = useBilingual();

  const [open, setOpen] = useState(false);

  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [nepDropdownOpen, setNepDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);

  // Mobile collapsible states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const [mobileNepOpen, setMobileNepOpen] = useState(false);
  const [mobileAdminOpen, setMobileAdminOpen] = useState(false);

  const aboutDropdownRef = useRef(null);
  const adminDropdownRef = useRef(null);
  const nepDropdownRef = useRef(null);
  const admissionsDropdownRef = useRef(null);

  const aboutItems = [
    { label: t('nav.aboutSub.welcome'), to: "/about/brief-profile" },
    { label: t('nav.aboutSub.principalProfile'), to: "/about/principal" },
    { label: t('nav.aboutSub.previousPrincipals'), to: "/about/previous-principals" },
    { label: t('nav.aboutSub.collegeEmblem'), to: "/about/emblem" },
    { label: t('nav.aboutSub.studentsRollOfHonor'), to: "/about/roll-of-honor" },
    { label: t('nav.aboutSub.codeOfEthics'), to: "/about/code-of-ethics" },
    { label: t('nav.aboutSub.codeOfConduct'), to: "/about/code-of-conduct" },
    { label: t('nav.aboutSub.instituteDistinctiveness'), to: "/about/institute-distinctiveness" },
    { label: t('nav.aboutSub.institutionsPride'), to: "/about/melc" },
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

  // ✅ UPDATED NEP 2020 DROPDOWN ITEMS (as per your screenshot)
  // NOTE: If your routes are different (like /nep2020/FineArts), just change the "to" values accordingly.
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

  const linksLeft = [
    { to: '/academics', label: 'Academics' },
  ];

  const linksRight = [
    { to: '/nirf', label: 'NIRF' },
    { to: '/campus-life', label: 'Campus Life' },
    { to: '/contact', label: 'Contact' },
  ];

  // ✅ Close dropdowns on outside click
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
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative z-50">

      {/* ========== TOP BAR ========== */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center uppercase">
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white/80">{t('nav.home')}</Link>
            <Link to="/notifications" className="hover:text-white/80">{t('nav.notifications')}</Link>
            <Link to="/tenders" className="hover:text-white/80">{t('nav.tenders')}</Link>
          </div>

          <div className="flex gap-4 items-center flex-wrap">

            {/* ✅ Language selector (Fixed: setBilingual removed) */}
            <div className="flex items-center gap-2 text-white text-xs">
              <span className="font-medium">Language</span>
              <div className="flex items-center bg-white/10 rounded p-0.5">
                <button
                  onClick={() => {
                    i18n.changeLanguage('en');
                    if (isBilingual) toggleBilingual();
                  }}
                  className={`px-2 py-0.5 text-xs ${i18n.language?.startsWith('en') ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={i18n.language?.startsWith('en')}
                >
                  EN
                </button>
                <span className="px-1 text-white/60">|</span>
                <button
                  onClick={() => {
                    i18n.changeLanguage('hi');
                    if (!isBilingual) toggleBilingual();
                  }}
                  className={`px-2 py-0.5 text-xs ${i18n.language?.startsWith('hi') ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={i18n.language?.startsWith('hi')}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* Theme selector */}
            <div className="flex items-center gap-2 text-white text-xs">
              <span className="font-medium">Theme</span>
              <div className="flex items-center bg-white/10 rounded p-0.5">
                <button
                  onClick={() => setTheme('blue')}
                  className={`flex items-center px-2 py-0.5 text-xs hover:opacity-80 transition-opacity ${theme === 'blue' ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={theme === 'blue'}
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  Blue
                </button>
                <span className="px-1 text-white/60">|</span>
                <button
                  onClick={() => setTheme('maroon')}
                  className={`flex items-center px-2 py-0.5 text-xs hover:opacity-80 transition-opacity ${theme === 'maroon' ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={theme === 'maroon'}
                >
                  <span className="inline-block w-2 h-2 bg-red-800 rounded-full mr-1"></span>
                  Maroon
                </button>
              </div>
            </div>

            <Notifications />
          </div>
        </div>
      </div>

      {/* ========== MAIN NAV ========== */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center relative">

          {/* LEFT */}
          <nav className="hidden md:flex gap-8 uppercase text-xs pr-56">
            {/* ✅ ABOUT DROPDOWN (Fixed: scrollable, max height, width) */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => setAboutDropdownOpen(v => !v)}
                className="hover:text-primary flex items-center"
              >
                {t('nav.about')}
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <div
                className={`
                  absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg
                  z-[999] overflow-y-auto overflow-x-hidden
                  transition-all duration-300 ease-in-out
                  ${aboutDropdownOpen ? 'opacity-100 max-h-[70vh] pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'}
                `}
                style={{ width: 'min(520px, 80vw)' }}
              >
                {aboutItems.map((item, index) => (
                  <Link
                    key={`${item.to}-${index}`}
                    to={item.to}
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 text-xs uppercase hover:bg-gray-100 whitespace-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {linksLeft.map(l => (
              <Link key={l.to} to={l.to} className="hover:text-primary">
                {l.label}
              </Link>
            ))}

            {/* ✅ ADMISSIONS DROPDOWN */}
            <div className="relative" ref={admissionsDropdownRef}>
              <button
                onClick={() => setAdmissionsDropdownOpen(v => !v)}
                className="hover:text-primary flex items-center"
              >
                {t('nav.admissions')}
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${admissionsDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <div
                className={`
                  absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg
                  z-[999] overflow-y-auto overflow-x-hidden
                  transition-all duration-300 ease-in-out
                  ${admissionsDropdownOpen ? 'opacity-100 max-h-[70vh] pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'}
                `}
                style={{ width: 'min(420px, 80vw)' }}
              >
                {admissionsItems.map((item, index) => (
                  <Link
                    key={`${item.to}-${index}`}
                    to={item.to}
                    onClick={() => setAdmissionsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs uppercase hover:bg-gray-100 whitespace-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ✅ NEP 2020 DROPDOWN (UPDATED ITEMS) */}
            <div className="relative" ref={nepDropdownRef}>
              <button
                onClick={() => setNepDropdownOpen(v => !v)}
                className="hover:text-primary flex items-center"
              >
                NEP 2020
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${nepDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <div
                className={`
                  absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg
                  z-[999] overflow-y-auto overflow-x-hidden
                  transition-all duration-300 ease-in-out
                  ${nepDropdownOpen ? 'opacity-100 max-h-[60vh] pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'}
                `}
                style={{ width: 'min(420px, 80vw)' }}
              >
                {nepItems.map((item, index) => (
                  <Link
                    key={`${item.to}-${index}`}
                    to={item.to}
                    onClick={() => setNepDropdownOpen(false)}
                    className="block px-4 py-2 text-xs uppercase hover:bg-gray-100 whitespace-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex gap-8 uppercase text-xs pl-48">
            {linksRight.map(l => (
              <Link key={l.to} to={l.to} className="hover:text-primary">
                {l.label}
              </Link>
            ))}

            {/* ✅ ADMIN DROPDOWN (Fixed: max height + close on click) */}
            <div className="relative" ref={adminDropdownRef}>
              <button
                onClick={() => setAdminDropdownOpen(v => !v)}
                className="hover:text-primary flex items-center"
              >
                Administration
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${adminDropdownOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>

              <div
                className={`
                  absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg
                  z-[999] overflow-y-auto overflow-x-hidden
                  transition-all duration-300 ease-in-out
                  ${adminDropdownOpen ? 'opacity-100 max-h-[70vh] pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'}
                `}
                style={{ width: 'min(420px, 80vw)' }}
              >
                <Link to="/anti-ragging" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Anti-Ragging Committee
                </Link>
                <Link to="/sexual-harassment" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Sexual Harassment Committee
                </Link>
                <Link to="/grievance" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Grievance Cell
                </Link>
                <Link to="/administration/cells" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Cells
                </Link>
                <Link to="/administration/committees" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Committees
                </Link>
                <Link to="/administration/incubation-centre" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Incubation Centre
                </Link>
                <Link to="/administration/organogram-of-institution" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Organogram of Institution
                </Link>
                <Link to="/administration/societies" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Societies
                </Link>
                <Link to="/administration/staff-council" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Staff Council
                </Link>
                <Link to="/administration/centres-list-2020-21" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Centres List 2020-21
                </Link>
                <Link to="/administration/staff-profile" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Staff Profile
                </Link>
                <Link to="/administration/teaching-staff-sanctioned-post" onClick={() => setAdminDropdownOpen(false)} className="block px-4 py-2 text-xs uppercase hover:bg-gray-100">
                  Teaching Staff Sanctioned Post
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block uppercase text-xs py-2 hover:text-primary" onClick={() => setOpen(false)}>Home</Link>

            {/* About Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-semibold text-primary mb-2"
              >
                <span>About</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>
              {mobileAboutOpen && (
                <div className="space-y-1">
                  {aboutItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-1 hover:text-primary pl-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {linksLeft.map(l => (
              <Link key={l.to} to={l.to} className="block uppercase text-xs py-2 hover:text-primary" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}

            {/* Admissions Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAdmissionsOpen(!mobileAdmissionsOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-semibold text-primary mb-2"
              >
                <span>Admissions</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${mobileAdmissionsOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>
              {mobileAdmissionsOpen && (
                <div className="space-y-1">
                  {admissionsItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-1 hover:text-primary pl-4"
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
                className="flex items-center justify-between w-full uppercase text-xs font-semibold text-primary mb-2"
              >
                <span>NEP 2020</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${mobileNepOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>
              {mobileNepOpen && (
                <div className="space-y-1">
                  {nepItems.map((item, idx) => (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block uppercase text-xs py-1 hover:text-primary pl-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {linksRight.map(l => (
              <Link key={l.to} to={l.to} className="block uppercase text-xs py-2 hover:text-primary" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}

            {/* Administration Section */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setMobileAdminOpen(!mobileAdminOpen)}
                className="flex items-center justify-between w-full uppercase text-xs font-semibold text-primary mb-2"
              >
                <span>Administration</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${mobileAdminOpen ? 'rotate-180' : ''}`}
                  size={14}
                />
              </button>
              {mobileAdminOpen && (
                <div className="space-y-1">
                  <Link to="/anti-ragging" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.antiRagging')}</Link>
                  <Link to="/sexual-harassment" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.sexualHarassment')}</Link>
                  <Link to="/grievance" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.grievanceCell')}</Link>
                  <Link to="/administration/cells" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.cells')}</Link>
                  <Link to="/administration/committees" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.committees')}</Link>
                  <Link to="/administration/incubation-centre" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.incubationCentre')}</Link>
                  <Link to="/administration/organogram-of-institution" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.organogramOfInstitution')}</Link>
                  <Link to="/administration/societies" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.societies')}</Link>
                  <Link to="/administration/staff-council" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.staffCouncil')}</Link>
                  <Link to="/administration/centres-list-2020-21" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.centresList202021')}</Link>
                  <Link to="/administration/staff-profile" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.staffProfile')}</Link>
                  <Link to="/administration/teaching-staff-sanctioned-post" onClick={() => setOpen(false)} className="block uppercase text-xs py-1 hover:text-primary pl-4">{t('nav.administrationSub.teachingStaffSanctionedPost')}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========== SVG SHIELD LOGO ========== */}
      <Link
        to="/"
        aria-label="Magadh Mahila College home"
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 z-50"
      >
        <div className="relative w-[380px]">
          <svg viewBox="0 0 400 140" className="w-full h-auto drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0 H400 V70 C300 140 100 140 0 70 Z"
              fill="white"
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
              className="w-12 h-12 object-contain"
            />
            <div className="text-left leading-tight">
              <h1 className="font-serif text-xl font-bold text-primary">
                <span className="block text-sm md:text-base font-medium text-primary">
                  {tHi('hero.title')}
                </span>
                <span className="block text-sm md:text-base font-medium text-primary">
                  {tEn('hero.title')}
                </span>
              </h1>
              <p className="text-xs text-gray-500">Patna University</p>
            </div>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
