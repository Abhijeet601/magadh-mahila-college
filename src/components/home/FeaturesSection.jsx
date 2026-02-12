import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">
              {t('features.experienceExcellence')}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('features.excellenceDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
          >
            <video
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/main%20gate%20video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-section/10 flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('features.modernCampus')}</h3>
                <p className="text-white/90">{t('features.modernCampusDesc')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
          >
            <video
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/building.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-section/10 flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('features.academicExcellence')}</h3>
                <p className="text-white/90">{t('features.academicExcellenceDesc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;