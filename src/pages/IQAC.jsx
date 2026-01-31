import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Target, Users, Award, TrendingUp, CheckCircle, BookOpen, Lightbulb, FileText, BarChart3, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IQAC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const iqacMenuItems = [
    { label: 'Workshop', to: '/iqac/workshop' },
    { label: 'NAAC', to: '/iqac/naac' },
    { label: 'Feedback', to: '/iqac/feedback' },
    { label: 'Research', to: '/iqac/research' },
    { label: 'Extension Activities (NSS, NCC)', to: '/iqac/extension-activities' },
    { label: 'Collaboration', to: '/iqac/collaboration' },
    { label: 'Student Progression Form', to: '/iqac/student-progression-form' },
    { label: 'Student Satisfaction Survey', to: '/iqac/student-satisfaction-survey' },
    { label: 'Project Internship & Field Work', to: '/iqac/project-internship-fieldwork' },
    { label: 'Best practices 2023-24', to: '/iqac/best-practices-2023-24' },
    { label: 'Best Practices – Photo Gallery', to: '/iqac/best-practices-photo-gallery' },
  ];

  const objectives = [
    {
      icon: Target,
      title: 'Quality Enhancement',
      description: 'Develop and implement quality benchmarks for academic and administrative activities'
    },
    {
      icon: Users,
      title: 'Stakeholder Feedback',
      description: 'Collect and analyze feedback from students, faculty, alumni, and employers'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Monitor and enhance institutional processes for better outcomes'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Promote and document best practices in teaching, learning, and research'
    },
  ];

  const activities = [
    {
      icon: BookOpen,
      title: 'Workshops & Seminars',
      description: 'Regular training programs for faculty development and quality improvement'
    },
    {
      icon: FileText,
      title: 'Academic Audits',
      description: 'Comprehensive evaluation of academic programs and teaching methodologies'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Collection and analysis of institutional data for informed decision making'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Initiatives',
      description: 'Encouraging innovative teaching methods and research activities'
    },
  ];

  const committees = [
    {
      name: 'Academic Committee',
      focus: 'Curriculum development and academic standards',
      members: 'Faculty representatives and subject experts'
    },
    {
      name: 'Research Committee',
      focus: 'Research promotion and publication support',
      members: 'Research coordinators and faculty researchers'
    },
    {
      name: 'Student Welfare Committee',
      focus: 'Student satisfaction and welfare programs',
      members: 'Student representatives and counselors'
    },
    {
      name: 'Infrastructure Committee',
      focus: 'Campus facilities and maintenance',
      members: 'Administrative staff and technical experts'
    },
  ];

  const achievements = [
    'NAAC B+ Accreditation Achievement',
    'ISO Certification for Quality Management',
    'Best Practices Documentation',
    'Student Satisfaction Survey Implementation',
    'Faculty Development Programs',
    'Research Excellence Awards',
  ];

  return (
    <>
      <Helmet>
        <title>{t('iqac.title', 'IQAC - Magadh Mahila College | Internal Quality Assurance Cell')}</title>
        <meta name="description" content={t('iqac.metaDescription', 'Learn about the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College. Discover our commitment to quality education, continuous improvement, and institutional excellence.')} />
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
                <span className="text-primary">
                  Internal Quality Assurance Cell
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Driving excellence in education through systematic quality enhancement and continuous improvement initiatives
              </p>
            </motion.div>

            {/* IQAC Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6">About IQAC</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The Internal Quality Assurance Cell (IQAC) was established in accordance with NAAC guidelines to develop a system for conscious, consistent, and catalytic improvement in the overall performance of the institution.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    IQAC works towards ensuring quality enhancement and sustenance by developing and implementing quality benchmarks for various academic and administrative activities.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">NAAC Accredited</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">ISO Certified</span>
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
                      <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
                      <p className="text-muted-foreground">
                        Committed to maintaining the highest standards of educational excellence and institutional integrity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Our Objectives</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <objective.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {objective.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Key Activities</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <activity.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Committees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Quality Committees</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committees.map((committee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-section hover:bg-section/80 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {committee.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Focus:</strong> {committee.focus}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Members:</strong> {committee.members}
                    </p>
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
                <span className="text-primary">Major Achievements</span>
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
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Quality Assurance Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For quality-related queries, feedback, or suggestions, please contact our IQAC coordinator. Your input helps us maintain and improve our quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">IQAC Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">iqac@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">B+</div>
                <p className="text-muted-foreground">NAAC Grade</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <p className="text-muted-foreground">Faculty Trained</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                <p className="text-muted-foreground">Quality Score</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <p className="text-muted-foreground">Quality Initiatives</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IQAC;
