import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Video, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoRecordingNAACPeerTeamVisit = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Video Recording of NAAC Peer Team Visit | Magadh Mahila College</title>
        <meta name="description" content="Video recording of the NAAC peer team visit and proceedings at Magadh Mahila College." />
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
                <span className="text-primary">Video Recording</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Complete video documentation of the NAAC peer team visit and assessment proceedings.
              </p>
            </motion.div>

            {/* Video Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Video Documentation</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive video recordings capturing the entire NAAC peer team visit, including opening ceremonies, campus tours, stakeholder interactions, assessment discussions, and closing remarks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Opening Ceremony</h3>
                  <p className="text-sm text-muted-foreground">Welcome and introductions</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Campus Assessment</h3>
                  <p className="text-sm text-muted-foreground">Facility tours and evaluations</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-primary">Stakeholder Sessions</h3>
                  <p className="text-sm text-muted-foreground">Interactions and discussions</p>
                </div>
              </div>
            </motion.div>

            {/* Watch Videos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Watch Video Recordings</h3>
              <p className="text-muted-foreground text-center mb-8">
                Access the complete video recordings from the NAAC peer team visit.
              </p>
              <div className="flex justify-center">
                <a
                  href="/documents/IQAC/NAAC/Video_Recording/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Watch Videos
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoRecordingNAACPeerTeamVisit;
