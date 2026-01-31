import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, CheckCircle, FileText, TrendingUp, Users, Target, Shield, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NAAC = () => {
  const { t } = useTranslation();

  const criteria = [
    {
      title: 'Curricular Aspects',
      score: '3.45/4',
      description: 'Curriculum design, academic flexibility, and learning outcomes',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Teaching-Learning & Evaluation',
      score: '3.52/4',
      description: 'Teaching methods, student assessment, and learning environment',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Research, Innovations & Extension',
      score: '3.28/4',
      description: 'Research output, innovation, and community engagement',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Infrastructure & Learning Resources',
      score: '3.61/4',
      description: 'Physical facilities, library, and technological infrastructure',
      icon: Shield,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Student Support & Progression',
      score: '3.49/4',
      description: 'Student services, progression rates, and support systems',
      icon: TrendingUp,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Governance, Leadership & Management',
      score: '3.55/4',
      description: 'Institutional governance, leadership, and administrative efficiency',
      icon: Award,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Institutional Values & Best Practices',
      score: '3.42/4',
      description: 'Ethics, values, and implementation of best practices',
      icon: Star,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const achievements = [
    'B+ Grade Accreditation (3.45 CGPA)',
    'NAAC Re-accreditation Completed',
    'Quality Assurance Framework Implemented',
    'Best Practices Documentation',
    'Stakeholder Feedback System',
    'Continuous Improvement Mechanisms'
  ];

  const stats = [
    { label: 'NAAC Grade', value: 'B+', icon: Award },
    { label: 'CGPA Score', value: '3.45/4', icon: TrendingUp },
    { label: 'Valid Till', value: '2028', icon: CheckCircle },
    { label: 'Criteria Met', value: '7/7', icon: Target }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC NAAC - Accreditation & Quality | Magadh Mahila College</title>
        <meta name="description" content="Explore NAAC accreditation details, assessment criteria, and quality assurance processes at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">NAAC Accreditation</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                National Assessment and Accreditation Council evaluation framework ensuring quality education and institutional excellence.
              </p>
            </motion.div>

            {/* Overall Score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center justify-center w-48 h-48 bg-gradient-to-r from-primary to-highlight rounded-full mb-8">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">B+</div>
                  <div className="text-xl">Grade</div>
                  <div className="text-lg">3.45/4 CGPA</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">NAAC Accreditation Status</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Successfully accredited with B+ grade, demonstrating commitment to quality education and continuous improvement.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Assessment Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Assessment Criteria Scores</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {criteria.map((criterion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${criterion.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <criterion.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {criterion.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {criterion.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl font-bold text-primary">
                            {criterion.score}
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 bg-gradient-to-r ${criterion.color} rounded-full`}
                              style={{ width: `${(parseFloat(criterion.score.split('/')[0]) / parseFloat(criterion.score.split('/')[1])) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">NAAC Achievements</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg border border-border"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About NAAC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6">About NAAC</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the University Grants Commission (UGC) to assess and accredit institutions of higher education in India.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    NAAC evaluates colleges and universities on seven criteria, providing grades from A++ to C based on the Cumulative Grade Point Average (CGPA) earned by the institution.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Comprehensive quality assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Continuous improvement framework</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Stakeholder confidence building</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-highlight/10 rounded-3xl p-8">
                    <div className="text-center">
                      <Award className="w-24 h-24 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">Quality Recognition</h3>
                      <p className="text-muted-foreground">
                        NAAC accreditation serves as a benchmark for quality assurance and institutional excellence in higher education.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">NAAC Coordination</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For NAAC-related queries, accreditation details, or quality assurance information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">NAAC Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">naac@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NAAC;
