import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, FileText, Download, ExternalLink, Filter, Building, Wrench, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Tender = () => {
  const { t } = useTranslation();

  const tenders = [
    {
      id: 1,
      tenderNumber: 'MMC/TENDER/2024/001',
      title: 'Supply and Installation of Laboratory Equipment',
      description: 'Procurement of modern laboratory equipment for science departments including chemistry, physics, and biology labs.',
      lastDate: 'December 31, 2024',
      status: 'Open',
      category: 'Equipment',
      featured: true,
    },
    {
      id: 2,
      tenderNumber: 'MMC/TENDER/2024/002',
      title: 'Campus Maintenance Services',
      description: 'Annual maintenance contract for campus facilities including electrical, plumbing, and general maintenance services.',
      lastDate: 'January 15, 2025',
      status: 'Open',
      category: 'Services',
      featured: false,
    },
    {
      id: 3,
      tenderNumber: 'MMC/TENDER/2024/003',
      title: 'Library Books and Journals',
      description: 'Procurement of academic books, journals, and digital resources for the central library.',
      lastDate: 'December 20, 2024',
      status: 'Open',
      category: 'Books',
      featured: false,
    },
    {
      id: 4,
      tenderNumber: 'MMC/TENDER/2024/004',
      title: 'Computer Lab Upgradation',
      description: 'Upgradation of existing computer lab with latest hardware and software systems.',
      lastDate: 'January 10, 2025',
      status: 'Open',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 5,
      tenderNumber: 'MMC/TENDER/2024/005',
      title: 'Sports Equipment Procurement',
      description: 'Purchase of sports equipment and gymnasium facilities for student physical education.',
      lastDate: 'December 25, 2024',
      status: 'Open',
      category: 'Equipment',
      featured: false,
    },
    {
      id: 6,
      tenderNumber: 'MMC/TENDER/2023/015',
      title: 'Hostel Renovation Work',
      description: 'Complete renovation and modernization of hostel facilities including painting, electrical work, and furniture.',
      lastDate: 'November 30, 2024',
      status: 'Closed',
      category: 'Services',
      featured: false,
    },
  ];

  const categories = ['All', 'Equipment', 'Services', 'Books'];
  const statuses = ['All', 'Open', 'Closed'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredTenders = tenders.filter(tender => {
    const categoryMatch = selectedCategory === 'All' || tender.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || tender.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const featuredTenders = tenders.filter(tender => tender.featured);

  const getStatusColor = (status) => {
    return status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Equipment':
        return <Wrench className="w-5 h-5" />;
      case 'Services':
        return <Building className="w-5 h-5" />;
      case 'Books':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('pages.tenders.title')}</title>
        <meta name="description" content={t('pages.tenders.metaDescription')} />
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
                  {t('pages.tenders.pageTitle')}
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                {t('pages.tenders.pageSubtitle')}
              </p>
            </motion.div>

            {/* Featured Tenders */}
            {featuredTenders.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="text-primary">Featured Tenders</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredTenders.map((tender) => (
                    <motion.div
                      key={tender.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getCategoryIcon(tender.category)}
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                              {tender.category}
                            </span>
                          </div>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(tender.status)}`}>
                            {tender.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {tender.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {tender.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <FileText className="w-4 h-4" />
                              <span>{tender.tenderNumber}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{tender.lastDate}</span>
                            </div>
                          </div>
                          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                            <Download className="w-4 h-4" />
                            <span>{t('pages.tenders.download')}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center space-x-4">
                  <Filter className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tenders Grid */}
            <motion.div
              key={`${selectedCategory}-${selectedStatus}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTenders.length > 0 ? (
                filteredTenders.map((tender, index) => (
                  <motion.div
                    key={tender.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(tender.category)}
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {tender.category}
                          </span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tender.status)}`}>
                          {tender.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {tender.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {tender.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <FileText className="w-3 h-3" />
                          <span>{tender.tenderNumber}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{t('pages.tenders.lastDate')}: {tender.lastDate}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm">
                          <Download className="w-4 h-4" />
                          <span>{t('pages.tenders.download')}</span>
                        </button>
                        {tender.status === 'Open' && (
                          <button className="flex items-center justify-center space-x-2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg hover:bg-secondary/90 transition-colors text-sm">
                            <ExternalLink className="w-4 h-4" />
                            <span>{t('pages.tenders.apply')}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('pages.tenders.noTenders')}</h3>
                  <p className="text-muted-foreground">Please check back later for new tenders.</p>
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{t('pages.tenders.contactProcurement')}</h2>
                <p className="text-white/90 max-w-2xl mx-auto">
                  For any queries regarding tenders, please contact our procurement officer.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{t('pages.tenders.procurementOfficer')}</h3>
                  <p className="text-white/90">{t('pages.tenders.procurementEmail')}</p>
                  <p className="text-white/90">{t('pages.tenders.procurementPhone')}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-white/90">Monday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="text-white/90">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tender;
