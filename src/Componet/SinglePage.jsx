import React, { useState } from "react";
import BlogData from "../Componet/Blogdata";

const SingleBlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(BlogData[BlogData.length - 1]); // latest blog by default

  const recentBlogs = [...BlogData].slice(-4).reverse(); // last 4 latest blogs

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      
      {/* Left Side - Recent Blogs */}
      <aside className="lg:w-1/3 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Recent Blogs</h2>
        <div className="flex flex-col gap-4">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className={`cursor-pointer flex items-center gap-3 p-2 rounded hover:bg-[#f5f3ea] transition ${
                selectedBlog.id === blog.id ? "bg-[#c9bea0]/30" : ""
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-12 object-cover rounded"
              />
              <p className="text-gray-700 font-medium text-sm line-clamp-2">
                {blog.title}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Side - Selected Blog */}
      <main className="lg:w-2/3 bg-white rounded-lg shadow p-6">
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-3 text-gray-900">{selectedBlog.title}</h1>
        <h3 className="text-sm italic text-gray-600 mb-4">
          {/* Subtitle or quote */}
          Written by <span className="font-semibold">Jane Doe</span> - "Insightful thoughts on modern web development."
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {selectedBlog.description}
        </p>
      </main>
    </div>
  );
};

export default SingleBlogPage;
