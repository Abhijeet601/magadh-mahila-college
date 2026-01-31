import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, Mic, BookOpen, Trophy, Heart, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      title: 'Annual Cultural Fest 2025',
      date: 'March 15, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'College Auditorium',
      category: 'Cultural',
      description: 'A celebration of art, music, dance, and cultural diversity showcasing talents from across the college.',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      featured: true,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Women Empowerment Seminar',
      date: 'February 28, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      category: 'Seminar',
      description: 'Expert speakers discuss leadership, career opportunities, and empowerment strategies for women.',
      attendees: 200,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400',
      featured: false,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Inter-College Sports Championship',
      date: 'February 20, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'Sports',
      description: 'Annual sports competition featuring basketball, volleyball, and athletics events.',
      attendees: 300,
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400',
      featured: false,
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Alumni Reunion 2024',
      date: 'December 15, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'College Campus',
      category: 'Alumni',
      description: 'Celebrating achievements and memories with graduates from various batches.',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
      featured: false,
      status: 'past',
    },
    {
      id: 5,
      title: 'Career Guidance Workshop',
      date: 'January 25, 2025',
      time: '11:00 AM - 3:00 PM',
      location: 'Conference Room',
      category: 'Workshop',
      description: 'Interactive session with industry experts on career planning and job opportunities.',
      attendees: 100,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      featured: false,
      status: 'upcoming',
    },
    {
      id: 6,
      title: 'Freshers Orientation 2025',
      date: 'January 10, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      category: 'Academic',
      description: 'Welcome program for new students with introductions to college facilities and activities.',
      attendees: 400,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      featured: false,
      status: 'upcoming',
    },
  ];

  const categories = ['All', 'Cultural', 'Seminar', 'Sports', 'Alumni', 'Workshop', 'Academic'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('upcoming'); // 'upcoming' or 'past'

  const filteredEvents = events
    .filter(event => viewMode === 'all' || event.status === viewMode)
    .filter(event => selectedCategory === 'All' || event.category === selectedCategory);

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const featuredEvents = events.filter(event => event.featured);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cultural': return Mic;
      case 'Seminar': return BookOpen;
      case 'Sports': return Trophy;
      case 'Alumni': return Heart;
      case 'Workshop': return GraduationCap;
      case 'Academic': return BookOpen;
      default: return Calendar;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('events.title', 'Events - Magadh Mahila College | College Events & Activities')}</title>
        <meta name="description" content={t('events.metaDescription', 'Discover upcoming and past events at Magadh Mahila College. From cultural festivals to academic seminars, explore our vibrant calendar of activities and celebrations.')} />
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
                  College Events
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Celebrating knowledge, creativity, and community through diverse events and activities that enrich our campus life
              </p>
            </motion.div>

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="text-primary">Featured Events</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredEvents.map((event) => {
                    const CategoryIcon = getCategoryIcon(event.category);
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full flex items-center space-x-1">
                              <CategoryIcon className="w-3 h-3" />
                              <span>{event.category}</span>
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                              {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {event.description}
                          </p>
                          <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-white rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setViewMode('upcoming')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    viewMode === 'upcoming'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground hover:bg-section'
                  }`}
                >
                  Upcoming Events ({upcomingEvents.length})
                </button>
                <button
                  onClick={() => setViewMode('past')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    viewMode === 'past'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground hover:bg-section'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => {
                const CategoryIcon = getCategoryIcon(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-card text-foreground hover:bg-section shadow-md'
                    }`}
                  >
                    {category !== 'All' && <CategoryIcon className="w-5 h-5" />}
                    <span>{category}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Events Grid */}
            <motion.div
              key={`${selectedCategory}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full flex items-center space-x-1">
                          <CategoryIcon className="w-3 h-3" />
                          <span>{event.category}</span>
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 text-white text-xs font-medium rounded-full ${
                          event.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-500'
                        }`}>
                          {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No Events Found</h3>
                <p className="text-muted-foreground">Try selecting a different category or view mode.</p>
              </motion.div>
            )}

            {/* Event Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Calendar className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <p className="text-white/90">Events Per Year</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">5000+</div>
                  <p className="text-white/90">Participants</p>
                </div>
                <div>
                  <Trophy className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <p className="text-white/90">Awards Won</p>
                </div>
                <div>
                  <Heart className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="text-white/90">Community Engagement</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
