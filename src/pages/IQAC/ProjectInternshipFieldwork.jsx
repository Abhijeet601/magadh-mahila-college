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

            {/* Project Internship & Field Work Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Project Internship & Field Work Documents</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Documents Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">Project Internship & Field Work Reports</h3>
                  <p className="text-muted-foreground mb-6">Documents related to project internships and fieldwork activities.</p>
                  <div className="space-y-2">
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Field-WorkInternship-Project.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Field-WorkInternship-Project.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Internship_project_22-23.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Internship_project_22-23.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/mmc_Internship.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      mmc_Internship.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Project-Internship-and-Field-Work-2018-19.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Project-Internship-and-Field-Work-2018-19.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Project-Internship-Field-Work-23-24.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Project-Internship-Field-Work-23-24.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Project-internship-field-work-2021-22-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Project-internship-field-work-2021-22-1.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/Project%20Internship%20%26%20Field%20Work/Project-Internship-Field-Work-Session-2019-2020.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Project-Internship-Field-Work-Session-2019-2020.pdf
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectInternshipFieldwork;
