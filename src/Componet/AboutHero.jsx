// components/AboutSection.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const textVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

const imageVariants = {
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  },
};

const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

const AboutSection = ({
  title = "ABOUT MAISONCO",
  highlightColor = "text-yellow-800",
  subTitleheader,
  subtitle,
  subTitleheader2,
  description1,
  description2,
  image,
  imagePosition = "right", // or "left"
}) => {
  const isImageLeft = imagePosition === "left";

  // Randomly select animation variants only once per render:
  const textAnim = useMemo(() => getRandomKey(textVariants), []);
  const imageAnim = useMemo(() => getRandomKey(imageVariants), []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 flex flex-col md:flex-row items-center gap-10 bg-white">
      {/* Image on left */}
      {isImageLeft && (
        <motion.div
          className="md:w-1/2 order-1 md:order-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariants[imageAnim]}
        >
          <img
            src={image}
            alt={title}
            className="rounded-md shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </motion.div>
      )}

      {/* Text Content */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={textVariants[textAnim]}
      >
        <h2
          className={`text-lg md:text-xl ${highlightColor} tracking-widest font-semibold flex items-center gap-2`}
        >
          <span className={`block w-6 h-1 ${highlightColor} bg-current`}></span>
          {title}
        </h2>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {subTitleheader}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-[#74777A] max-w-lg font-medium leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {subTitleheader2}
        </motion.h1>

        {description1 && (
          <motion.p
            className="text-gray-400 max-w-lg font-normal leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {description1}
          </motion.p>
        )}

        {description2 && (
          <motion.p
            className="text-gray-400 max-w-lg font-normal leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            {description2}
          </motion.p>
        )}
      </motion.div>

      {/* Image on right */}
      {!isImageLeft && (
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariants[imageAnim]}
        >
          <img
            src={image}
            alt={title}
            className="rounded-md shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
