import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Library, Microscope, Home, Users, Music, Dumbbell, X, Recycle, Zap, Lightbulb, Award, Target, Shield, TreePine, Droplets, Fish, Bird } from 'lucide-react';

const CampusLife = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const facilities = [
    {
      icon: Library,
      title: 'Central Library',
      description: 'Extensive collection of books, journals, and digital resources',
      color: 'from-primary to-primary',
    },
    {
      icon: Microscope,
      title: 'Modern Laboratories',
      description: 'State-of-the-art labs for science and computer programs',
      color: 'from-primary to-primary',
    },
    {
      icon: Home,
      title: 'Hostel Facilities',
      description: '3 hostels accommodating 640 students with modern amenities',
      color: 'from-primary to-highlight',
    },
    {
      icon: Users,
      title: 'Student Activities',
      description: 'Vibrant clubs, societies, and cultural programs',
      color: 'from-primary to-highlight',
    },
    {
      icon: Music,
      title: 'Cultural Center',
      description: 'Auditorium and spaces for music, dance, and drama',
      color: 'from-primary to-highlight',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities for fitness and wellness',
      color: 'from-primary to-highlight',
    },
  ];

  const galleryImages = [
    { id: 1, description: 'Modern college library with students studying' },
    { id: 2, description: 'Science laboratory with advanced equipment and students' },
    { id: 3, description: 'College hostel building exterior view' },
    { id: 4, description: 'Students participating in cultural dance performance' },
    { id: 5, description: 'College sports field with students playing' },
    { id: 6, description: 'College auditorium during annual function' },
  ];

  return (
    <>
      <Helmet>
        <title>Campus Life - Magadh Mahila College | Facilities & Student Life</title>
        <meta name="description" content="Experience vibrant campus life at Magadh Mahila College. Explore our modern facilities including library, labs, hostels, sports complex, and cultural activities." />
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
                  Campus Life
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Experience a vibrant and enriching campus environment designed for holistic development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  World-Class Facilities
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                      <div className="h-full p-8 rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-section rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                      
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <facility.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 group-hover:text-highlight transition-colors">
                        {facility.title}
                      </h3>
                      <p className="relative z-10 text-muted-foreground">
                        {facility.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ACTIVITIES SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  Campus Activities & Initiatives
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Internal Quality Assurance Cell (IQAC)</h3>
                  <p className="text-muted-foreground">
                    IQAC undertakes various engagement and developmental activities for all-round excellence. Orientation of mission, vision, values and leadership practices towards good governance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Recycle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Solid-Liquid Waste Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive solid waste management system at the entrance. Segregation, collection and processing of waste in four categories with treatment of over 90% waste on campus.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Droplets className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Rain Water Harvesting</h3>
                  <p className="text-muted-foreground">
                    Unique feature as a valuable alternative water resource. Helps in replenishing ground water resources and relieves water shortages.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Fish className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Zoological Garden & Aquarium</h3>
                  <p className="text-muted-foreground">
                    First college in the state with Zoological Garden and large Aquarium. Aquatic Park with ducks, swans and various fish species for natural learning.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Magadh Mahila Entrepreneurs Incubation Centre</h3>
                  <p className="text-muted-foreground">
                    First incubation centre in the state for women entrepreneurs. Provides technical support, training and expert guidance for business incubation and self-employment.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-xl bg-card shadow-lg border border-border"
                >
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Solar Power Plant</h3>
                  <p className="text-muted-foreground">
                    100 KWp Solar Power Plant on Main Administrative Building roof. Generates electricity from renewable energy, saving 50% monthly electricity expenses.
                  </p>
                </motion.div>
              </div>

              {/* ENVIRONMENTAL POLICY SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl mb-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <TreePine className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">Environmental Sustainability</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">
                  The College is strongly committed to sustainable development through its mechanisms of environmental management. College has its own functional 'Environment Policy' and 'Centre for Green Initiatives' to guide ongoing improvements in environmental concerns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">Environmental Initiatives</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Tobacco free campus</li>
                      <li>• Polythene free campus</li>
                      <li>• Plantation drives</li>
                      <li>• Sanitation drives</li>
                      <li>• Steel plates/cups in cafeteria</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">Green Practices</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Rain Water Harvesting System</li>
                      <li>• Solid-Liquid Waste Management</li>
                      <li>• Solar Energy Generation</li>
                      <li>• Botanical Garden</li>
                      <li>• Zoological & Aquatic Conservation</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* STUDENT DEVELOPMENT SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">Student Development & Activities</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">
                  The activities outside of the classroom give opportunities to students to participate in areas of their interest. Beyond the classroom life, outdoor learning is facilitated and is a regular feature for students of professional courses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Anti-Ragging Cell</h4>
                    <p className="text-muted-foreground">Ragging in any form is strictly prohibited. Protected and insured by Anti Ragging Cell.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Student Societies</h4>
                    <p className="text-muted-foreground">Science Society, NSS, NCC, IT Society, Students' Counselling Cell, Grievance Redressal Cell.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Cultural Activities</h4>
                    <p className="text-muted-foreground">Language Lab, Literary Society, Gender Knowledge Centre, Green Earth Brigade, Red Ribbon Club.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  Campus Gallery
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image)}
                    className="relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      alt={image.description}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navbar/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">Click to view</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <h2 className="text-3xl font-bold text-center mb-8">Student Life Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-white/90">Student Clubs & Societies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-white/90">Annual Events & Activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">640</div>
                  <p className="text-white/90">Hostel Accommodation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img 
                className="w-full h-auto rounded-2xl shadow-2xl" 
                alt={selectedImage.description}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampusLife;