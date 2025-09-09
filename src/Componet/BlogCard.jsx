import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ image, title, description, buttonText }) => {
  return (
    <motion.div
      className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden m-4 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{description}</p>

        <button
          className="self-center bg-[#c9bea0] text-white font-semibold cursor-pointer py-2 px-8 rounded-full
                     hover:bg-[#b2a57d] transition duration-300 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-[#b2a57d]"
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
