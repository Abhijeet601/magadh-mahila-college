import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, CheckCircle, FileText, TrendingUp, Users, Target, Shield, Star, Download, ExternalLink, Camera, Video, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NAAC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>IQAC NAAC - Accreditation & Quality | Magadh Mahila College</title>
        <meta name="description" content="Explore NAAC accreditation details, assessment criteria, and quality assurance processes at Magadh Mahila College." />
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
                <span className="text-primary">NAAC Accreditation</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                National Assessment and Accreditation Council evaluation framework ensuring quality education and institutional excellence.
              </p>
            </motion.div>



            {/* NAAC Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">NAAC Pages</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">NAAC Certificate</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Official NAAC accreditation certificate with B+ grade.
                    </p>
                    <a
                      href="/iqac/naac-certificate"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <FileText className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Self Study Report</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive self-study report submitted for NAAC accreditation.
                    </p>
                    <a
                      href="/iqac/self-study-report"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <Camera className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Peer Team Visit Photos</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Photographs from the NAAC peer team visit and assessment.
                    </p>
                    <a
                      href="/iqac/peer-team-visit-photos"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <Video className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Video Recording</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Video recording of the NAAC peer team visit and proceedings.
                    </p>
                    <a
                      href="/iqac/video-recording-naac-peer-team-visit"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <RotateCcw className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Revisit of NAAC Peer Team</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Documentation and reports from the NAAC peer team revisit.
                    </p>
                    <a
                      href="/iqac/revisit-naac-peer-team"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <FileText className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">AQAR</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Annual Quality Assurance Report (AQAR) submissions.
                    </p>
                    <a
                      href="/iqac/aqar"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Page
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">NAAC Coordination</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For NAAC-related queries, accreditation details, or quality assurance information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">NAAC Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">naac@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NAAC;
