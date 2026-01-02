import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, ExternalLink } from 'lucide-react';

const AnnualReports = () => {
  const reports = [
    {
      year: '2022-23',
      title: 'Annual Report 2022-2023',
      description: 'Comprehensive report covering academic achievements, student activities, and institutional development',
      downloadLink: '#',
      fileSize: '2.5 MB'
    },
    {
      year: '2021-22',
      title: 'Annual Report 2021-2022',
      description: 'Annual report highlighting academic excellence, research activities, and campus initiatives',
      downloadLink: '#',
      fileSize: '2.1 MB'
    },
    {
      year: '2020-21',
      title: 'Annual Report 2020-2021',
      description: 'Report covering the academic year with focus on online learning and student achievements',
      downloadLink: '#',
      fileSize: '1.8 MB'
    },
    {
      year: '2019-20',
      title: 'Annual Report 2019-2020',
      description: 'Annual report documenting institutional growth and academic accomplishments',
      downloadLink: '#',
      fileSize: '2.3 MB'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Annual Reports - Magadh Mahila College | Academic Year Reports</title>
        <meta name="description" content="Access annual reports of Magadh Mahila College showcasing academic achievements, institutional development, and student activities." />
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
                  Annual Reports
                </span>
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Comprehensive documentation of our academic achievements, institutional development, and student activities year by year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {report.year}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{report.fileSize}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {report.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {report.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Academic Year {report.year}</span>
                        </div>

                        <a
                          href={report.downloadLink}
                          className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 rounded-3xl text-center"
            >
              <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Older Reports?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                For annual reports from previous years or specific documentation, please contact our administration office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Contact Administration</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnnualReports;
