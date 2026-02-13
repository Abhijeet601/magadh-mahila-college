import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getActiveNotifications } from '@/services/notifications';

/* ================= Scroll List ================= */
const ScrollList = ({ items, accent }) => {
  const trackRef = useRef(null);
  const controls = useAnimation();
  const [contentHeight, setContentHeight] = useState(0);

  /* Measure content height */
  useEffect(() => {
    if (!trackRef.current) return;

    const height = trackRef.current.scrollHeight / 2;
    setContentHeight(height);
    startScroll(height);
  }, [items]);

  const startScroll = async (height) => {
    if (!height) return;

    await controls.start({
      y: -height,
      transition: {
        duration: height / 40,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  };

  const pauseScroll = () => controls.stop();
  const resumeScroll = () => startScroll(contentHeight);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative h-64 overflow-hidden"
      onMouseEnter={pauseScroll}
      onMouseLeave={resumeScroll}
    >
      <motion.div
        ref={trackRef}
        animate={controls}
        className="space-y-4"
      >
        {duplicatedItems.map((item, index) => (
          <a
            key={index}
            href={item.link || item.fileUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
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
          </a>
        ))}
      </motion.div>
    </div>
  );
};

/* ================= Main Component ================= */
const NoticeAndEvents = () => {
  const { t } = useTranslation();
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadNotifications = () => {
      const activeNotifications = getActiveNotifications();

      const formattedNotices = activeNotifications
        .slice(0, 10)
        .map(notification => ({
          title: notification.title,
          date: new Date(notification.createdAt).toLocaleDateString(),
          link: notification.link || notification.fileUrl,
        }));

      setNotices(formattedNotices);

      /* Example events placeholder */
      setEvents([
        {
          title: 'Annual Cultural Fest',
          date: 'March 25, 2026',
          link: '#',
        },
        {
          title: 'Sports Meet',
          date: 'April 2, 2026',
          link: '#',
        },
      ]);
    };

    loadNotifications();
    const interval = setInterval(loadNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

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