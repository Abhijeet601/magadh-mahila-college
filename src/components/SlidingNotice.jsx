import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const SlidingNotice = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [paused, setPaused] = useState(false);

  const notices = t('slidingNotices', { returnObjects: true });

  const bgClass = theme === 'blue'
    ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900'
    : 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900';

  return (
    <div className={`relative w-full ${bgClass} py-0.5 text-xs overflow-hidden mt-0 md:mt-0 z-40`}>
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: '0%' }}
        animate={paused ? false : { x: '-50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ width: '200%' }}
      >
        {[...notices, ...notices].map((notice, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-0.5 text-white mx-2 min-w-max"
          >
            <Link to="/notices" className="hover:underline">
              <span className="font-medium text-xs">{notice}</span>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingNotice;
