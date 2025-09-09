import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Text to animate
const text = `Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned.`;

const words = text.split(" ");

const AnimatedIntroSection = () => {
    const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07, // time between word animations
      delayChildren: 0.2,    // delay before animation starts
    },
  },
};

const wordFade = {
  hidden: { opacity: 0, y: 20, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className="px-6 py-20 bg-gray-50 text-center"
    >
      {/* Animated Text */}
      <motion.p
        className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed max-w-4xl mx-auto text-[#3F4448] font-semibold flex flex-wrap justify-center"
        variants={container}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordFade}
            className="mr-2 whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      {/* Button */}
      <motion.div
        variants={wordFade}
        className="mt-8 flex justify-center"
      >
        <Link to="/about">
        <button className="text-[#CABE9F] cursor-pointer border border-[#CABE9F] px-6 py-3 uppercase tracking-widest font-semibold rounded hover:bg-[#CABE9F] hover:text-white transition duration-300 w-full sm:w-auto">
          See More About The Residences
        </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AnimatedIntroSection;
