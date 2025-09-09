import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Quote content
const quote = "Effortless, elegant, individual. It’s what we all seek. Something special and distinct.";
const quoteWords = quote.split(" ");

const QuoteSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://demo2.wpopal.com/maisonco/wp-content/uploads/2022/10/h6_img2.jpg"
        alt="Background"
        className="w-full h-auto object-cover"
      />

      {/* Animated Quote Box */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="text-center max-w-4xl mx-auto px-6 py-12 sm:py-16 bg-white/90 backdrop-blur-sm -mt-40 relative z-10 rounded shadow-md"
      >
        {/* Quote Icon */}
        <div className="flex justify-center items-center py-4">
          <FaQuoteLeft className="text-[#cfc0a6] text-4xl sm:text-5xl" />
        </div>

        {/* Animated Quote Text */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#3F4448] leading-relaxed flex flex-wrap justify-center"
        >
          {quoteWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordAnimation}
              className="mr-2 whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Author Info */}
        <motion.div
          variants={wordAnimation}
          className="mt-6"
        >
          <p className="text-[#b4aeaf] font-medium tracking-wide text-base sm:text-lg">
            CONNOR FLORES
          </p>
          <p className="text-[#b4aeaf] font-semibold uppercase text-sm tracking-widest mt-1">
            Hill West Architecture Firm
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
