import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Shield, CheckCircle, ChevronRight, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IQAC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const iqacMenuItems = [
    { label: 'AQAR', to: '/iqac/aqar' },
    { label: 'Collaboration', to: '/iqac/collaboration' },
    { label: 'Composition of IQAC', to: '/iqac/composition-of-iqac' },
    { label: 'Extension Activities', to: '/iqac/extension-activities' },
    { label: 'Minutes Of IQAC', to: '/iqac/minutes-of-iqac' },
    { label: 'Project, Internship & Field Work', to: '/iqac/project-internship-fieldwork' },
    { label: 'Research', to: '/iqac/research' },
    { label: 'Student Satisfaction Survey', to: '/iqac/student-satisfaction-survey' },
    { label: 'Best Practices', to: '/iqac/best-practices' },
    { label: 'Criteria', to: '/iqac/criteria' },
    { label: 'NAAC Peer Team Visit', to: '/iqac/naac-peer-team-visit' },
    { label: 'Objectives of IQAC', to: '/iqac/objectives-of-iqac' },
    { label: 'Student Progression Form', to: '/iqac/student-progression-form' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('iqac.title', 'IQAC - Magadh Mahila College | Internal Quality Assurance Cell')}</title>
        <meta name="description" content={t('iqac.metaDescription', 'Learn about the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College. Discover our commitment to quality education, continuous improvement, and institutional excellence.')} />
      </Helmet>

      <div className="pt-0">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  Internal Quality Assurance Cell
                </span>
              </h1>
              <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
                Driving excellence in education through systematic quality enhancement and continuous improvement initiatives
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              {/* Sidebar */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Menu className="w-5 h-5 text-primary" />
                    IQAC Menu
                  </h3>
                  <nav className="space-y-2">
                    {iqacMenuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.to}
                          className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                            location.pathname.includes(item.to.replace('/iqac/', ''))
                              ? 'bg-primary text-white shadow-md'
                              : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              </aside>

              {/* Mobile Sidebar Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                  IQAC Menu
                </button>
              </div>

              {/* Mobile Sidebar */}
              <AnimatePresence>
                {sidebarOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="lg:hidden fixed inset-0 bg-black/50 z-40"
                      onClick={() => setSidebarOpen(false)}
                    />
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-bold text-foreground">IQAC Menu</h3>
                          <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <nav className="space-y-2">
                          {iqacMenuItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.to}
                              onClick={() => setSidebarOpen(false)}
                              className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                                location.pathname.includes(item.to.replace('/iqac/', ''))
                                  ? 'bg-primary text-white shadow-md'
                                  : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{item.label}</span>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Main Content Area */}
              <div className="flex-1">
                {/* IQAC Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold text-foreground mb-6">About IQAC</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        The Internal Quality Assurance Cell (IQAC) was established in accordance with NAAC guidelines to develop a system for conscious, consistent, and catalytic improvement in the overall performance of the institution.
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        IQAC works towards ensuring quality enhancement and sustenance by developing and implementing quality benchmarks for various academic and administrative activities.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">NAAC Accredited</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">ISO Certified</span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-br from-primary/10 to-blue-100/10 rounded-3xl p-8">
                        <div className="text-center">
                          <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                          <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
                          <p className="text-muted-foreground">
                            Committed to maintaining the highest standards of educational excellence and institutional integrity.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


export default IQAC;
