import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Newspaper, TrendingUp, Award, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      title: 'Magadh Mahila College Awarded B+ Grade in NAAC Accreditation',
      date: 'December 15, 2024',
      author: 'College Administration',
      category: 'Achievement',
      excerpt: 'The college has been awarded B+ grade in the 3rd cycle of NAAC accreditation, recognizing our commitment to quality education.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      featured: true,
    },
    {
      id: 2,
      title: 'New Computer Lab Inauguration',
      date: 'December 10, 2024',
      author: 'IT Department',
      category: 'Infrastructure',
      excerpt: 'State-of-the-art computer lab with latest technology inaugurated to enhance digital learning capabilities.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      featured: false,
    },
    {
      id: 3,
      title: 'Annual Cultural Fest 2024 Success',
      date: 'December 5, 2024',
      author: 'Cultural Committee',
      category: 'Events',
      excerpt: 'Annual cultural fest witnessed participation from over 500 students showcasing diverse talents and creativity.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      featured: false,
    },
    {
      id: 4,
      title: 'Research Paper Publication by Faculty',
      date: 'November 28, 2024',
      author: 'Research Cell',
      category: 'Research',
      excerpt: 'Faculty members publish groundbreaking research papers in international journals on women empowerment.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      featured: false,
    },
    {
      id: 5,
      title: 'Sports Championship Victory',
      date: 'November 20, 2024',
      author: 'Sports Department',
      category: 'Sports',
      excerpt: 'College basketball team wins inter-college championship, bringing home the trophy for the third consecutive year.',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400',
      featured: false,
    },
    {
      id: 6,
      title: 'Alumni Reunion 2024 Highlights',
      date: 'November 15, 2024',
      author: 'Alumni Association',
      category: 'Alumni',
      excerpt: 'Successful alumni reunion brings together graduates from various batches to celebrate achievements and memories.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
      featured: false,
    },
  ];

  const categories = ['All', 'Achievement', 'Infrastructure', 'Events', 'Research', 'Sports', 'Alumni'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <>
      <Helmet>
        <title>{t('news.title', 'News - Magadh Mahila College | Latest Updates & Announcements')}</title>
        <meta name="description" content={t('news.metaDescription', 'Stay updated with the latest news, achievements, and announcements from Magadh Mahila College. Read about our recent developments and success stories.')} />
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
                  Latest News
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Stay informed about our achievements, events, and developments that shape the future of women's education
              </p>
            </motion.div>

            {/* Featured News */}
            {featuredNews.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="text-primary">Featured News</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((news) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{news.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{news.author}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground hover:bg-section shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* News Grid */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{news.author}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Newspaper className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <p className="text-white/90">News Articles</p>
                </div>
                <div>
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <p className="text-white/90">Achievements</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <p className="text-white/90">Awards Won</p>
                </div>
                <div>
                  <BookOpen className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <p className="text-white/90">Publications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
