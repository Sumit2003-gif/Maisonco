import React, { useState } from "react";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#b5aa8e",
    transition: { duration: 0.3 },
  },
};

const checkboxVariants = {
  checked: { scale: 1.2, transition: { duration: 0.3 } },
  unchecked: { scale: 1 },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to data storage to submit the form.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("contactFormSubmissions")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("contactFormSubmissions", JSON.stringify(updated));

    alert("Message submitted and saved locally!");
    setFormData({
      message: "",
      name: "",
      email: "",
      consent: false,
    });
  };

  return (
    <motion.section
      className="bg-white py-20 px-4 text-center"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl md:text-4xl font-light text-[#393e41] tracking-wide mb-12">
        GET IN TOUCH!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto flex flex-col items-center space-y-6"
      >
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          className="w-full border border-[#c9bea0] p-4 text-gray-700 placeholder-gray-400 focus:outline-none resize-none rounded-md"
          required
        />

        <div className="w-full flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="flex-1 border border-[#c9bea0] p-4 text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="flex-1 border border-[#c9bea0] p-4 text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
            required
          />
        </div>
      <label className="flex items-center  gap-2 text-sm text-gray-500 mt-4 cursor-pointer select-none">
          <motion.input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="accent-[#c9bea0] w-5 h-5 rounded-md cursor-pointer"
            variants={checkboxVariants}
            animate={formData.consent ? "checked" : "unchecked"}
          />
          I agree that my submitted data is being collected and stored.
        </label>
        <motion.button
          type="submit"
          className="w-full bg-[#c9bea0] cursor-pointer text-white py-4 uppercase font-semibold tracking-wider rounded-md shadow-md"
          variants={buttonVariants}
          whileHover="hover"
        >
          Leave a Message
        </motion.button>

        
      </form>
    </motion.section>
  );
};

export default ContactForm;
