import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');

  const quickLinks = [
    { path: '/about', label: t('footer.quickLinksItems.about') },
    { path: '/academics', label: t('footer.quickLinksItems.academics') },
    { path: '/admissions', label: t('footer.quickLinksItems.admissions') },
    { path: '/campus-life', label: t('footer.quickLinksItems.campusLife') },
    { path: '/contact', label: t('footer.quickLinksItems.contact') }
  ];

  const importantLinks = [
    { path: '/tenders', label: t('footer.importantLinksItems.tenders') },
    { path: '/notices', label: t('footer.importantLinksItems.notices') },
    { path: '/aqar', label: t('footer.importantLinksItems.aqar') },
    { path: '/annual-reports', label: t('footer.importantLinksItems.annualReports') },
    { path: '/media-gallery', label: t('footer.importantLinksItems.mediaGallery') },
    { path: '/privacy-policy', label: t('footer.importantLinksItems.privacyPolicy') },
    { path: '/terms', label: t('footer.importantLinksItems.terms') }
  ];

  const externalLinks = [
    { href: 'http://magadhmahilacollege.org/wp-content/uploads/2023/12/Handbook-2023-2024_mmc.pdf', label: t('footer.externalLinksItems.handbook') },
    { href: 'https://www.patnauniversity.ac.in/', label: t('footer.externalLinksItems.university') },
    { href: 'https://www.ugc.ac.in/', label: t('footer.externalLinksItems.ugc') },
    { href: 'https://www.naac.gov.in/', label: t('footer.externalLinksItems.naac') }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-navbar text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LOGO + DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="block">
              <div className="relative w-full max-w-[300px] mx-auto">

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
                <div className="absolute inset-0 flex items-center justify-center gap-2 px-4 pt-0">
                  <img
                    src="/Magadh_Mahila_College.png"
                    alt="Magadh Mahila College Logo"
                    className="w-10 h-10 object-contain"
                  />

                  <div className="text-left leading-tight">
                    <h1 className="font-serif text-lg font-bold text-[#800000]">
                      <span className="block text-sm md:text-base font-medium text-[#800000]">
                        {tHi('hero.title')}
                      </span>
                      <span className="block text-xs md:text-sm font-medium text-[#800000]">
                        {tEn('hero.title')}
                      </span>
                    </h1>
                    <p className="text-xs text-gray-500">Patna University</p>
                  </div>
                </div>
              </div>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed text-center">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-lg font-semibold mb-4 block">
              {t('footer.quickLinks')}
            </span>
            <nav className="space-y-2">
              {quickLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-primary-foreground hover:text-highlight transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* IMPORTANT LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-lg font-semibold mb-4 block">
              {t('footer.importantLinks')}
            </span>
            <nav className="space-y-2">
              {importantLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-primary-foreground hover:text-highlight transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-lg font-semibold mb-4 block">
              {t('footer.contactInfo')}
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-highlight mt-0.5" />
                <span className="text-sm">
                  North Gandhi Maidan, Patna – 800001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-highlight" />
                <span className="text-sm">+91-612-2219454</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-highlight" />
                <span className="text-sm">info@magadhmahilacollege.org</span>
              </div>
            </div>
          </motion.div>

          {/* EXTERNAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-lg font-semibold mb-4 block">
              {t('footer.externalLinks')}
            </span>
            <nav className="space-y-2">
              {externalLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground hover:text-highlight transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-lg font-semibold mb-4 block">
              {t('footer.followUs')}
            </span>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm">
            {t('footer.copyright')}
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
