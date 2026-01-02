import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, UserCheck, CreditCard, CheckCircle, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Admissions = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: t('admissions.steps.onlineApplication.title'),
      description: t('admissions.steps.onlineApplication.description'),
      color: 'from-primary to-primary',
    },
    {
      icon: CreditCard,
      title: t('admissions.steps.applicationFee.title'),
      description: t('admissions.steps.applicationFee.description'),
      color: 'from-primary to-primary',
    },
    {
      icon: UserCheck,
      title: t('admissions.steps.documentVerification.title'),
      description: t('admissions.steps.documentVerification.description'),
      color: 'from-primary to-highlight',
    },
    {
      icon: CheckCircle,
      title: t('admissions.steps.admissionConfirmation.title'),
      description: t('admissions.steps.admissionConfirmation.description'),
      color: 'from-primary to-highlight',
    },
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'May 1, 2024' },
    { event: 'Application Deadline', date: 'June 30, 2024' },
    { event: 'Merit List Announcement', date: 'July 10, 2024' },
    { event: 'Admission Process', date: 'July 15-31, 2024' },
    { event: 'Classes Begin', date: 'August 1, 2024' },
  ];

  const eligibilityCriteria = [
    {
      program: t('admissions.undergraduate'),
      criteria: t('admissions.ugCriteria', { returnObjects: true }),
    },
    {
      program: t('admissions.postgraduate'),
      criteria: t('admissions.pgCriteria', { returnObjects: true }),
    },
    {
      program: t('admissions.diploma'),
      criteria: t('admissions.diplomaCriteria', { returnObjects: true }),
    },
  ];

  const handleApplyClick = () => {
    toast({
      title: "🚧 Application Portal",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('admissions.title')}</title>
        <meta name="description" content={t('admissions.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  {t('admissions.title2024')}
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto mb-8">
                {t('admissions.description')}
              </p>
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Apply Now
              </Button>
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
                  {t('admissions.processTitle')}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative"
                  >
                    <div className="h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-section flex items-center justify-center font-bold text-primary">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white shadow-xl border border-border"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{t('admissions.importantDates')}</h2>
                </div>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex justify-between items-center p-4 rounded-xl bg-section hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium text-foreground">{item.event}</span>
                      <span className="text-primary font-semibold">{item.date}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white shadow-xl border border-border"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="w-8 h-8 text-highlight" />
                  <h2 className="text-3xl font-bold text-foreground">{t('admissions.eligibilityCriteria')}</h2>
                </div>
                <div className="space-y-6">
                  {eligibilityCriteria.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-foreground mb-3">{item.program}</h3>
                      <ul className="space-y-2">
                        {item.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t('admissions.helpTitle')}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                {t('admissions.helpDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleApplyClick}
                  size="lg"
                  className="bg-card text-primary hover:bg-section shadow-xl"
                >
                  Contact Admissions Office
                </Button>
                <Button
                  onClick={handleApplyClick}
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-black hover:bg-primary/10 bg-white"
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;