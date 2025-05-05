"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HanvilNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Vibrant color palette
  const colors = {
    primary: "from-teal-500 to-blue-600",
    secondary: "from-amber-400 to-orange-500",
    accent: "from-purple-500 to-pink-500",
    dark: "from-slate-800 to-slate-900",
    light: "from-slate-50 to-blue-50",
  };

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu data
  const menus = [
    {
      title: "Home",
      href: "/",
      simple: true,
      icon: "🏠",
    },
    {
      title: "About",
      items: [
        { name: "Our Story", href: "/story", icon: "📖" },
        { name: "Achievements", href: "/achievements", icon: "🏆" },
        { name: "Events", href: "/events", icon: "🌆" },
      ],
      icon: "ℹ️",
    },
    {
      title: "Academics",
      items: [
        { name: "Programs", href: "/programs", icon: "📚" },
        { name: "Curriculum", href: "/curriculum", icon: "📝" },
      ],
      icon: "🎓",
    },
    {
      title: "Admissions",
      items: [
        { name: "Apply Now", href: "/apply", icon: "✍️" },
        { name: "Academic Calender", href: "/academic-calender", icon: "📋" },
        { name: "Tuition", href: "/tuition", icon: "💰" },
        { name: "FAQs", href: "/faqs", icon: "⁉️" },
      ],
      icon: "🚪",
    },
  ];

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top Bar - Information */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`bg-gradient-to-r ${colors.primary} text-white text-sm py-2 px-4`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white/10 px-3 py-1 rounded-full"
            >
              <span className="mr-2">📞</span>
              <span>+233 123 456 789</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white/10 px-3 py-1 rounded-full"
            >
              <span className="mr-2">✉️</span>
              <span>info@hanvilacademy.edu.gh</span>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 px-3 py-1 rounded-full"
          >
            <span className="mr-2">🎓</span>
            <span>Open House: June 15th - Register Today!</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`bg-white shadow-lg transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  H
                </motion.span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="ml-3 text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"
              >
                Hanvil Academy
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menus.map((menu, index) => (
                <div
                  key={index}
                  className="relative h-full"
                  onMouseEnter={() => !menu.simple && setActiveMenu(menu.title)}
                  onMouseLeave={() => !menu.simple && setActiveMenu(null)}
                >
                  {menu.simple ? (
                    <Link
                      href={menu.href}
                      className="px-5 py-3 font-medium text-slate-700 hover:text-teal-600 transition-colors relative group flex items-center"
                    >
                      <span className="mr-2">{menu.icon}</span>
                      <motion.span whileHover={{ scale: 1.05 }}>
                        {menu.title}
                      </motion.span>
                      <motion.span
                        className="absolute bottom-2 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                        initial={{ scaleX: 0 }}
                      />
                    </Link>
                  ) : (
                    <>
                      <button
                        className={`px-5 py-3 font-medium flex items-center space-x-1 transition-colors ${
                          activeMenu === menu.title
                            ? "text-white bg-gradient-to-r from-teal-500 to-blue-600"
                            : "text-slate-700 hover:text-white hover:bg-gradient-to-r from-teal-500 to-blue-600"
                        }`}
                      >
                        <span className="mr-2">{menu.icon}</span>
                        <span>{menu.title}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{
                            rotate: activeMenu === menu.title ? 180 : 0,
                            stroke:
                              activeMenu === menu.title
                                ? "white"
                                : "currentColor",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {activeMenu === menu.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{
                              type: "spring",
                              damping: 20,
                              stiffness: 300,
                            }}
                            className="absolute left-0 mt-0 w-56 bg-gradient-to-b from-teal-500 to-blue-600 rounded-b-lg shadow-xl overflow-hidden z-50"
                            onMouseEnter={() => setActiveMenu(menu.title)}
                            onMouseLeave={() => setActiveMenu(null)}
                          >
                            {menu.items.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block px-4 py-3 hover:bg-white/20 text-white transition-colors flex items-center"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <span className="mr-3">{item.icon}</span>
                                  <motion.span whileHover={{ x: 5 }}>
                                    {item.name}
                                  </motion.span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2"
              >
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mr-2"
                  >
                    👋
                  </motion.span>
                  Get In Touch
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-lg text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden bg-white overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {menus.map((menu, index) => (
                  <div key={index} className="mb-1">
                    {menu.simple ? (
                      <Link
                        href={menu.href}
                        className="block px-4 py-3 font-medium text-slate-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mr-3">{menu.icon}</span>
                        {menu.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === menu.title ? null : menu.title
                            )
                          }
                          className={`w-full flex justify-between items-center px-4 py-3 font-medium rounded-lg transition-colors ${
                            activeMenu === menu.title
                              ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                              : "text-slate-700 hover:bg-blue-50"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="mr-3">{menu.icon}</span>
                            <span>{menu.title}</span>
                          </div>
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: activeMenu === menu.title ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {activeMenu === menu.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6"
                            >
                              {menu.items.map((item, i) => (
                                <Link
                                  key={i}
                                  href={item.href}
                                  className="block px-4 py-2 text-slate-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <span className="mr-3">{item.icon}</span>
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    href="/get-in-touch"
                    className="block w-full text-center bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow font-medium hover:shadow-md transition-all flex items-center justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="mr-2">👋</span>
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
