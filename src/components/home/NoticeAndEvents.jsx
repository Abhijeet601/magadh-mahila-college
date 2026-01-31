import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ScrollList = ({ items, accent }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative h-64 overflow-hidden group">
      <motion.div
        animate={paused ? false : { y: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="space-y-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-primary transition-all duration-300"
          >
            <p className={`text-sm font-sans font-medium ${accent} mb-1`}>
              {item.date || 'Recent'}
            </p>
            <p className="text-gray-800 font-serif font-medium">
              {item.title || item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const NoticeAndEvents = () => {
  const { t } = useTranslation();

  const slidingNotices = t('slidingNotices', { returnObjects: true });

  const notices = slidingNotices.map(notice => ({
    title: notice.text,
    date: 'Recent'
  }));

  const events = [];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* NOTICE BOARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary inline-block pb-2">
              {t('notices.noticeBoard')}
            </h2>

            <ScrollList items={notices} accent="text-red-600" />

            <button className="mt-6 text-sm font-semibold text-primary hover:underline">
              {t('notices.viewAllNotices')}
            </button>
          </motion.div>

          {/* UPCOMING EVENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary inline-block pb-2">
              {t('notices.upcomingEvents')}
            </h2>

            <ScrollList items={events} accent="text-blue-600" />

            <button className="mt-6 text-sm font-semibold text-primary hover:underline">
              {t('notices.viewAllEvents')}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NoticeAndEvents;
