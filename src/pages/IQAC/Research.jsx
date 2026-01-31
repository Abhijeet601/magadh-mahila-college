import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, TrendingUp, FileText, Target, Lightbulb, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Research = () => {
  const { t } = useTranslation();

  const researchStats = [
    { label: 'Publications', value: '234', change: '+15%', icon: FileText },
    { label: 'Research Projects', value: '18', change: '+25%', icon: Target },
    { label: 'Faculty Researchers', value: '67', change: '+12%', icon: Users },
    { label: 'Citations', value: '1,247', change: '+22%', icon: TrendingUp }
  ];

  const researchAreas = [
    {
      title: 'Computer Science & IT',
      publications: '45',
      projects: '6',
      funding: '₹12.5L',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Commerce & Management',
      publications: '38',
      projects: '4',
      funding: '₹8.2L',
      icon: BarChart3,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Social Sciences',
      publications: '52',
      projects: '5',
      funding: '₹6.8L',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Science & Mathematics',
      publications: '41',
      projects: '3',
      funding: '₹9.1L',
      icon: Lightbulb,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const recentPublications = [
    {
      title: 'Machine Learning Applications in Educational Assessment',
      authors: 'Dr. Priya Sharma, Dr. Rajesh Kumar',
      journal: 'International Journal of Educational Technology',
      year: '2024',
      citations: '12'
    },
    {
      title: 'Sustainable Development in Rural Bihar',
      authors: 'Dr. Anita Singh, Dr. Manoj Tiwari',
      journal: 'Journal of Rural Development Studies',
      year: '2023',
      citations: '28'
    },
    {
      title: 'Digital Transformation in Higher Education',
      authors: 'Dr. Nagendra Verma, Dr. Sunita Patel',
      journal: 'Education Technology Review',
      year: '2023',
      citations: '19'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC Research - Publications & Projects | Magadh Mahila College</title>
        <meta name="description" content="Explore research activities, publications, and academic projects at Magadh Mahila College through IQAC initiatives." />
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
                <span className="text-primary">Research & Publications</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Promoting research culture, academic publications, and innovative projects to advance knowledge and contribute to society.
              </p>
            </motion.div>

            {/* Research Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
            >
              {researchStats.map((stat, index) => (
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
                  <p className="text-muted-foreground mb-1">{stat.label}</p>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Research Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Research by Department</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {area.title}
                        </h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{area.publications}</div>
                            <div className="text-sm text-muted-foreground">Publications</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{area.projects}</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{area.funding}</div>
                            <div className="text-sm text-muted-foreground">Funding</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Recent Publications</span>
              </h2>
              <div className="space-y-6">
                {recentPublications.map((publication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {publication.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>Authors:</strong> {publication.authors}
                        </p>
                        <p className="text-muted-foreground mb-2">
                          <strong>Journal:</strong> {publication.journal}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Year: {publication.year}</span>
                          <span>Citations: {publication.citations}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          View Paper
                        </button>
                        <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                          Cite
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Research Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Research Support Services</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Publication Support</h3>
                  <p className="text-blue-700 text-sm">
                    Guidance on research writing, journal selection, and publication process.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Funding Assistance</h3>
                  <p className="text-green-700 text-sm">
                    Support for grant applications and research project funding opportunities.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Recognition Programs</h3>
                  <p className="text-purple-700 text-sm">
                    Awards and recognition for outstanding research contributions and publications.
                  </p>
                </div>
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
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Research Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For research guidance, publication support, or collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Research Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">research@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Research;
