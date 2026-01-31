import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, Award, BookOpen, Target, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Workshop = () => {
  const { t } = useTranslation();

  const workshops = [
    {
      title: 'Digital Literacy Workshop',
      date: 'March 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab 1',
      participants: '120',
      description: 'Comprehensive workshop on digital tools and online learning platforms for faculty development.',
      status: 'Upcoming',
      statusColor: 'text-blue-600',
      statusBg: 'bg-blue-100'
    },
    {
      title: 'Research Methodology Workshop',
      date: 'February 28, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Seminar Hall',
      participants: '85',
      description: 'Advanced research techniques, data analysis, and publication strategies for academic researchers.',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    },
    {
      title: 'Quality Assurance in Higher Education',
      date: 'January 20, 2024',
      time: '11:00 AM - 3:00 PM',
      location: 'Conference Room',
      participants: '95',
      description: 'NAAC accreditation process, quality benchmarks, and institutional assessment frameworks.',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    },
    {
      title: 'Student Centric Teaching Methods',
      date: 'December 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Auditorium',
      participants: '150',
      description: 'Interactive teaching techniques, assessment methods, and student engagement strategies.',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    }
  ];

  const objectives = [
    {
      icon: BookOpen,
      title: 'Faculty Development',
      description: 'Enhance teaching skills and pedagogical knowledge of faculty members'
    },
    {
      icon: Target,
      title: 'Quality Improvement',
      description: 'Implement best practices for continuous quality enhancement'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Foster innovative teaching and learning methodologies'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Support career advancement and professional development'
    }
  ];

  const stats = [
    { label: 'Workshops Conducted', value: '24', icon: Calendar },
    { label: 'Faculty Trained', value: '450+', icon: Users },
    { label: 'Hours of Training', value: '180+', icon: Clock },
    { label: 'Success Rate', value: '98%', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC Workshops - Faculty Development | Magadh Mahila College</title>
        <meta name="description" content="Explore IQAC workshops and faculty development programs at Magadh Mahila College. Professional training sessions for quality enhancement." />
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
                <span className="text-primary">IQAC Workshops</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Professional development workshops designed to enhance teaching quality, research capabilities, and institutional excellence.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Workshop Objectives</span>
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

            {/* Workshop List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Recent Workshops</span>
              </h2>
              <div className="space-y-8">
                {workshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-6 lg:mb-0">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-foreground">
                            {workshop.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${workshop.statusBg} ${workshop.statusColor}`}>
                            {workshop.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-lg mb-4">
                          {workshop.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{workshop.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{workshop.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{workshop.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{workshop.participants} participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Workshop Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Workshop Categories</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Teaching & Learning</h3>
                  <p className="text-blue-700 text-sm">
                    Workshops focused on pedagogy, curriculum development, and student engagement techniques.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Research & Innovation</h3>
                  <p className="text-green-700 text-sm">
                    Training sessions on research methodologies, publication strategies, and innovation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Quality Assurance</h3>
                  <p className="text-purple-700 text-sm">
                    Sessions on accreditation, quality standards, and institutional assessment processes.
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
              <Calendar className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Workshop Coordination</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Interested in organizing workshops or need information about upcoming faculty development programs?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Workshop Coordinator</div>
                  <div className="text-white/80">Dr. Nagendra Prasad Verma</div>
                  <div className="text-white/80">workshops@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Workshop;
