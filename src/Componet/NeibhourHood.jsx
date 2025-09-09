import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  'https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img5.jpg',
  'https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img4.jpg',
  'https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img3.jpg',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const NeighborhoodSection = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto bg-gray-100 mt-[4%]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col lg:flex-row gap-10 items-center justify-between"
      >
        {/* Image Slider */}
        <div className="w-full lg:w-1/2">
          <Swiper
            navigation
            loop
            modules={[Navigation]}
            className="w-[500px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[400px] md:h-[450px] rounded overflow-hidden custom-swiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Neighborhood ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full lg:w-[400px] bg-gray-100 flex flex-col justify-center px-4 sm:px-6 py-6"
        >
          <motion.p variants={fadeItem} className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
            Neighborhood.
          </motion.p>

          <motion.h2
            variants={fadeItem}
            className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 leading-snug mt-2"
          >
            A Community <br /> To Call <br /> Your Own
          </motion.h2>

          <motion.p variants={fadeItem} className="text-gray-500 text-base mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
          </motion.p>

            <Link to='/blog'>
          <motion.button
            variants={fadeItem}
            className="mt-6 border border-[#CABE9F] text-[#CABE9F] px-6 py-4 tracking-widest uppercase text-sm font-semibold cursor-pointer hover:bg-[#CABE9F] hover:text-white transition w-full"
          >
            Explore Neighborhood
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Swiper Button Styles */}
      <style>
        {`
          .custom-swiper .swiper-button-prev,
          .custom-swiper .swiper-button-next {
            color: #fff;
            width: 30px;
            height: 30px;
          }

          .custom-swiper .swiper-button-prev::after,
          .custom-swiper .swiper-button-next::after {
            font-size: 18px;
            font-weight: bold;
          }
        `}
      </style>
    </section>
  );
};

export default NeighborhoodSection;
