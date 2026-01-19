import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import HeroSection from '@/components/home/HeroSection';
import QuickHighlights from '@/components/home/QuickHighlights';
import FeaturesSection from '@/components/home/FeaturesSection';
import NoticeAndEvents from '@/components/home/NoticeAndEvents';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.title')}</title>
        <meta
          name="description"
          content={t('home.metaDescription')}
        />
      </Helmet>

      <div className="pt-0 bg-white text-gray-900 antialiased">

        {/* HERO */}
        <HeroSection />

        {/* QUICK HIGHLIGHTS */}
        <section className="pt-0 pb-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <QuickHighlights />
          </div>
        </section>

        {/* NOTICE & EVENTS (SCROLLING) */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <NoticeAndEvents />
          </div>
        </section>

        {/* WOMEN EMPOWERMENT SECTION */}
        <section className="relative py-20 bg-white overflow-hidden border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t('home.hero.title').split('. ')[0]}. <span className="text-primary">{t('home.hero.title').split('. ')[1]}</span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12 font-sans">
              {t('home.hero.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: t('home.features.safeCampus.title'),
                  desc: t('home.features.safeCampus.desc'),
                },
                {
                  title: t('home.features.leadership.title'),
                  desc: t('home.features.leadership.desc'),
                },
                {
                  title: t('home.features.careerFocused.title'),
                  desc: t('home.features.careerFocused.desc'),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
                >
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-sans">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>



        {/* FEATURES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <FeaturesSection />
          </div>
        </section>

        {/* WELCOME MESSAGE */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('home.welcome.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto">
                {t('home.welcome.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{t('home.principal.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('home.principal.name')}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {t('home.principal.message')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{t('home.updates.title')}</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 dark:border-red-400 pl-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">NIQ-No.P-MMC-957 Dated 10.12.2025</p>
                    <p className="text-gray-700 dark:text-gray-200">{t('home.updates.update1')}</p>
                  </div>
                  <div className="border-l-4 border-red-500 dark:border-red-400 pl-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">NIQ-No.P-MMC-958 dated 10.12.2025</p>
                    <p className="text-gray-700 dark:text-gray-200">{t('home.updates.update2')}</p>
                  </div>
                  <div className="border-l-4 border-red-500 dark:border-red-400 pl-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">NIQ-No-P-MMC-956 dated 10.12.2025</p>
                    <p className="text-gray-700 dark:text-gray-200">{t('home.updates.update3')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ANNOUNCEMENT & IMPORTANT LINKS */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-serif font-bold text-primary mb-6">{t('home.announcement.title')}</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic font-sans">{t('home.announcement.placeholder')}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl font-serif font-bold text-primary mb-6">{t('home.importantLinks.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: t('home.importantLinks.tenders'), href: '/tenders' },
                    { name: t('home.importantLinks.notices'), href: '/notices' },
                    { name: t('home.importantLinks.aqar'), href: '/aqar' },
                    { name: t('home.importantLinks.annualReports'), href: '/annual-reports' },
                    { name: t('home.importantLinks.mediaGallery'), href: '/media-gallery' },
                    { name: t('home.importantLinks.privacyPolicy'), href: '/privacy-policy' },
                    { name: t('home.importantLinks.terms'), href: '/terms' },
                    { name: t('home.importantLinks.survey'), href: '/survey' },
                    { name: t('home.importantLinks.staffIcard'), href: '/staff-icard' },
                    { name: t('home.importantLinks.studentIcard'), href: '/student-icard' },
                    { name: t('home.importantLinks.paymentPolicy'), href: '/payment-policy' }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition transform hover:-translate-y-1 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-sans">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* DOWNLOAD HANDBOOK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-white border border-gray-100 rounded-xl p-6 inline-block shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <h4 className="text-xl font-serif font-bold text-primary mb-2">{t('home.handbook.title')}</h4>
                <p className="text-gray-700 mb-4 font-sans">{t('home.handbook.subtitle')}</p>
                <a
                  href="http://magadhmahilacollege.org/wp-content/uploads/2023/12/Handbook-2023-2024_mmc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-sans">{t('home.handbook.download')}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CLOSING MESSAGE */}
        <section className="py-20 bg-navbar text-navbar-foreground text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-foreground mb-6">
              {t('home.closing.title')}
            </h2>
            <p className="text-navbar-foreground/80 text-lg">
              {t('home.closing.message')}
            </p>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Home;
