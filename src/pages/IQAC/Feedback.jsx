import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, ChevronDown, Users, Heart, GraduationCap, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IQACFeedback = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const feedbackForms = [
    {
      label: 'Student Feedback Form',
      to: '/iqac/feedback/student',
      icon: Users,
      description: 'Share your feedback as a current student'
    },
    {
      label: 'Parents Feedback Form',
      to: '/iqac/feedback/parents',
      icon: Heart,
      description: 'Provide feedback as a parent or guardian'
    },
    {
      label: 'Teachers Feedback Form',
      to: '/iqac/feedback/teachers',
      icon: GraduationCap,
      description: 'Share insights as faculty member'
    },
    {
      label: 'Alumni Feedback Form',
      to: '/iqac/feedback/alumni',
      icon: Users,
      description: 'Contribute as a former student'
    },
    {
      label: 'Industry Feedback Form',
      to: '/iqac/feedback/industry',
      icon: Building,
      description: 'Provide industry perspective'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('feedback.title', 'Feedback Forms - IQAC | Magadh Mahila College')}</title>
        <meta name="description" content={t('feedback.metaDescription', 'Access various feedback forms to help us improve the quality of education and services at Magadh Mahila College.')} />
      </Helmet>

      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Feedback Forms</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Your feedback is invaluable in helping us maintain and improve the quality of education and services at Magadh Mahila College. Choose the appropriate form below to share your insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {feedbackForms.map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden"
              >
                <Link to={form.to} className="block p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <form.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {form.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {form.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    <span>Fill Form</span>
                    <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-primary text-primary-foreground rounded-3xl text-center"
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Why Your Feedback Matters</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Your honest feedback helps us identify areas for improvement, maintain high educational standards, and ensure that Magadh Mahila College continues to provide exceptional learning experiences for all students.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Quality Enhancement</div>
                <div className="text-white/80 text-sm">Continuous improvement of academic programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Stakeholder Engagement</div>
                <div className="text-white/80 text-sm">Inclusive approach to quality assurance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Institutional Excellence</div>
                <div className="text-white/80 text-sm">Maintaining high standards of education</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IQACFeedback;
