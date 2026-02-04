import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PeerTeamVisitPhotos = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Peer Team Visit Photos | Magadh Mahila College</title>
        <meta name="description" content="Photographs from the NAAC peer team visit and assessment at Magadh Mahila College." />
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
                <span className="text-primary">Peer Team Visit Photos</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Capturing moments from the NAAC peer team visit and assessment process.
              </p>
            </motion.div>

            {/* Photo Gallery Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Photo Gallery</h2>
              <p className="text-muted-foreground mb-6">
                A collection of photographs documenting the NAAC peer team visit, including interactions with faculty, students, infrastructure tours, and assessment activities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Campus Tours</h3>
                  <p className="text-sm text-muted-foreground">Infrastructure and facilities</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Interactions</h3>
                  <p className="text-sm text-muted-foreground">Meetings with stakeholders</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluation activities</p>
                </div>
              </div>
            </motion.div>

            {/* View Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">View Photo Gallery</h3>
              <p className="text-muted-foreground text-center mb-8">
                Browse through the complete collection of photographs from the NAAC peer team visit.
              </p>
              <div className="flex justify-center">
                <a
                  href="/documents/IQAC/NAAC/Peer_Team_Visit_Photos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open Photo Gallery
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PeerTeamVisitPhotos;
