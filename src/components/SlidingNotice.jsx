import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SlidingNotice = () => {
  const { t } = useTranslation();

  const notices = t('slidingNotices', { returnObjects: true });

  return (
    <div className="relative w-full bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 py-0.5 text-xs overflow-hidden mt-0 md:mt-0 z-40">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: '0%' }}
        animate={{
          x: '-50%'
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ width: '200%' }}
      >
        {[...notices, ...notices].map((notice, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-0.5 text-white mx-2 min-w-max"
          >
            <span className="font-medium text-xs">{notice}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingNotice;
