import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RotateCcw, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RevisitNAACPeerTeam = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Revisit of NAAC Peer Team | Magadh Mahila College</title>
        <meta name="description" content="Documentation and reports from the NAAC peer team revisit at Magadh Mahila College." />
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
                <span className="text-primary">Revisit of NAAC Peer Team</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Follow-up assessment and documentation from the NAAC peer team revisit.
              </p>
            </motion.div>

            {/* Revisit Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Revisit Purpose</h2>
              <p className="text-muted-foreground mb-6">
                The NAAC peer team revisit is conducted to assess the implementation of recommendations from the initial accreditation, monitor progress on quality improvement initiatives, and evaluate the institution's continuous development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Assessment Areas</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Implementation of recommendations</li>
                    <li>• Quality improvement measures</li>
                    <li>• Stakeholder feedback</li>
                    <li>• Infrastructure development</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Documentation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Progress reports</li>
                    <li>• Action taken reports</li>
                    <li>• Future action plans</li>
                    <li>• Compliance verification</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Download Report */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Revisit Report</h3>
              <p className="text-muted-foreground text-center mb-8">
                Access the complete report from the NAAC peer team revisit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/documents/IQAC/NAAC/Revisit_Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Report
                </a>
                <a
                  href="/documents/IQAC/NAAC/Revisit_Report.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RevisitNAACPeerTeam;
