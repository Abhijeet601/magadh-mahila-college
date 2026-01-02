import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Users, ExternalLink, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    { name: 'Bachelor of Arts (B.A.)', category: 'ug', duration: '3 Years', icon: '🎓' },
    { name: 'Bachelor of Science (B.Sc.)', category: 'ug', duration: '3 Years', icon: '🔬' },
    { name: 'Bachelor of Commerce (B.Com)', category: 'ug', duration: '3 Years', icon: '💼' },
    { name: 'Bachelor of Business Administration (B.B.A.)', category: 'ug', duration: '3 Years', icon: '📊' },
    { name: 'Bachelor of Computer Applications (B.C.A.)', category: 'ug', duration: '3 Years', icon: '💻' },
    { name: 'Bachelor of Social Work (B.S.W.)', category: 'ug', duration: '3 Years', icon: '🤝' },
    { name: 'Master of Arts (M.A.)', category: 'pg', duration: '2 Years', icon: '📚' },
    { name: 'Master of Science (M.Sc.)', category: 'pg', duration: '2 Years', icon: '🔭' },
    { name: 'Post Graduate Diploma in Computer Applications (PGDCA)', category: 'diploma', duration: '1 Year', icon: '🖥️' },
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  const tabs = [
    { id: 'all', label: t('academics.allPrograms'), icon: BookOpen },
    { id: 'ug', label: t('academics.undergraduate'), icon: GraduationCap },
    { id: 'pg', label: t('academics.postgraduate'), icon: Award },
    { id: 'diploma', label: t('academics.diploma'), icon: Award },
  ];

  return (
    <>
      <Helmet>
        <title>{t('academics.title')}</title>
        <meta name="description" content={t('academics.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  {t('academics.programsTitle')}
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                {t('academics.programsSubtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground hover:bg-section shadow-md'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="h-full p-8 rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-section rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">{program.icon}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-highlight transition-colors">
                          {program.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                          <div className="px-3 py-1 rounded-full bg-section text-sm font-medium">
                            {program.duration}
                          </div>
                          <div className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium capitalize">
                            {program.category === 'ug' ? 'UG' : program.category === 'pg' ? 'PG' : 'Diploma'}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {t('academics.programDescription')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-white/90">Academic Programs</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-white/90">Experienced Faculty</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-white/90">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;