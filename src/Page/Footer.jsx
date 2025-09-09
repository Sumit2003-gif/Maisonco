// components/Footer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("enquiryData", JSON.stringify(formData));
    alert("Enquiry saved to localStorage!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-[#393e41] text-white px-4 sm:px-8 md:px-20 py-12"
    >
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-500 pb-10">
        {/* Location */}
        <motion.div variants={fadeInUp}>
          <h4 className="text-sm tracking-widest font-semibold mb-4 uppercase">
            Building Location
          </h4>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Motivation can take you far, but it can take you even further if you
            first find your vision. Your vision will motivate and guide you on.
          </p>
          <div className="space-y-3 text-sm">
            <p>
              <span className="text-gray-400 font-medium">Address:</span> Logan
              Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184
            </p>
            <p>
              <span className="text-gray-400 font-medium">Phone:</span>{" "}
              012-345-6788
            </p>
            <p>
              <span className="text-gray-400 font-medium">E-mail:</span>{" "}
              email.support@maisonco.com
            </p>
          </div>
        </motion.div>

        {/* Contact Agent */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-start md:items-center"
        >
          <h4 className="text-sm tracking-widest font-semibold mb-4 uppercase">
            Contact Agent
          </h4>
          <img
            src="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/avatar_footer.png"
            alt="Agent"
            className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white"
          />
          <h3 className="text-lg font-medium">William Jacobs</h3>
          <p className="text-sm text-gray-400 mb-6">Certified Agent</p>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-lg">📞</span> 012-888-2222
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">📧</span> agent.name@example.com
            </p>
          </div>
        </motion.div>

        {/* Enquire Form */}
        <motion.div variants={fadeInUp}>
          <h4 className="text-sm tracking-widest font-semibold mb-4 uppercase">
            Enquire
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name *"
                className="w-full sm:w-1/2 p-3 border border-[#c9bea0] bg-transparent placeholder-gray-400 text-white focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full sm:w-1/2 p-3 border border-[#c9bea0] bg-transparent placeholder-gray-400 text-white focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your e-mail *"
              className="w-full p-3 border border-[#c9bea0] bg-transparent placeholder-gray-400 text-white focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full p-3 h-28 border border-[#c9bea0] bg-transparent placeholder-gray-400 text-white focus:outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 cursor-pointer bg-white text-[#c9bea0] font-semibold uppercase tracking-widest transition duration-200"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeInUp}
        className="pt-6 text-center text-sm text-gray-400"
      >
        <span className="font-semibold text-white">© MaisonCo.</span> All
        rights reserved.{" "}
        <span className="text-[#c9bea0] underline cursor-pointer">
          Terms of Use
        </span>{" "}
        and{" "}
        <span className="text-[#c9bea0] underline cursor-pointer">
          Privacy Policy
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
