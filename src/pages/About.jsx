import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const About = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const aboutSections = [
    { path: '/about/brief-profile', title: 'Brief Profile', description: 'Learn about the history and overview of Magadh Mahila College' },
    { path: '/about/principal', title: 'Principal Profile', description: 'Meet our esteemed Principal and leadership team' },
    { path: '/about/previous-principals', title: 'Previous Principals', description: 'Honorable former principals of the college' },
    { path: '/about/emblem', title: 'College Emblem', description: 'The symbolic representation of our institution' },
    { path: '/about/roll-of-honor', title: "Students' Roll of Honor", description: 'Celebrating our outstanding students' },
    { path: '/about/code-of-ethics', title: 'Code of Ethics', description: 'Our commitment to ethical standards' },
    { path: '/about/code-of-conduct', title: 'Code of Conduct', description: 'Guidelines for student behavior and conduct' },
    { path: '/about/melc', title: 'MELC', description: 'Modern Education and Learning Center' },
    { path: '/about/vision-mission', title: 'Vision & Mission', description: 'Our goals and objectives' },
    { path: '/about/best-practices', title: 'Best Practices', description: 'Excellence in education and administration' },
    { path: '/about/feedback-forms', title: 'Feedback Forms', description: 'Share your thoughts and suggestions' },
    { path: '/about/environment-policy', title: 'Environmental Policy', description: 'Our commitment to sustainability' },
    { path: '/about/mou', title: 'MOU', description: 'Memorandums of Understanding' },
    { path: '/about/future-plans', title: 'Future Plans', description: 'Our roadmap for the future' },
    { path: '/about/milestones', title: 'Milestones', description: 'Key achievements and landmarks' },
    { path: '/about/visitors-note', title: "Visitor's Note", description: 'Messages from our esteemed visitors' },
    { path: '/about/management-administration', title: 'Management & Administration', description: 'Governance and administrative structure' },
    { path: '/about/mis', title: 'MIS', description: 'Management Information System' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('pages.about.title')}</title>
        <meta name="description" content={t('pages.about.metaDescription')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('pages.about.mainTitle')}
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('pages.about.subtitle')}
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">{t('pages.about.exploreSectionsTitle')}</h2>
            <div className="space-y-4">
              {Object.entries(t('pages.about.sections', { returnObjects: true })).map(([key, section], sectionIndex) => {
                const isOpen = openSections.includes(sectionIndex);
                return (
                  <Accordion key={sectionIndex} className="w-full">
                    <AccordionItem>
                      <AccordionTrigger
                        className="text-xl font-semibold text-primary hover:text-primary/80"
                        onClick={() => toggleSection(sectionIndex)}
                        isOpen={isOpen}
                      >
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent isOpen={isOpen}>
                        <div className="pt-4">
                          <p className="text-gray-700 mb-4">
                            {section.description}
                          </p>
                          <Link
                            to={`/about/${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`}
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            {t('pages.about.learnMore')}
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Magadh Mahila College stands as a beacon of women's empowerment and academic excellence.
              Established in 1946, we have been nurturing young minds and shaping futures for generations.
              Our institution is committed to providing quality education, fostering holistic development,
              and creating an environment where every student can thrive and achieve their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
