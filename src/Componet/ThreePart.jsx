import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ThreePart = () => {
  const Point = [
    'Great Room', 'Coworking Center', 'Bocce Court', 'Fitness Center',
    'Spin Studio', 'Indoor', 'Lap Pool', 'Game Room', 'Reservable Grills',
    'Yoga Studio', "Children's Room", 'Outdoor', 'Pool Terrace', 'The Workshop'
  ]

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 max-w-7xl mx-auto items-stretch bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerStagger}
    >
      {/* Left Image */}
      <motion.div className="h-full" variants={slideLeft}>
        <img
          src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg"
          alt="Pool area"
          className="w-full h-full object-cover rounded shadow-md"
        />
      </motion.div>

      {/* Center Text */}
      <motion.div
        className="text-center md:text-left space-y-6 grid justify-center px-3 md:ml-5 py-10 md:py-[20%]"
        variants={containerStagger}
      >
        <motion.p
          className="uppercase text-sm font-semibold text-gray-600 tracking-wide"
          variants={fadeUp}
        >
          Features.
        </motion.p>

        <motion.h2
          className="text-3xl font-serif font-medium text-[#3F4448] leading-snug"
          variants={fadeUp}
        >
          Resort-<br />Inspired <br /> Amenities & <br />Services
        </motion.h2>

        <motion.p
          className="text-[#6e6e6f] text-base"
          variants={fadeUp}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
        </motion.p>

        <motion.ul
          className="grid grid-cols-2 gap-y-4 px-6 text-left justify-center md:ml-6 text-[#3F4448] font-medium text-sm pt-2"
          variants={fadeUp}
        >
          {Point.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </motion.ul>

        <motion.div
          className="flex justify-center md:justify-start items-center"
          variants={fadeUp}
        >
          <Link to="/contact" className='w-full ml-10'>
          <button className="mt-4 w-3/4 border-2 cursor-pointer text-[#CABE9F] px-6 py-2 tracking-widest uppercase text-sm font-semibold hover:bg-[#CABE9F] hover:text-white transition">
            Contact Now !
          </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div className="h-full" variants={slideRight}>
        <img
          src="https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg"
          alt="Rooftop lounge"
          className="w-full h-full object-cover rounded shadow-md"
        />
      </motion.div>
    </motion.section>
  )
}

export default ThreePart
