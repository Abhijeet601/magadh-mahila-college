import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const PeerTeamVisitPhotos = () => {
  // Placeholder images - replace with actual photos if available
  const photos = [
    { src: '/images/mmc_naac2013.jpg', alt: 'NAAC Peer Team Visit 2013' },
    { src: '/images/mmc_naac2020.jpg', alt: 'NAAC Peer Team Visit 2020' },
    { src: '/images/WhatsApp-Image-2021-02-11-at-3.04.42-PM.jpeg', alt: 'NAAC Peer Team Visit 2021' },
  ];

  return (
    <>
      <Helmet>
        <title>Peer Team Visit Photos - NAAC | Magadh Mahila College</title>
        <meta name="description" content="View photos from the NAAC Peer Team visits and assessment process at Magadh Mahila College." />
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
                <span className="text-primary">Peer Team Visit Photos</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Photographic documentation of NAAC Peer Team visits and assessment activities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Camera className="w-5 h-5 text-primary mb-2" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {photo.alt}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Official documentation of the NAAC assessment visit.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PeerTeamVisitPhotos;
