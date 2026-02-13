import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { getSlidingNotices } from '../services/notifications';

const SlidingNotice = () => {
  const { theme } = useTheme();
  const [notices, setNotices] = useState([]);
  const trackRef = useRef(null);
  const controls = useAnimation();
  const [contentWidth, setContentWidth] = useState(0);

  /* Load notices */
  useEffect(() => {
    const loadNotices = () => {
      setNotices(getSlidingNotices() || []);
    };

    loadNotices();
    const interval = setInterval(loadNotices, 30000);
    return () => clearInterval(interval);
  }, []);

  /* Measure content width */
  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth / 2;
    setContentWidth(totalWidth);

    startAnimation(totalWidth);
  }, [notices]);

  /* Start scrolling animation */
  const startAnimation = async (width) => {
    if (!width) return;

    await controls.start({
      x: -width,
      transition: {
        duration: width / 80, // speed factor
        ease: 'linear',
        repeat: Infinity,
      },
    });
  };

  /* Pause & Resume */
  const pause = () => controls.stop();
  const resume = () => startAnimation(contentWidth);

  const bgClass =
    theme === 'blue'
      ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900'
      : 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900';

  const duplicatedNotices = [...notices, ...notices];

  return (
    <div
      className={`relative w-full ${bgClass} py-2 text-xs overflow-hidden border-b-2 border-white/20`}
      style={{ zIndex: 40 }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <motion.div
        ref={trackRef}
        className="flex whitespace-nowrap"
        animate={controls}
      >
        {duplicatedNotices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center px-4 text-white font-bold mx-2 min-w-max"
          >
            <a
              href={notice.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="text-xs font-medium">
                {notice.text}
              </span>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingNotice;