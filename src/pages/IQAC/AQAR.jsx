import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AQAR = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>AQAR - Annual Quality Assurance Report | Magadh Mahila College</title>
        <meta name="description" content="Annual Quality Assurance Report (AQAR) submissions for NAAC accreditation at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">AQAR</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Annual Quality Assurance Report submissions for continuous quality improvement and NAAC compliance.
              </p>
            </motion.div>

            {/* AQAR Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">About AQAR</h2>
              <p className="text-muted-foreground mb-6">
                The Annual Quality Assurance Report (AQAR) is a mandatory submission for all accredited institutions. It documents the quality assurance activities, progress on quality improvement, and compliance with NAAC guidelines throughout the accreditation cycle.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Key Components</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quality improvement initiatives</li>
                    <li>• Stakeholder feedback analysis</li>
                    <li>• Best practices implementation</li>
                    <li>• Infrastructure development</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Reporting Period</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Annual submissions</li>
                    <li>• Academic year coverage</li>
                    <li>• Progress tracking</li>
                    <li>• Future action plans</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Access Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">AQAR Reports</h3>
              <p className="text-muted-foreground text-center mb-8">
                Access all Annual Quality Assurance Reports submitted to NAAC.
              </p>
              <div className="flex justify-center">
                <a
                  href="/documents/IQAC/NAAC/AQAR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View AQAR Reports
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AQAR;
