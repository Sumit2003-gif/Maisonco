import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contact" },
  ];

  useEffect(() => {
    const currentIndex = menu.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex);
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  // Framer-motion variants
  const drawerVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' },
  };

  const overlayVariants = {
    hidden: { opacity: 0, pointerEvents: 'none' },
    visible: { opacity: 0.4, pointerEvents: 'auto' },
    exit: { opacity: 0, pointerEvents: 'none' },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img
            src="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/logo.svg"
            alt="Logo"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-10 items-center">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setActiveIndex(index)}
              className={`relative text-[#565B5E] font-medium tracking-widest text-sm transition-colors duration-300
                hover:text-[#cabe9f] ${
                  activeIndex === index ? 'text-[#cabe9f]' : ''
                }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#cabe9f] scale-x-0 origin-left transition-transform duration-300
                  ${activeIndex === index ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Schedule Button Desktop */}
        <a href='tel:0123456789'>
        <div className="hidden sm:block">
          <button className="text-[#cabe9f] border-2 cursor-pointer border-[#cabe9f] font-semibold hover:text-white hover:bg-[#cabe9f] py-2 px-6 rounded-sm transition-colors duration-300">
            SCHEDULE A VISIT
          </button>
        </div>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="sm:hidden relative z-50 focus:outline-none"
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-between items-center"
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: {},
              closed: {},
            }}
          >
            {/* Hamburger lines */}
            <motion.span
              className="block h-0.5 w-full bg-[#565B5E] rounded"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-[#565B5E] rounded"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-[#565B5E] rounded"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="self-end mb-8 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 hover:text-[#cabe9f] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Menu Links */}
                <nav className="flex flex-col space-y-6">
                  {menu.map((item, index) => (
                    <motion.div
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuItemVariants}
                    >
                      <Link
                        to={item.path}
                        onClick={() => {
                          setActiveIndex(index);
                          setMenuOpen(false);
                        }}
                        className={`text-lg font-medium text-[#565B5E] transition-colors duration-300 hover:text-[#cabe9f]
                          ${activeIndex === index ? 'text-[#cabe9f]' : ''}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Schedule Button Mobile */}
                  <button className="mt-auto text-[#cabe9f] border-2 border-[#cabe9f] font-semibold hover:text-white hover:bg-[#cabe9f] py-3 px-6 rounded-sm transition-colors duration-300">
                    SCHEDULE A VISIT
                  </button>
                </nav>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-30"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
