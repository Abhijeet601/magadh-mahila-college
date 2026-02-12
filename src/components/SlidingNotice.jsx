import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { getSlidingNotices } from '../services/notifications';

const SlidingNotice = () => {
  const { theme } = useTheme();
  const [paused, setPaused] = useState(false);
  const [notices, setNotices] = useState([]);
  const [topOffset, setTopOffset] = useState(0);
  const noticeRef = useRef(null);

  useEffect(() => {
    const loadNotices = () => {
      const activeNotices = getSlidingNotices();
      setNotices(activeNotices);
    };

    loadNotices();

    // Refresh notices every 30 seconds
    const interval = setInterval(loadNotices, 30000);
    return () => clearInterval(interval);
  }, []);

  const bgClass = theme === 'blue'
    ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900'
    : 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900';

  // Use only dynamic notices
  const displayNotices = notices;

  // Removed layout adjustment logic to allow normal scrolling

  return (
    <div
      ref={noticeRef}
      className={`relative w-full ${bgClass} py-2 text-xs overflow-hidden border-b-2 border-white/20`}
      style={{ zIndex: 40 }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: '100%' }}
        animate={paused ? false : { x: '-100%' }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ width: '100%' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...displayNotices, ...displayNotices].map((notice, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-0.5 text-white font-bold mx-2 min-w-max"
          >
            <a href={notice.link || "#"} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span className="font-medium text-xs">{notice.text}</span>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingNotice;
