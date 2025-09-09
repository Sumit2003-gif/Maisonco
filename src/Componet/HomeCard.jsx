import React from 'react';
import { motion } from 'framer-motion';

const HomeCard = () => {
  const Data = [
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Cheap Apartments",
      first: "3",
      second: "3",
      thrid: "30",
    },
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Studio Apartments",
      first: "4",
      second: "2",
      thrid: "36",
    },
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Luxury Apartments",
      first: "3",
      second: "4",
      thrid: "31",
    },
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Premium Office Suite",
      first: "2",
      second: "2",
      thrid: "27",
    },
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Senior Apartments",
      first: "2",
      second: "3",
      thrid: "34",
    },
    {
      url: "https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg",
      header: "Modern Office",
      first: "4",
      second: "3",
      thrid: "36",
    },
  ];

  // Motion Variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpCard = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const fadeUpHeader = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Card Component
  const Card = ({ url, header, bedrooms, bathrooms, floor }) => (
    <motion.div
      variants={fadeUpCard}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <img src={url} alt={header} className="w-full h-52 object-cover" />
      <div className="p-5 text-center space-y-4">
        <h2 className="text-xl font-serif text-gray-800">{header}</h2>
        <div className="flex justify-center text-gray-500 text-sm gap-4">
          <span>{bedrooms} Bedrooms</span>
          <span className="border-l border-gray-300 pl-4">{bathrooms} Bathrooms</span>
          <span className="border-l border-gray-300 pl-4">{floor} Floor</span>
        </div>
        <button className="mt-2 text-sm font-semibold text-[#CABE9F] uppercase tracking-wider hover:underline">
          Explore
        </button>
      </div>
    </motion.div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Title Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpHeader}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">Apartments.</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-gray-800">Find Your Fit</h1>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Data.map((item, index) => (
          <Card
            key={index}
            url={item.url}
            header={item.header}
            bedrooms={item.first}
            bathrooms={item.second}
            floor={item.thrid}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HomeCard;
