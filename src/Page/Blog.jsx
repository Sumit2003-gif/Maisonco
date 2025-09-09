import React, { useState } from "react";
import BlogCard from "../Componet/BlogCard";
import BlogData from "../Componet/Blogdata";
import ContactHero from "../Componet/ContactHero";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogsPerPage = 4;

  const reversedBlogs = [...BlogData].reverse(); // Latest first

  const recentBlogs = reversedBlogs.slice(0, 4);
  const paginatedBlogs = reversedBlogs.slice(4);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = paginatedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(paginatedBlogs.length / blogsPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  // Form state & handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
    const newMessages = [...existingMessages, formData];
    localStorage.setItem("messages", JSON.stringify(newMessages));
    alert("Message saved!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const openBlog = (blog) => setSelectedBlog(blog);
  const backToList = () => setSelectedBlog(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section>
        <ContactHero
          url="https://images.pexels.com/photos/15210485/pexels-photo-15210485.jpeg"
          header="BLOGS"
          buttontxt="BLOGS"
        />
      </section>

      <AnimatePresence mode="wait">
        {!selectedBlog ? (
          <motion.div
            key="list-view"
            className="flex flex-col lg:flex-row gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Recent Blogs */}
            <motion.section
              className="lg:w-1/3"
              variants={itemVariants}
            >
              <div className="mb-4 flex items-center space-x-2 mt-10">
                <div className="w-10 h-1 bg-[#c9bea0] rounded"></div>
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-widest">
                  Latest Insights
                </p>
              </div>

              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Recent Blogs
              </h2>

              <div className="flex flex-col gap-4">
                {recentBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    onClick={() => openBlog(blog)}
                    className="flex items-center gap-4 bg-white rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-md font-semibold text-gray-900 hover:text-[#c9bea0] transition-colors">
                        {blog.title.length > 50
                          ? blog.title.slice(0, 47) + "..."
                          : blog.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* All Blogs */}
            <motion.section
              className="lg:w-2/3"
              variants={itemVariants}
            >
                 <div className="mb-4 flex items-center space-x-2 mt-10">
                <div className="w-10 h-1 bg-[#c9bea0] rounded"></div>
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-widest">
                  All Blogs
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {currentBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    onClick={() => openBlog(blog)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <BlogCard
                      image={blog.image}
                      title={blog.title}
                      description={blog.description}
                      buttonText="Read More"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-wrap justify-center mt-8 gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <motion.button
                    key={index + 1}
                    onClick={() => goToPage(index + 1)}
                    className={`px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-300 ${
                      currentPage === index + 1
                        ? "bg-[#c9bea0] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-[#c9bea0] hover:text-white"
                    }`}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Go to page ${index + 1}`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        ) : (
          // Single blog detail view with recent blogs sidebar
          <motion.div
            key="detail-view"
            className="flex flex-col lg:flex-row gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Recent Blogs Sidebar */}
            <motion.aside
              className="lg:w-1/3"
              variants={itemVariants}
            >
              <button
                onClick={backToList}
                className="mb-6 text-sm cursor-pointer text-[#c9bea0] hover:underline"
              >
                &larr; Back to Blog List
              </button>

              <div className="mb-4 flex items-center space-x-2">
                <div className="w-10 h-1 bg-[#c9bea0] rounded"></div>
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-widest">
                  Latest Insights
                </p>
              </div>

              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Recent Blogs</h2>

              <div className="flex flex-col gap-4">
                {recentBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    onClick={() => openBlog(blog)}
                    className={`flex items-center gap-4 rounded-lg p-3 cursor-pointer ${
                      blog.id === selectedBlog.id
                        ? "bg-[#c9bea0] text-white"
                        : "bg-white shadow-md hover:shadow-xl transition-shadow"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-md font-semibold">
                        {blog.title.length > 50
                          ? blog.title.slice(0, 47) + "..."
                          : blog.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.aside>

            {/* Blog Details */}
            <motion.section
              className="lg:w-2/3 bg-white rounded-lg shadow-lg p-8"
              variants={itemVariants}
            >
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 md:h-80 object-cover rounded mb-6"
              />

              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                {selectedBlog.title}
              </h1>

              <h3 className="text-sm italic text-gray-600 mb-6">
                Written by <span className="font-semibold">Jane Doe</span> -{" "}
                "Insightful thoughts on modern web development."
              </h3>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedBlog.description}
              </p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leave Message Form */}
      <section className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Leave a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#c9bea0]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#c9bea0]"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#c9bea0]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#c9bea0]"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#c9bea0] cursor-pointer text-white font-semibold py-3 rounded hover:bg-[#b2a57d] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
