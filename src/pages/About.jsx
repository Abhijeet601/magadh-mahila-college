import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Target, Eye, CheckCircle, Calendar, GraduationCap, Wifi, Coffee, Dumbbell, Trees, Fish, Bird, BookOpen, Users, MapPin } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const timeline = [
    { year: '1946', event: t('about.collegeFounded'), description: t('about.collegeFoundedDesc') },
    { year: '1960', event: t('about.patnaAffiliation'), description: t('about.patnaAffiliationDesc') },
    { year: '1980', event: t('about.infrastructureExpansion'), description: t('about.infrastructureExpansionDesc') },
    { year: '2000', event: t('about.ugcRecognition'), description: t('about.ugcRecognitionDesc') },
    { year: '2015', event: t('about.naacAccreditation'), description: t('about.naacAccreditationDesc') },
    { year: '2023', event: t('about.modernCampus'), description: t('about.modernCampusDesc') },
  ];

  const accreditations = [
    'NAAC B+ Accredited',
    'UGC Recognized',
    'Patna University Affiliated',
    'ISO Certified Campus',
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary dark:text-blue-400">
                  {t('about.briefProfile')}
                </span>
              </h1>
                <p className="text-xl text-foreground dark:text-gray-200 max-w-3xl mx-auto">
                {t('about.collegeDescription')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <video
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  controls
                  muted
                  loop
                  autoPlay
                >
                  <source src="/main%20gate%20video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground"></h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.established1946')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.comprehensivePrograms')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.committedTo')}
                </p>
              </motion.div>
            </div>



            {/* CAMPUS FACILITIES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  {t('about.campusFacilities')}
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.locationCampus')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.locationCampusDesc')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.academicFacilities')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.academicFacilitiesDesc')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Wifi className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.modernAmenities')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.modernAmenitiesDesc')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Trees className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Green Initiatives</h3>
                  <p className="text-muted-foreground">
                    Botanical garden and recreation facilities. The campus is equipped with latest teaching aids and is Wi-Fi enabled.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Fish className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.zoologicalGarden')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.zoologicalGardenDesc')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Bird className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.aquaticPark')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.aquaticParkDesc')}
                  </p>
                </motion.div>
              </div>

              {/* LIBRARY SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-center mb-6">
                  <BookOpen className="w-16 h-16 text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground dark:text-white mb-6">{t('about.medhaKnowledgeCentre')}</h3>
                <p className="text-muted-foreground dark:text-gray-300 text-center max-w-4xl mx-auto mb-6">
                  {t('about.medhaDesc')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-xl">
                    <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">{t('about.resourcesAvailable')}</h4>
                    <ul className="text-muted-foreground dark:text-gray-300 space-y-2">
                      <li>• Books, Reference Books, Rare Books</li>
                      <li>• Journals, Periodicals, Newspaper</li>
                      <li>• Previous Year Question Papers</li>
                      <li>• Photo copying facility, e-journals</li>
                      <li>• Audio-Video Materials</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-xl">
                    <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">{t('about.digitalServices')}</h4>
                    <ul className="text-muted-foreground dark:text-gray-300 space-y-2">
                      <li>• INFLIBNET facility with Network Centre</li>
                      <li>• Access and download e-resources</li>
                      <li>• KOHA software and OPAC facility</li>
                      <li>• Barcode online circulation system</li>
                      <li>• Linked with National Digital Library</li>
                      <li>• Special software for visually challenged students</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  {t('about.ourJourney')}
                </span>
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-highlight" />
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative mb-12 ${
                      index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="md:w-1/2">
                      <div className="p-6 rounded-2xl bg-card shadow-lg border border-border">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-highlight border-4 border-white shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary dark:bg-gray-800 text-primary-foreground dark:text-white"
            >
              <div className="flex items-center justify-center mb-8">
                <Award className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-center mb-8">{t('about.accreditationsRecognitions')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accreditations.map((accreditation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-section/10 dark:bg-gray-700/50 backdrop-blur-sm"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">{accreditation}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
