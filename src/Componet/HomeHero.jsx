import React from 'react';
import { motion } from 'framer-motion';
import HeroBg from "../assets/HeroBg.mp4";

const titleLines = [
  "NEW CENTRAL",
  "PARK VIEW",
  "RESIDENCES",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.3,
    },
  },
};

const lineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  },
};

const HomeHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video with subtle zoom animation */}
      <motion.video
        autoPlay
        loop
        muted
        src={HeroBg}
        className="object-cover w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>

      {/* Centered Text with hover scale */}
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute inset-0 flex pt-[5%] justify-center items-center text-center px-6 sm:px-10 md:px-0 cursor-pointer"
      >
        <motion.div
          variants={containerVariants}
          className="max-w-4xl text-white w-full"
        >
          {/* Animate each line */}
          {titleLines.map((line, idx) => (
            <motion.h1
              key={idx}
              variants={lineContainerVariants}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-4 sm:mb-5 md:mb-6 flex justify-center flex-wrap`}
            >
              {/* Split line into words */}
              {line.split(" ").map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  variants={wordVariants}
                  className="mr-3 whitespace-nowrap"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          ))}

          {/* Paragraph fade in with delay */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1.2 }}
            className="text-sm sm:text-base md:text-lg font-medium max-w-lg mx-auto"
          >
            In the Heart of the Upper West Side
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 1.2 }}
            className="text-xs sm:text-sm md:text-base mt-3 max-w-md mx-auto px-4 sm:px-0"
          >
            Luxury residences. Studio to 3 bedrooms. Unrivaled outdoor and indoor amenities.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
