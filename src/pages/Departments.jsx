import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Palette, Microscope, Users, Briefcase, MonitorSpeaker, X, GraduationCap, Award, Target } from 'lucide-react';

const Departments = () => {
  const { t } = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departmentIcons = {
    'Department of Hindi': BookOpen,
    'Department of English': BookOpen,
    'Department of Mathematics': Target,
    'Department of Physics': Microscope,
    'Department of Chemistry': Microscope,
    'Department of Botany': Microscope,
    'Department of Zoology': Microscope,
    'Department of Psychology': Users,
    'Department of Sociology': Users,
    'Department of Economics': Briefcase,
    'Department of Philosophy': BookOpen,
    'Department of Urdu': BookOpen,
    'Department of Home Science': Award,
    'Department of Political Science': Users,
  };

  const departments = [
    {
      name: 'Department of Hindi',
      icon: BookOpen,
      description: 'Comprehensive study of Hindi language, literature, and linguistics',
      color: 'from-primary to-primary',
      highlights: `मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया।

यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।`,
      faculty: [
        { name: 'Dr. Shipra Prabha', designation: 'HOD, Hindi', image: 'Dr. Shipra Prabha, HOD, Hindi.jpeg' },
        { name: 'Dr. Aasha Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Jyoti Dubey', designation: 'Assistant Professor, Hindi', image: 'Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Preeti Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg' }
      ]
    },
    {
      name: 'Department of English',
      icon: BookOpen,
      description: 'English language, literature, and communication skills development',
      color: 'from-primary to-highlight',
      highlights: 'The Department of English focuses on developing strong communication skills, literary analysis, and critical thinking through comprehensive study of English literature from various periods and genres.',
      faculty: [
        { name: 'Dr. Archana Jaiswal', designation: 'Associate Professor, HOD English', image: 'Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg' }
      ]
    },
    {
      name: 'Department of Mathematics',
      icon: Target,
      description: 'Pure and applied mathematics with emphasis on problem-solving skills',
      color: 'from-primary to-highlight',
      highlights: 'The Mathematics Department provides rigorous training in mathematical concepts, analytical thinking, and computational skills essential for various scientific and technological fields.',
      faculty: [
        { name: 'Poonam Kumari', designation: 'Professor, HOD, Mathematics', image: 'Poonam Kumari, Professor, HOD,  Mathematics.jpeg' },
        { name: 'Dr. Binay Kumar', designation: 'Assistant Professor, Department of Mathematics', image: 'Dr. Binay Kumar, Assistant Professor, Department of Mathematics.jpeg' }
      ]
    },
    {
      name: 'Department of Physics',
      icon: Microscope,
      description: 'Fundamental and applied physics with modern laboratory facilities',
      color: 'from-primary to-highlight',
      highlights: 'The Physics Department offers comprehensive education in classical and modern physics, supported by well-equipped laboratories for practical learning and research.',
      faculty: [
        { name: 'Dr. Sonu Rani', designation: 'HOD Physics', image: 'Dr. Sonu Rani, HOD Physics.jpeg' },
        { name: 'Dr. Manish Kumar Verma', designation: 'Assistant Professor, Physics Coordinator, BCA', image: 'Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg' },
        { name: 'Dr. Pankaj Kumar Baitha', designation: 'Assistant Professor, Physics', image: 'Dr. Pankaj Kumar Baitha, Assistant Professor, Physics.jpeg' },
        { name: 'Dr. Priti Mishra', designation: 'Assistant Professor, Physics', image: 'Dr. Priti Mishra, Assistant Professor, Physics.jpeg' }
      ]
    },
    {
      name: 'Department of Chemistry',
      icon: Microscope,
      description: 'Organic, inorganic, and physical chemistry with advanced lab facilities',
      color: 'from-primary to-highlight',
      highlights: 'The Chemistry Department provides hands-on experience in chemical analysis, synthesis, and research through state-of-the-art laboratories and experienced faculty.',
      faculty: [
        { name: 'Prof. Shyam Deo Yadav', designation: 'HOD, Chemistry', image: 'Prof. Shyam Deo Yadav, HOD, Chemistry.jpeg' },
        { name: 'Dr. Usha Kumari', designation: 'Associate Professor, Chemistry', image: 'Dr. Usha Kumari, Associate Professor, Chemistry.jpeg' },
        { name: 'Dr. Deepak Kumar', designation: 'Assistant Professor, Chemistry', image: 'Dr. Deepak Kumar, Assistant Professor, Chemistry.jpeg' },
        { name: 'Dr. Madhu Gupta', designation: 'Assistant Professor, Chemistry', image: 'Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg' },
        { name: 'Reena Kumari', designation: 'Assistant Professor, Chemistry', image: 'Reena Kumari, Assistant Professor, Chemistry.jpeg' }
      ]
    },
    {
      name: 'Department of Botany',
      icon: Microscope,
      description: 'Plant sciences, biodiversity, and environmental studies',
      color: 'from-primary to-highlight',
      highlights: 'The Botany Department offers comprehensive study of plant biology, ecology, and biodiversity with emphasis on conservation and sustainable development.',
      faculty: [
        { name: 'Dr. Pushpanjali Khare', designation: 'Associate Professor, HOD Botany', image: 'Dr. Pushpanjali Khare, Associate Professor, HOD Botany.jpeg' },
        { name: 'Surendra Prasad', designation: 'Associate Prof, Botany Coordinator, B.Com.', image: 'Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg' }
      ]
    },
    {
      name: 'Department of Zoology',
      icon: Microscope,
      description: 'Animal biology, physiology, and biodiversity studies',
      color: 'from-primary to-highlight',
      highlights: 'The Zoology Department provides in-depth knowledge of animal physiology, behavior, and ecology through theoretical and practical learning approaches.',
      faculty: [
        { name: 'Dr. Sujata', designation: 'HOD Zoology', image: 'Dr. Sujata, HOD Zoology.jpeg' }
      ]
    },
    {
      name: 'Department of Psychology',
      icon: Users,
      description: 'Human behavior, mental processes, and psychological research',
      color: 'from-primary to-highlight',
      highlights: 'The Psychology Department focuses on understanding human behavior, cognitive processes, and mental health through scientific research and practical applications.',
      faculty: [
        { name: 'Dr. Suchita Arpan', designation: 'HOD, Psychology', image: 'Dr. Suchita Arpan, HOD, Psychology.jpeg' },
        { name: 'Dr.Namrata', designation: 'Assistant Professor, HOD, Psychology', image: 'Dr.Namrata, Assistant Professor, HOD,  Psychology.jpeg' },
        { name: 'Archana Kumari', designation: 'Assistant Professor, Psychology', image: 'Archana Kumari, Assistant Professor, Psychology.jpeg' },
        { name: 'Dr. Archana Bharti', designation: 'Assistant Professor, Psychology', image: 'Dr. Archana Bharti, Assistant Professor, Psychology.jpeg' },
        { name: 'Dr. Kavita Chowdhary', designation: 'Assistant Professor, Department of Psychology', image: 'Dr. Kavita Chowdhary, Assistant Professor, Department of Psychology.jpeg' },
        { name: 'Dr. Priyamvada', designation: 'Assistant Professor, Psychology', image: 'Dr. Priyamvada, Assistant Professor, Psychology.jpeg' },
        { name: 'Dr. Ranjana Kumari', designation: 'Assistant Professor, Psychology', image: 'Dr. Ranjana Kumari, Assistant Professor, Psychology.jpeg' },
        { name: 'Ms. Nidhi Singh', designation: 'Assistant Professor, Psychology', image: 'Ms. Nidhi Singh, Assistant Professor, Psychology.jpeg' }
      ]
    },
    {
      name: 'Department of Sociology',
      icon: Users,
      description: 'Social structures, institutions, and cultural studies',
      color: 'from-primary to-highlight',
      highlights: 'The Sociology Department examines social institutions, cultural dynamics, and societal changes through theoretical and empirical research approaches.',
      faculty: [
        { name: 'Anju Kumari', designation: 'Assistant Professor, Sociology', image: 'Anju Kumari, Assistant Professor, Sociology.jpeg' },
        { name: 'Dr. Archna Kumari', designation: 'Assistant Professor, Sociology', image: 'Dr. Archna Kumari, Assistant Professor, Sociology.jpeg' },
        { name: 'Dr. Minu Minz', designation: 'Assistant Professor, Sociology', image: 'Dr. Minu Minz, Assistant Professor, Sociology.jpeg' },
        { name: 'Dr. Veena Kumari', designation: 'Assistant Professor, Sociology', image: 'Dr. Veena Kumari, Assistant Professor, Sociology.jpeg' }
      ]
    },
    {
      name: 'Department of Economics',
      icon: Briefcase,
      description: 'Economic theory, policy analysis, and financial studies',
      color: 'from-primary to-highlight',
      highlights: 'The Economics Department provides comprehensive understanding of economic principles, policy analysis, and financial management for future leaders.',
      faculty: [
        { name: 'Sweta Sharan', designation: 'HOD, Economics', image: 'Sweta Sharan, HOD, Economics.jpeg' },
        { name: 'Ashish Kumar', designation: 'Assistant Professor, Economics', image: 'Ashish Kumar, Assistant Professor, Economics.jpeg' },
        { name: 'Dr Angur Kumari', designation: 'Assistant Professor, Economics', image: 'Dr Angur Kumari, Assistant Professor, Economics.jpeg' },
        { name: 'Dr. Chandan Chandra Chunna', designation: 'Assistant Professor, Economics', image: 'Dr. Chandan Chandra Chunna, Assistant Professor, Economics.jpeg' },
        { name: 'Dr. Mita Malkhandi', designation: 'Assistant Professor, Economics', image: 'Dr. Mita Malkhandi, Assistant Professor, Economics.jpeg' },
        { name: 'Priyadarshini', designation: 'Assistant Professor, Economics', image: 'Priyadarshini, Assistant Professor, Economics.jpeg' }
      ]
    },
    {
      name: 'Department of Philosophy',
      icon: BookOpen,
      description: 'Philosophy, ethics, and critical thinking development',
      color: 'from-primary to-highlight',
      highlights: 'The Philosophy Department encourages critical thinking, ethical reasoning, and philosophical inquiry to develop well-rounded individuals.',
      faculty: [
        { name: 'Dr. Sanjay Kumar Priyadarshi', designation: 'Assistant Professor, Philosophy', image: 'Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg' },
        { name: 'Ms. Ranjana Yadav', designation: 'Assistant Professor, Philosophy', image: 'Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg' }
      ]
    },
    {
      name: 'Department of Urdu',
      icon: BookOpen,
      description: 'Urdu language, literature, and cultural studies',
      color: 'from-primary to-highlight',
      highlights: 'The Urdu Department preserves and promotes Urdu language and literature while fostering cultural understanding and linguistic skills.',
      faculty: [
        { name: 'Dr. Md. Rizwan', designation: 'Assistant Professor, Urdu', image: 'Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg' },
        { name: 'Dr. Sohail Anwer', designation: 'Assistant Professor, Urdu', image: 'Dr. Sohail Anwer, Assistant Professor, Urdu.pdf' }
      ]
    },
    {
      name: 'Department of Home Science',
      icon: Award,
      description: 'Home management, nutrition, and family welfare studies',
      color: 'from-primary to-highlight',
      highlights: 'The Home Science Department focuses on family welfare, nutrition, child development, and home management for holistic development.',
      faculty: [
        { name: 'Dr. Shruti Kumari', designation: 'Assistant Professor, Home Science', image: 'Dr. Shruti Kumari, Assistant Professor, Home Science.jpeg' }
      ]
    },
    {
      name: 'Department of Political Science',
      icon: Users,
      description: 'Political theory, governance, and public administration',
      color: 'from-primary to-highlight',
      highlights: 'The Political Science Department provides understanding of political systems, governance, and public policy for informed citizenship.',
      faculty: [
        { name: 'Prof. Pushpalata Kumari', designation: 'Professor, Political Science Coordinator, IQAC, MMC', image: 'Prof. Pushpalata Kumari, Professor, Political Science Coordinator, IQAC, MMC.jpeg' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Departments - Magadh Mahila College</title>
        <meta name="description" content="Explore the various academic departments at Magadh Mahila College under NEP 2020." />
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
                  Offered Subjects
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Discover our comprehensive academic departments offering quality education and research opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDepartment(dept)}
                    className="group relative cursor-pointer h-full"
                  >
                      <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">

                      {/* Animated background blob */}
                      <motion.div
                        className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.8 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-6 shadow-lg`}
                        >
                          <dept.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {dept.description}
                        </p>

                        {/* Learn more indicator */}
                        <motion.div
                          className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          Explore <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedDepartment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDepartment(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedDepartment(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedDepartment.color} flex items-center justify-center shadow-lg`}
                  >
                    <selectedDepartment.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{selectedDepartment.name}</h2>
                    <p className="text-muted-foreground text-lg">{selectedDepartment.description}</p>
                  </div>
                </div>

                {/* Department Highlights */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Highlights of the Department</h3>
                  <div className="text-foreground whitespace-pre-line">
                    {selectedDepartment.highlights}
                  </div>
                </div>

                {/* Faculty Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Faculty Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedDepartment.faculty.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                            <img
                              src={`/data files/Faculty Images/${member.image}`}
                              alt={member.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                          <p className="text-primary text-sm">{member.designation}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Departments;
