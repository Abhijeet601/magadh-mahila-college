import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';

const StudentSatisfactionSurvey = () => {
  return (
    <>
      <Helmet>
        <title>Student Satisfaction Survey - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Participate in student satisfaction surveys to help improve academic quality at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Student Satisfaction Survey</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Your feedback helps us improve the quality of education and campus facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 bg-gray-50 rounded-2xl"
            >
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Share Your Feedback</h2>
              <p className="text-muted-foreground mb-6">
                Help us understand your experience and improve our services.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Take Survey
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentSatisfactionSurvey;
