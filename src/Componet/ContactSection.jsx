import React, { useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

// Animation Variants
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('contactFormData', JSON.stringify(formData))
    setFormData({ name: '', phone: '', email: '', message: '' })
    alert('Form data saved locally!')
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Slide from Left */}
        <motion.div variants={slideInLeft} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
            GET IN TOUCH
          </h1>
          <p className="text-gray-500 text-base">
            We’d love to share more with you about MaisonCo. Please complete this form and our dedicated team will get back to you shortly.
          </p>

          <div className="pt-8 border-t border-gray-200 space-y-4">
            <p className="text-sm font-bold tracking-wider text-yellow-700 uppercase">Contact Agent</p>

            <div className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="agent"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-serif text-gray-800">WILLIAM JACOBS</h3>
                <p className="text-sm text-gray-500 font-medium uppercase">Certified Agent</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-yellow-700" />
              <span className="text-gray-700 text-sm sm:text-base">012-888-2222</span>
            </div>

            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-5 h-5 text-yellow-700" />
              <span className="text-gray-700 text-sm sm:text-base">agent.name@example.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Slide from Right */}
        <motion.div variants={slideInRight} className="bg-white p-6 sm:p-8 rounded shadow-sm">
          <p className="text-sm font-bold tracking-widest text-[#CABE9F] uppercase mb-6">Enquire</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-[#CABE9F] px-4 py-3 w-full focus:outline-none"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-[#CABE9F] px-4 py-3 w-full focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail *"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-[#CABE9F] px-4 py-3 w-full focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-[#CABE9F] px-4 py-3 w-full focus:outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full cursor-pointer hover:bg-[#CABE9F] border-2 hover:text-white text-[#CABE9F] bg-white tracking-widest font-bold py-4 uppercase transition duration-200"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactSection
