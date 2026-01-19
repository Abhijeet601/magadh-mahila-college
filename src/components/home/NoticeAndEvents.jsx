import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';



const ScrollList = ({ items, accent }) => {
  return (
    <div className="relative h-64 overflow-hidden group">
      <motion.div
        animate={{ y: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="space-y-4 group-hover:pause"
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-primary transition-all duration-300"
          >
            <p className={`text-sm font-sans font-medium ${accent} mb-1`}>
              {item.date}
            </p>
            <p className="text-gray-800 font-serif font-medium">
              {item.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const NoticeAndEvents = () => {
  const { t } = useTranslation();

  const notices = [
    { title: t('notices.ugAdmission'), date: '12 Aug 2025' },
    { title: t('notices.examSchedule'), date: '05 Aug 2025' },
    { title: t('notices.independenceDay'), date: '15 Aug 2025' },
    { title: t('notices.hostelGuidelines'), date: '02 Aug 2025' },
    { title: t('notices.scholarshipDeadline'), date: '20 Aug 2025' },
  ];

  const events = [
    { title: t('notices.womenLeadership'), date: '22 Aug 2025' },
    { title: t('notices.nssProgram'), date: '25 Aug 2025' },
    { title: t('notices.careerWorkshop'), date: '30 Aug 2025' },
    { title: t('notices.culturalWeek'), date: '05 Sep 2025' },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">

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

      </div>
    </section>
  );
};

export default NoticeAndEvents;
