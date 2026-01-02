import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useBilingual } from '../contexts/BilingualContext';
import Notifications from './Notifications';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');
  const { theme, toggleTheme } = useTheme();
  const { isBilingual, toggleBilingual } = useBilingual();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

  const linksLeft = [
    { to: '/', label: 'Home' },
    { to: '/about', label: t('nav.about') || 'About' },
    { to: '/academics', label: t('nav.academics') || 'Academics' },
    { to: '/admissions', label: t('nav.admissions') || 'Admissions' },
    { to: '/nep-2020', label: 'NEP 2020' },
    { to: '/iqac', label: 'IQAC' },
  ];

  const linksRight = [
    { to: '/nirf', label: 'NIRF' },
    { to: '/campus-life', label: t('nav.campusLife') || 'Campus Life' },
    { to: '/contact', label: t('nav.contact') || 'Contact' },
  ];

  const toggleLang = () => {
    toggleBilingual();
    i18n.changeLanguage(isBilingual ? 'en' : 'hi');
  };

  return (
    <header className="relative z-50">

      {/* ========== TOP BAR ========== */}
      <div className="bg-[#800000] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center uppercase">
          <div className="flex gap-6">
            <Link to="/news" className="hover:text-white/80">News</Link>
            <Link to="/events" className="hover:text-white/80">Events</Link>
            <Link to="/tenders" className="hover:text-white/80">Tenders</Link>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            {/* Language selector */}
            <div className="flex items-center gap-2 text-white text-xs">
              <span className="font-medium">Language</span>
              <div className="flex items-center bg-white/10 rounded p-0.5">
                <button
                  onClick={() => { i18n.changeLanguage('en'); setBilingual(false); }}
                  className={`px-2 py-0.5 text-xs ${i18n.language?.startsWith('en') ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={i18n.language?.startsWith('en')}
                >
                  EN
                </button>
                <span className="px-1 text-white/60">|</span>
                <button
                  onClick={() => { i18n.changeLanguage('hi'); setBilingual(true); }}
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
                  onClick={() => setTheme('light')}
                  className={`px-2 py-0.5 text-xs ${theme === 'light' ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={theme === 'light'}
                >
                  Light
                </button>
                <span className="px-1 text-white/60">|</span>
                <button
                  onClick={() => setTheme('dark')}
                  className={`px-2 py-0.5 text-xs ${theme === 'dark' ? 'font-semibold underline' : 'opacity-90'}`}
                  aria-pressed={theme === 'dark'}
                >
                  Dark
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
          <nav className="hidden md:flex gap-8 uppercase text-xs pr-56 z-60">
            {linksLeft.map(l => (
              <Link key={l.to} to={l.to}
                className="hover:text-[#800000]">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex gap-8 uppercase text-xs pl-48 z-60">
            {linksRight.map(l => (
              <Link key={l.to} to={l.to}
                className="hover:text-[#800000]">
                {l.label}
              </Link>
            ))}
            <div className="relative">
              <button onClick={() => setAdminDropdownOpen(!adminDropdownOpen)} className="hover:text-[#800000] flex items-center">
                Administration
                <ChevronDown className={`ml-1 transition-transform duration-200 ${adminDropdownOpen ? 'rotate-180' : ''}`} size={14} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${adminDropdownOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                <Link to="/anti-ragging" className={`block px-4 py-2 text-xs uppercase hover:bg-gray-100 transition-all duration-200 ease-in-out ${adminDropdownOpen ? 'animate-fade-in' : 'opacity-0 translate-y-2'}`} style={{ animationDelay: '0s' }}>Anti-Ragging Committee</Link>
                <Link to="/sexual-harassment" className={`block px-4 py-2 text-xs uppercase hover:bg-gray-100 transition-all duration-200 ease-in-out ${adminDropdownOpen ? 'animate-fade-in' : 'opacity-0 translate-y-2'}`} style={{ animationDelay: '0.1s' }}>Sexual Harassment Committee</Link>
                <Link to="/grievance" className={`block px-4 py-2 text-xs uppercase hover:bg-gray-100 transition-all duration-200 ease-in-out ${adminDropdownOpen ? 'animate-fade-in' : 'opacity-0 translate-y-2'}`} style={{ animationDelay: '0.2s' }}>Grievance Cell</Link>
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
            {[...linksLeft, ...linksRight].map(l => (
              <Link key={l.to} to={l.to} className="block uppercase text-xs py-2 hover:text-[#800000]">
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="uppercase text-xs font-semibold text-[#800000] mb-2">Administration</h3>
              <Link to="/anti-ragging" className="block uppercase text-xs py-1 hover:text-[#800000]">Anti-Ragging Committee</Link>
              <Link to="/sexual-harassment" className="block uppercase text-xs py-1 hover:text-[#800000]">Sexual Harassment Committee</Link>
              <Link to="/grievance" className="block uppercase text-xs py-1 hover:text-[#800000]">Grievance Cell</Link>
            </div>
          </div>
        </div>
      )}

      {/* ========== SVG SHIELD LOGO (EXACT UCHICAGO STYLE) ========== */}
      <Link
        to="/"
        aria-label="Magadh Mahila College home"
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 z-50"
      >
        <div className="relative w-[380px]">

          {/* SVG SHAPE */}
          <svg
            viewBox="0 0 400 140"
            className="w-full h-auto drop-shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0 0
                H400
                V70
                C300 140 100 140 0 70
                Z
              "
              fill="white"
            />
            <path
              d="
                M0 0
                H400
                V70
                C300 140 100 140 0 70
                Z
              "
              fill="none"
              stroke="#800000"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {/* CONTENT ON TOP */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 px-6 pt-0">
            <img
              src="/Magadh_Mahila_College.png"
              alt="Magadh Mahila College Logo"
              className="w-12 h-12 object-contain"
            />

            <div className="text-left leading-tight">
              <h1 className="font-serif text-xl font-bold text-[#800000]">
                <span className="block text-sm md:text-base font-medium text-[#800000]">
                  {tHi('hero.title')}
                </span>
                <span className="block text-sm md:text-base font-medium text-[#800000]">
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
