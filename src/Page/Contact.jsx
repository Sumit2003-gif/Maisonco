// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfoSection from '../Componet/ContactInfoSection';
import ContactForm from '../Componet/ContactForm';
import ContactHero from '../Componet/ContactHero';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: 'easeOut' } 
  },
};

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section>
        <ContactHero
          url="https://images.pexels.com/photos/15210485/pexels-photo-15210485.jpeg"
          header="CONTACT US"
          buttontxt="CONTACT US"
        />
      </section>

      {/* Contact Info with animation */}
      <motion.section
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactInfoSection />
      </motion.section>

      {/* Contact Form with animation */}
      <motion.section
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.section>
    </div>
  );
};

export default Contact;
