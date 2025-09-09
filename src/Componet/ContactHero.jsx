import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactHero = ({ url, header, buttontxt = "Contact Us" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Simple fade & slide variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="relative h-64 md:h-96 flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.h1 
        className="relative text-3xl md:text-6xl font-semibold z-10"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {header}
      </motion.h1>

      <motion.div
        className="relative z-10 mt-4 flex flex-wrap justify-center gap-3 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <Link to="/">
          <button className="text-[#c9bea0] px-4 py-2 hover:underline rounded cursor-pointer hover:text-[#b5aa8e] transition-colors duration-300">
            HOME
          </button>
        </Link>

        <span className="text-white self-center">.</span>

        <button
          className={`px-4 py-2 rounded font-semibold transition-colors duration-300 ${
            // location.pathname === '/contact'
              // ? 'bg-gray-400 cursor-not-allowed text-gray-200'
               'text-[#c9bea0] hover:text-[#b5aa8e] hover:underline cursor-pointer'
          }`}
          disabled={location.pathname === '/contact'}
          onClick={() => {
            if (location.pathname !== '/contact') navigate('/contact');
          }}
        >
          {buttontxt}
        </button>
      </motion.div>
    </motion.section>
  );
};

export default ContactHero;
