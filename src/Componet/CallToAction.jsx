// components/CallToAction.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CallToAction = ({
  title = "AVAILABLE FOR",
  highlight = "IMMEDIATE OCCUPANCY!",
  buttonText = "VIEW AVAILABILITY",
  onClick = () => {},
}) => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/31101244/pexels-photo-31101244.jpeg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 sm:py-24 sm:px-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wide">
          {title}
        </h3>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mt-3 leading-tight">
          {highlight}
        </h2>

        <Link to="/contact">
        <motion.button
          onClick={onClick}

          className="mt-10 px-8 py-3 bg-gray-900 cursor-pointer hover:bg-gray-700 transition-all duration-300 text-white font-semibold tracking-wider uppercase rounded-sm shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
