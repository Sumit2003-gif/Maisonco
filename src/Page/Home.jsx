import React from 'react'
import { motion } from 'framer-motion'
import HomeHero from "../Componet/HomeHero"
import NeighborhoodSection from "../Componet/NeibhourHood"
import HomeCard from '../Componet/HomeCard'
import { FaQuoteLeft } from 'react-icons/fa'
import ContactSection from '../Componet/ContactSection'
import ImageWithTextSection from '../Componet/ImageWithTextSection'
import ThreePart from '../Componet/ThreePart'
import QuoteSection from '../Componet/QuoteoSection'
import AnimatedIntroSection from '../Componet/AnimationIntroSection'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
}

const staggered = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const Images = Array(6).fill("https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg")

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
        <HomeHero/>
      </motion.section>

      {/* Intro */}
<AnimatedIntroSection/>

      {/* Image Section Left */}
      <ImageWithTextSection
        imagePosition="left"
        topImage="https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg"
        mainImage="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg"
        subheading="The Building."
        heading="Beautiful of Design and Character"
        paragraph="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
        buttonText="Discover"
        variants={slideLeft}
      />

      {/* Three Part Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <ThreePart />
      </motion.section>

      {/* Image Section Right */}
      <ImageWithTextSection
        imagePosition="right"
        topImage="https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img7.jpg"
        mainImage="https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg"
        subheading="The Building."
        heading="Beautiful of Design and Character"
        paragraph="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
        buttonText="Discover"
        variants={slideLeft}
      />

      {/* Neighborhood */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <NeighborhoodSection />
      </motion.section>

      {/* Home Cards */}
      <section>
        <HomeCard />
      </section>

      {/* Quote Section */}
<QuoteSection/>


      {/* Gallery Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Home is waiting for you here</h1>
        <p className="text-lg text-gray-500 mb-6">SCHEDULE A TOUR</p>
        <Link to="/contact">
        <button className="px-6 py-3 bg-[#cfc0a6] cursor-pointer text-white font-medium rounded hover:bg-[#bfb18f] transition">
          BOOK A VISIT
        </button>
        </Link>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggered}
        >
          {Images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-64 object-cover rounded shadow"
              variants={imageFade}
            />
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
      </section>
    </div>
  )
}

export default Home
