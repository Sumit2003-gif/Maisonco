// components/ProfileCard.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      when: "beforeChildren",
      staggerChildren: 0.15
    } 
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ProfileCard = ({
  image,
  name,
  position,
  message,
  imagePosition = "top", // or "bottom"
}) => {
  const isImageTop = imagePosition === "top";

  return (
    <motion.div
      className="w-full max-w-sm mx-auto text-center p-6 bg-white shadow-md rounded-md space-y-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {isImageTop && (
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      <motion.div className="space-y-1">
        <motion.h3
          className="text-lg font-semibold tracking-wide text-gray-800"
          variants={textVariants}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-sm uppercase text-gray-400"
          variants={textVariants}
        >
          {position}
        </motion.p>
      </motion.div>

      <motion.p
        className="text-sm text-gray-600 italic leading-relaxed"
        variants={textVariants}
      >
        {message}
      </motion.p>

      {!isImageTop && (
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export default ProfileCard;
