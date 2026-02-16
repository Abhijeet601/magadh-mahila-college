import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, Brain, ScrollText, Globe, PenTool, Music, Users, X, Sparkles, Star, Zap } from 'lucide-react';
import { 
  AnimatedCard, 
  AnimatedIcon, 
  FloatingElement, 
  GradientText,
  StaggerContainer,
  FadeInUp,
  BlurFadeIn,
  HoverGlow
} from '../../components/animations/AnimatedCard';


const Humanities = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = [
    {
      name: 'Hindi',
      icon: BookOpen,
      description: 'Study of Hindi language, literature, and cultural heritage',
      color: 'from-primary to-primary',
      highlights: 'मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया। यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।',
      faculty: [
        { name: 'Dr. Shipra Prabha', designation: 'HOD, Hindi', image: 'Dr. Shipra Prabha, HOD, Hindi.jpeg' },
        { name: 'Dr. Aasha Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Jyoti Dubey', designation: 'Assistant Professor, Hindi', image: 'Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Preeti Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg' }
      ]
    },
    {
      name: 'English',
      icon: PenTool,
      description: 'English language proficiency and literary studies',
      color: 'from-primary to-highlight',
      highlights: 'The English department focuses on developing strong communication skills, literary analysis, and cultural understanding through comprehensive language and literature courses.',
      faculty: [
        { name: 'Dr. Archana Jaiswal', designation: 'Associate Professor, HOD English', image: 'Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg' }
      ]
    },
    {
      name: 'Maithili',
      icon: ScrollText,
      description: 'Regional language and literature of Mithila region',
      color: 'from-primary to-highlight',
      highlights: 'The Maithili department preserves and promotes the rich literary tradition of the Mithila region through language instruction and cultural studies.',
      faculty: []
    },
    {
      name: 'Persian',
      icon: Globe,
      description: 'Classical Persian language and Islamic studies',
      color: 'from-primary to-highlight',
      highlights: 'The Persian department offers courses in classical Persian literature, Islamic studies, and cultural heritage of Persian-speaking regions.',
      faculty: []
    },
    {
      name: 'Philosophy',
      icon: Brain,
      description: 'Critical thinking, ethics, and philosophical inquiry',
      color: 'from-primary to-highlight',
      highlights: 'The Philosophy department encourages critical thinking and ethical reasoning through the study of various philosophical traditions and contemporary issues.',
      faculty: [
        { name: 'Dr. Sanjay Kumar Priyadarshi', designation: 'Assistant Professor, Philosophy', image: 'Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg' },
        { name: 'Ms. Ranjana Yadav', designation: 'Assistant Professor, Philosophy', image: 'Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg' }
      ]
    },
    {
      name: 'Sanskrit',
      icon: Languages,
      description: 'Ancient Sanskrit language and Vedic literature',
      color: 'from-primary to-highlight',
      highlights: 'The Sanskrit department provides instruction in ancient Sanskrit language, Vedic literature, and classical Indian philosophy.',
      faculty: []
    },
    {
      name: 'Urdu',
      icon: Music,
      description: 'Urdu language, poetry, and cultural studies',
      color: 'from-primary to-highlight',
      highlights: 'The Urdu department offers comprehensive study of Urdu language, poetry, literature, and cultural traditions.',
      faculty: [
        { name: 'Dr. Md. Rizwan', designation: 'Assistant Professor, Urdu', image: 'Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg' },
        { name: 'Dr. Sohail Anwer', designation: 'Assistant Professor, Urdu', image: 'Dr. Sohail Anwer, Assistant Professor, Urdu.pdf' }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Humanities - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Humanities programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100 relative overflow-hidden"
          >
            {/* Animated background decoration */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-highlight/5 rounded-full"
              animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <FloatingElement>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                  <GradientText className="text-4xl md:text-5xl font-bold">
                    Humanities
                  </GradientText>
                  <motion.span
                    className="inline-block ml-3"
                    animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-500" />
                  </motion.span>
                </h1>
              </FloatingElement>


            <BlurFadeIn delay={0.2}>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  The Humanities department at Magadh Mahila College offers comprehensive programs aligned with NEP 2020 guidelines, focusing on critical thinking, cultural understanding, and interdisciplinary learning.
                </p>
              </div>
            </BlurFadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-6" staggerDelay={0.1}>
              <FadeInUp>
                <HoverGlow className="h-full">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 h-full">
                    <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Programs Offered
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                      {['Bachelor of Arts (BA) - 4 Year Program', 'Master of Arts (MA) in various disciplines', 'Certificate and Vocational courses'].map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </HoverGlow>
              </FadeInUp>

              <FadeInUp>
                <HoverGlow className="h-full">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 h-full">
                    <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Key Features
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                      {['Interdisciplinary curriculum', 'Focus on skill development', 'Research-oriented learning', 'Cultural and ethical studies'].map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </HoverGlow>
              </FadeInUp>
            </StaggerContainer>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary p-4 rounded-r-lg"
            >
              <p className="text-blue-800 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.span>
                <strong>Note:</strong> Detailed curriculum and course information will be available here soon.
              </p>
            </motion.div>
          </div>
        </motion.div>



          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              <GradientText className="text-4xl font-bold">
                Subjects Offered
              </GradientText>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <AnimatedCard
                  key={index}
                  index={index}
                  onClick={() => setSelectedSubject(subject)}
                  className="h-full"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">
                    <div className="relative z-10">
                      <AnimatedIcon icon={subject.icon} color={subject.color} />
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {subject.description}
                      </p>

                      {/* Learn more indicator */}
                      <motion.div
                        className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        Explore 
                        <motion.span 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {selectedSubject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSubject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default"
            >
              <motion.button
                onClick={() => setSelectedSubject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSubject.color} flex items-center justify-center shadow-lg`}
                  >
                    <selectedSubject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold text-foreground"
                    >
                      Department of {selectedSubject.name}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground text-lg"
                    >
                      {selectedSubject.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 mb-8"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Highlights of the Department
                    </h3>
                    <p className="text-foreground whitespace-pre-line">{selectedSubject.highlights}</p>
                  </div>

                  {selectedSubject.faculty.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500"
                    >
                      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Faculty Members
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedSubject.faculty.map((member, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                          >
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden bg-gray-200"
                            >
                              {member.image ? (
                                <img
                                  className="w-full h-full object-cover"
                                  alt={member.name}
                                  src={`/images/faculty/${member.image}`}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                              ) : null}
                              <div 
                                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 text-primary font-bold text-xl"
                                style={{ display: member.image ? 'none' : 'flex' }}
                              >
                                {member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                              </div>
                            </motion.div>
                            <h4 className="text-sm font-semibold text-center text-foreground">{member.name}</h4>
                            <p className="text-xs text-center text-muted-foreground">{member.designation}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Humanities;
