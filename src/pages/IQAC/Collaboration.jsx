import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Handshake, Building, Award, Users } from 'lucide-react';

const Collaboration = () => {
  return (
    <>
      <Helmet>
        <title>IQAC Collaboration - Partnerships | Magadh Mahila College</title>
        <meta name="description" content="Explore institutional collaborations and partnerships at Magadh Mahila College." />
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
                <span className="text-primary">Institutional Collaboration</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Partnerships and collaborations for academic excellence and mutual growth.
              </p>
            </motion.div>

            {/* Collaboration Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Collaboration Documents</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Collaboration Documents Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">Institutional Collaboration</h3>
                  <p className="text-muted-foreground mb-6">Documents related to institutional collaborations and partnerships.</p>
                  <div className="space-y-2">
                    <motion.a
                      href="/documents/IQAC/Collaboration/BBA_BCA_Psychology_merged.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      BBA_BCA_Psychology_merged.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Collaboration/collaborative-activities.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      collaborative-activities.pdf
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Collaboration;
