import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const BestPractices2023 = () => {
  return (
    <>
      <Helmet>
        <title>Best Practices 2023-24 - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Explore best practices and innovative initiatives implemented in 2023-24 at Magadh Mahila College." />
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
                <span className="text-primary">Best Practices 2023-24</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Innovative practices and successful initiatives implemented during the academic year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 bg-gray-50 rounded-2xl"
            >
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Detailed information about best practices for 2023-24 will be available here.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BestPractices2023;
