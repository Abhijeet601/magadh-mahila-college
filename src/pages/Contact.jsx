import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'North Gandhi Maidan, Patna – 1',
      color: 'from-primary to-primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91-612-2219454',
      color: 'from-primary to-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@magadhmahilacollege.org, principal@magadhmahilacollege.org',
      color: 'from-primary to-highlight',
    },
    {
      icon: Globe,
      title: 'Web URL',
      details: 'http://www.magadhmahilacollege.org',
      color: 'from-primary to-highlight',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '10:30 A.M to 4:30 P.M',
      color: 'from-primary to-highlight',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Magadh Mahila College | Get in Touch</title>
        <meta name="description" content="Contact Magadh Mahila College at North Gandhi Maidan, Patna. Phone: +91-612-2219454. Email: info@magadhmahilacollege.org. Visit us or send your queries." />
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
                  Get in Touch
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                We're here to answer your questions and help you begin your journey with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-64 rounded-2xl overflow-hidden shadow-xl"
                >
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=85.1265%2C25.5991%2C85.1465%2C25.6191&layer=mapnik&marker=25.6091%2C85.1365"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Magadh Mahila College Location"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 rounded-3xl bg-white shadow-xl border border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Contact Details</h2>
                  <p className="text-muted-foreground mb-8">All enquiries will be reproduced on working days during working hours only. Working hours is from 10:30 A.M to 4:30 P.M</p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">College Address</h3>
                      <p className="text-muted-foreground">Magadh Mahila College<br />North Gandhi Maidan<br />Patna – 1</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone No(s).</h3>
                      <p className="text-muted-foreground">+91 – 612 – 2219454</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Web URL</h3>
                      <p className="text-muted-foreground"><a href="http://www.magadhmahilacollege.org" className="text-primary hover:underline">http://www.magadhmahilacollege.org</a></p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">E-mail ID</h3>
                      <p className="text-muted-foreground">info@magadhmahilacollege.org<br />principal@magadhmahilacollege.org</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Department Wise Contact Number</h3>
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="pb-2 font-semibold">Department</th>
                            <th className="pb-2 font-semibold">Contact Number</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr><td className="py-1">B.B.A</td><td className="py-1">+91-612-6550287</td></tr>
                          <tr><td className="py-1">B.Com</td><td className="py-1">+91-612-6455262, +91-612-2213738</td></tr>
                          <tr><td className="py-1">B.C.A, P.G.D.C.A</td><td className="py-1">+91-612-2207920</td></tr>
                          <tr><td className="py-1">B.SW, P.GD in WCW</td><td className="py-1">+91-9431879047</td></tr>
                          <tr><td className="py-1">Music</td><td className="py-1">+91-9835681230</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;