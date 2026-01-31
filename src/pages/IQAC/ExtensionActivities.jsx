import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Target, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExtensionActivities = () => {
  const { t } = useTranslation();

  const activities = [
    {
      title: 'NSS (National Service Scheme)',
      description: 'Community service and social awareness programs for students.',
      participants: '450',
      events: '24',
      icon: Heart,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'NCC (National Cadet Corps)',
      description: 'Military training and discipline development program.',
      participants: '120',
      events: '18',
      icon: Award,
      color: 'from-green-500 to-green-600'
    }
  ];

  const recentEvents = [
    {
      title: 'Blood Donation Camp',
      date: 'March 10, 2024',
      location: 'College Auditorium',
      participants: '85',
      type: 'NSS'
    },
    {
      title: 'Tree Plantation Drive',
      date: 'February 15, 2024',
      location: 'College Campus',
      participants: '150',
      type: 'NSS'
    },
    {
      title: 'NCC Annual Parade',
      date: 'January 26, 2024',
      location: 'College Ground',
      participants: '120',
      type: 'NCC'
    }
  ];

  const stats = [
    { label: 'Total Participants', value: '570', icon: Users },
    { label: 'Events Conducted', value: '42', icon: Calendar },
    { label: 'Community Impact', value: 'High', icon: Target },
    { label: 'Active Programs', value: '2', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>IQAC Extension Activities - NSS & NCC | Magadh Mahila College</title>
        <meta name="description" content="Explore extension activities including NSS and NCC programs at Magadh Mahila College for community service and student development." />
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
                <span className="text-primary">Extension Activities</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                NSS and NCC programs fostering community service, leadership, and holistic development of students.
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

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Our Programs</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {activity.title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-6">
                          {activity.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-primary">{activity.participants}</div>
                            <div className="text-sm text-muted-foreground">Participants</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-primary">{activity.events}</div>
                            <div className="text-sm text-muted-foreground">Events</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Recent Events</span>
              </h2>
              <div className="space-y-6">
                {recentEvents.map((event, index) => (
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
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {event.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.type === 'NSS' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.participants} participants
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
              <Heart className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Join Extension Activities</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Be part of community service and leadership development programs. Contact our extension activities coordinators for participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">NSS Program Officer</div>
                  <div className="text-white/80">Dr. Anita Singh</div>
                  <div className="text-white/80">nss@magadhmahilacollege.org</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">NCC Caretaker</div>
                  <div className="text-white/80">Capt. Rajesh Kumar</div>
                  <div className="text-white/80">ncc@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExtensionActivities;
