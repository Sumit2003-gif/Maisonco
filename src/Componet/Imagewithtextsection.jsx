import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const ImageWithTextSection = ({
  imagePosition = 'left',
  topImage,
  mainImage,
  heading,
  subheading,
  paragraph,
  buttonText = 'Discover'
}) => {
  const isImageLeft = imagePosition === 'left'

  return (
    <motion.section
      className="max-w-6xl my-[3%] mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Image Column */}
      {isImageLeft && (
        <motion.div variants={slideLeft}>
          <img
            src={mainImage}
            alt="Main visual"
            className="w-full h-full object-cover rounded shadow-md"
          />
        </motion.div>
      )}

      {/* Text + Optional Top Image */}
      <motion.div
        className="space-y-6"
        variants={container}
      >
        {topImage && (
          <motion.img
            src={topImage}
            alt="Top"
            className="w-full h-auto rounded"
            variants={fadeUp}
          />
        )}

        <div className="space-y-4">
          <motion.p
            className="uppercase text-sm font-semibold text-[#1d1e1ed2] tracking-wide"
            variants={fadeUp}
          >
            {subheading}
          </motion.p>

          <motion.h1
            className="text-3xl font-serif font-medium text-[#3F4448] leading-snug"
            variants={fadeUp}
          >
            {heading}
          </motion.h1>

          <motion.p
            className="text-[#6e6e6f] leading-relaxed"
            variants={fadeUp}
          >
            {paragraph}
          </motion.p>

          <Link to="/blog">
          <motion.button
            className="mt-2 border text-[#CABE9F] cursor-pointer px-6 py-2 tracking-widest uppercase text-sm font-semibold hover:bg-[#CABE9F] hover:text-white transition"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Image on the right */}
      {!isImageLeft && (
        <motion.div variants={slideRight}>
          <img
            src={mainImage}
            alt="Main visual"
            className="w-full h-full object-cover rounded shadow-md"
          />
        </motion.div>
      )}
    </motion.section>
  )
}

export default ImageWithTextSection
