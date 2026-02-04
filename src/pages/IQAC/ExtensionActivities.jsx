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
                
              </p>
            </motion.div>







            {/* NCC and NSS Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Reports</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NCC Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">NCC Reports</h3>
                  <p className="text-muted-foreground mb-6">National Cadet Corps reports and documents.</p>
                  <div className="space-y-2">
                    <motion.a
                      href="/documents/IQAC/NCC/mmc-ncc-report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      mmc-ncc-report.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/NCC/NCC-Report-2023-24.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      NCC-Report-2023-24.pdf
                    </motion.a>
                  </div>
                </motion.div>
                {/* NSS Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-border cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">NSS Reports</h3>
                  <p className="text-muted-foreground mb-6">National Service Scheme reports and documents.</p>
                  <div className="space-y-2">
                    <motion.a
                      href="/documents/IQAC/NSS/mmc_nss_aanual_report_2223.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      mmc_nss_aanual_report_2223.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/NSS/mmc-nss-report-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      mmc-nss-report-1.pdf
                    </motion.a>
                    <motion.a
                      href="/documents/IQAC/NSS/NSS-Report-2023-24.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      NSS-Report-2023-24.pdf
                    </motion.a>
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
