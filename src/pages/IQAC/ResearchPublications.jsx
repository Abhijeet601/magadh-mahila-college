import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResearchPublications = () => {
  const { t } = useTranslation();

  const pdfFiles = [
    {
      title: 'Research Publications of Faculties in UGC Journals',
      filename: 'mmc_ugc_journals2.pdf',
      path: '/documents/IQAC/Research/Research Publications of faculties in UGC Journals/mmc_ugc_journals2.pdf',
      description: 'Comprehensive collection of research publications by MMC faculty members in UGC-approved journals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Research Publications - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Browse research publications by faculty and students at Magadh Mahila College. Access journal articles, conference papers, and academic works." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Research Publications</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Explore our comprehensive collection of research publications, academic papers, and scholarly works.
              </p>
            </motion.div>

            {/* PDF Files */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {pdfFiles.map((pdf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {pdf.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {pdf.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <strong>File:</strong> {pdf.filename}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <a
                        href={pdf.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View PDF
                      </a>
                      <a
                        href={pdf.path}
                        download
                        className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Research Publications Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For publication submissions, research collaboration, or access to our publication repository.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Publications Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">publications@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Research Publications - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Browse research publications by faculty and students at Magadh Mahila College. Access journal articles, conference papers, and academic works." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Research Publications</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Explore our comprehensive collection of research publications, academic papers, and scholarly works.
              </p>
            </motion.div>

            {/* Publication Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
            >
              {publicationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground mb-1">{stat.label}</p>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex flex-wrap gap-4">
                  <Filter className="w-5 h-5 text-primary mt-2" />
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        activeFilter === filter.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Calendar className="w-5 h-5 text-primary mt-2" />
                  {yearFilters.map(year => (
                    <button
                      key={year.id}
                      onClick={() => setActiveYear(year.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        activeYear === year.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {year.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Publications List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {filteredPublications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {publication.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        <strong>Authors:</strong> {publication.authors}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <span className="font-semibold text-primary">
                            {publication.type === 'journal' ? 'Journal:' : 'Conference:'}
                          </span>
                          <p className="text-muted-foreground">{publication.journal || publication.conference}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Year:</span>
                          <p className="text-muted-foreground">{publication.year}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Pages:</span>
                          <p className="text-muted-foreground">{publication.pages}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Citations:</span>
                          <p className="text-muted-foreground">{publication.citations}</p>
                        </div>
                      </div>
                      {publication.doi && (
                        <p className="text-sm text-muted-foreground mb-4">
                          <strong>DOI:</strong> {publication.doi}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Online
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Publication Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Publication Guidelines</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Submission Process</h3>
                  <p className="text-blue-700 text-sm">
                    Submit publications to IQAC for review and inclusion in our repository within 30 days of publication.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <Award className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Recognition</h3>
                  <p className="text-green-700 text-sm">
                    Outstanding publications are recognized through awards and featured in college newsletters.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Impact Tracking</h3>
                  <p className="text-purple-700 text-sm">
                    We track citation metrics and research impact using academic databases and analytics tools.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Research Publications Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For publication submissions, research collaboration, or access to our publication repository.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Publications Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">publications@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResearchPublications;
