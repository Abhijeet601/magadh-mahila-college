import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NAACCertificate = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>NAAC Certificate | Magadh Mahila College</title>
        <meta name="description" content="Official NAAC accreditation certificate with B+ grade for Magadh Mahila College." />
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
                <span className="text-primary">NAAC Certificate</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Official accreditation certificate awarded by the National Assessment and Accreditation Council (NAAC).
              </p>
            </motion.div>

            {/* Certificate Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="bg-gradient-to-r from-primary to-highlight rounded-2xl p-8 mb-8">
                <Award className="w-24 h-24 text-white mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">B+ Grade Accreditation</h2>
              </div>

              {/* NAAC Certificate Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/mmc_naac2013.jpg"
                    alt="NAAC Accreditation 2013"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">NAAC Accreditation 2013</h3>
                    <p className="text-gray-600">Grade A Accreditation Certificate</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/mmc_naac2020.jpg"
                    alt="NAAC Accreditation 2020"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">NAAC Accreditation 2020</h3>
                    <p className="text-gray-600">Grade B+ Accreditation Certificate</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/WhatsApp-Image-2021-02-11-at-3.04.42-PM.jpeg"
                    alt="NAAC Accreditation 2021"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">NAAC Accreditation 2021</h3>
                    <p className="text-gray-600">Additional NAAC Certificate</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Certificate Document</h3>
              <p className="text-muted-foreground text-center mb-8">
                Download the official NAAC accreditation certificate in PDF format.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/documents/IQAC/NAAC/NAAC_Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Certificate
                </a>
                <a
                  href="/documents/IQAC/NAAC/NAAC_Certificate.pdf"
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

export default NAACCertificate;
