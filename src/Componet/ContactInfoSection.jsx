import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const mapVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.6, duration: 1 } },
};

const ContactInfoSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Contact Info */}
      <div className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 md:gap-0 border-y border-gray-200">
        {/* Phone */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiPhone className="text-[#c9bea0] text-4xl" />
          <p className="uppercase text-sm text-gray-400 tracking-widest">Phone :</p>
          <div className="text-black space-y-1 font-light">
            <p>012‑345‑6789</p>
            <p>539‑737‑1380</p>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          className="flex flex-col items-center space-y-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200 px-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiMapPin className="text-[#c9bea0] text-4xl" />
          <p className="uppercase text-sm text-gray-400 tracking-widest">Address :</p>
          <div className="text-black font-light leading-relaxed">
            <p>Deal Acres, M.C. Colony / Urban Estate, Hisar</p>
            <p>Haryana, India</p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiMail className="text-[#c9bea0] text-4xl" />
          <p className="uppercase text-sm text-gray-400 tracking-widest">E‑mail :</p>
          <div className="text-black space-y-1 font-light">
            <p>email.support@maisonco.com</p>
            <p>info@maisonco.com</p>
          </div>
        </motion.div>
      </div>

      {/* Google Map Embedding Deal Acres Hisar */}
      <motion.div
        className="w-full h-64 md:h-96 mt-8"
        variants={mapVariants}
        initial="hidden"
        animate="visible"
      >
        <iframe
          title="Deal Acres Location - Hisar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.1234567890123!2d75.724556!3d29.149738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910c1234567890b%3A0xabcdef1234567890!2sDeal%20Acres%2C%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v16926xxxxxxx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-lg"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactInfoSection;
