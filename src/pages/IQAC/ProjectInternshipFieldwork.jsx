import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users } from 'lucide-react';

const ProjectInternshipFieldwork = () => {
  return (
    <>
      <Helmet>
        <title>Project Internship & Field Work - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Explore project internships and fieldwork opportunities at Magadh Mahila College." />
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
                <span className="text-primary">Project Internship & Field Work</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Practical learning experiences through internships and fieldwork programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 bg-gray-50 rounded-2xl"
            >
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Detailed information about project internships and fieldwork opportunities will be available here.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectInternshipFieldwork;
