// app/page.js
"use client";

import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHeart,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaBookOpen,
} from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showNoticeBoard, setShowNoticeBoard] = useState(true);
  const [showFloatingNotice, setShowFloatingNotice] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system color scheme preference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setShowFloatingNotice(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const splitRef = useRef(null);

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.05]);

  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.2 });
  const isSplitInView = useInView(splitRef, { once: false, amount: 0.5 });

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${isDarkMode ? "dark" : ""}`}
      ref={containerRef}
    >
      {/* Notice Board Banner */}
      <AnimatePresence>
        {showNoticeBoard && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-accent text-white px-4 py-2 text-center relative z-40"
          >
            <div className="flex items-center justify-center flex-wrap gap-2">
              <span className="font-bold text-sm sm:text-base">NOTICE:</span>
              <span className="text-sm sm:text-base">
                New admissions open for 2025-2026 academic year!
              </span>
              <button
                onClick={() => setShowNoticeBoard(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
                aria-label="Close notice"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row min-h-screen relative overflow-hidden"
        ref={heroRef}
      >
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative overflow-hidden min-h-[500px] md:min-h-[600px]"
          style={{ y: isMobile ? 0 : y }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-800 to-indigo-900"
            initial={{ opacity: 0.9 }}
            animate={{
              opacity: [0.9, 1, 0.9],
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-600 to-transparent"
            initial={{ opacity: 0.15 }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
              backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="absolute inset-0 opacity-8 bg-[url('/pattern.svg')] bg-repeat"></div>

          <motion.div
            className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-70"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-20 left-16 w-0 h-0 opacity-70"
            style={{
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: "43px solid rgba(236, 72, 153, 0.7)",
            }}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/4 right-12 w-16 h-16 opacity-70 bg-gradient-to-br from-amber-400 to-orange-500"
            style={{ transform: "rotate(45deg)" }}
            animate={{
              rotate: [45, 60, 45],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-16 right-20 w-20 h-10 rounded-t-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-70"
            animate={{
              y: [0, 10, 0],
              x: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white relative z-10 max-w-lg mx-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-6 relative"
                initial={{ rotate: -15, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white bg-opacity-20 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255,255,255,0.4)",
                      "0 0 0 10px rgba(255,255,255,0)",
                      "0 0 0 0 rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-4 border-2 border-white border-opacity-40 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">HA</span>
                </div>
              </motion.div>

              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                Hanvil Academy
              </div>
              <div className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-md mx-auto">
                "Nurturing Tomorrow's Leaders Through Excellence and Innovation"
              </div>

              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(129, 140, 248, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/apply">
                  <span className="flex items-center gap-2">
                    Begin Your Journey
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.button>

              <motion.div
                className="mt-12 flex flex-wrap justify-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-center flex flex-col items-center">
                  <div className="mb-2">
                    <svg
                      className="w-6 h-6 text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 5.727 2.458a1 1 0 00.788 0l7-3a1 1 0 000-1.842l-7-3zM6.257 20c1.105 0 1.92-.807 1.92-1.96v-5.692L3.11 10.31v4.47c0 1.153.815 1.96 1.92 1.96h1.228z"></path>
                    </svg>
                  </div>
                  <div className="text-xl font-bold">12+</div>
                  <div className="text-sm">Academic Programs</div>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="mb-2">
                    <svg
                      className="w-6 h-6 text-pink-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm">Learning Access</div>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="mb-2">
                    <svg
                      className="w-6 h-6 text-green-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                  </div>
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm">Expert Faculty</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {[...Array(12)].map((_, i) => {
            const shapes = [
              <div
                className={`rounded-full bg-gradient-to-br ${
                  i % 3 === 0
                    ? "from-blue-400 to-cyan-300"
                    : i % 3 === 1
                    ? "from-pink-400 to-purple-300"
                    : "from-amber-400 to-yellow-300"
                } w-${(i % 3) + 2} h-${(i % 3) + 2}`}
              />,
              <div
                className={`bg-gradient-to-br ${
                  i % 3 === 0
                    ? "from-green-400 to-teal-300"
                    : i % 3 === 1
                    ? "from-red-400 to-rose-300"
                    : "from-indigo-400 to-violet-300"
                } w-${(i % 2) + 2} h-${(i % 2) + 2}`}
                style={{ transform: "rotate(45deg)" }}
              />,
              <div
                className={`w-0 h-0 border-l-[5px] border-r-[5px] border-b-[10px] ${
                  i % 3 === 0
                    ? "border-cyan-400"
                    : i % 3 === 1
                    ? "border-fuchsia-400"
                    : "border-amber-400"
                }`}
                style={{ transform: "rotate(15deg)" }}
              />,
            ];

            const isLeftSide = Math.random() > 0.5;
            const xPosition = isLeftSide
              ? `${Math.random() * 20}%`
              : `${80 + Math.random() * 20}%`;

            return (
              <motion.div
                key={i}
                className="absolute opacity-60"
                style={{ top: `${Math.random() * 100}%`, left: xPosition }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 50],
                  x: [0, (Math.random() - 0.5) * 50],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, i % 5 === 0 ? 1.5 : 1, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                {shapes[i % shapes.length]}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-auto bg-cover bg-center relative"
          style={{
            scale: isMobile ? 1 : scale,
            opacity: isMobile ? 1 : opacity,
          }}
          initial={{ scale: 1.1 }}
          animate={isHeroInView ? { scale: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Image
              src="/pic15.jpg"
              alt="School"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative" ref={storyRef}>
        <motion.div
          className="min-h-[60vh] md:h-screen flex items-center justify-center bg-cover bg-fixed relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-600">
            <Image
              src="/pic6.jpg"
              alt="School background"
              fill
              style={{ objectFit: "cover", opacity: 0.6 }}
            />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-white p-4 sm:p-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
              We Are More Than a School
            </h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              A community where every child discovers their potential and
              develops the skills to thrive in an ever-changing world.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="py-12 md:py-16 lg:min-h-screen lg:py-16 flex items-center justify-center bg-base-200 dark:bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-full max-w-6xl px-4">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center dark:text-white"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FaCalendarAlt className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Our History
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Founded in 2005 with just 50 students, we've grown into one
                    of the region's most respected educational institutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary text-white p-3 rounded-full mr-4">
                      <FaAward className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Key Milestones
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>2010: First BECE batch with 100% pass rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>2015: New campus with modern facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>2020: Established ICT Center of Excellence</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-accent text-white p-3 rounded-full mr-4">
                      <FaUsers className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Our Community
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    We're more than a school - we're a family. Our alumni
                    network spans across Ghana and beyond.
                  </p>
                  <div className="mt-4 flex justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        500+
                      </div>
                      <div className="text-sm dark:text-gray-300">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">
                        50+
                      </div>
                      <div className="text-sm dark:text-gray-300">Staff</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">18+</div>
                      <div className="text-sm dark:text-gray-300">Years</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 bg-primary text-primary-content rounded-xl p-6 md:p-8 shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <motion.div
                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/pic74.png"
                      alt="School Founder"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">From the Founder</h3>
                  <blockquote className="text-lg italic mb-4">
                    "Our vision was to create a school where every child feels
                    valued and empowered to reach their full potential."
                  </blockquote>
                  <p className="font-semibold">- Dr. Kwame Mensah, Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="py-12 md:py-16 lg:min-h-screen flex items-center justify-center bg-primary text-primary-content dark:bg-gray-800">
          <div className="text-center p-4 max-w-5xl">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              What Makes Us Unique
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {[
                {
                  icon: (
                    <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto mb-3 md:mb-4" />
                  ),
                  title: "Academic Excellence",
                  text: "Our innovative curriculum develops critical thinking and problem-solving skills.",
                },
                {
                  icon: (
                    <FaChalkboardTeacher className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto mb-3 md:mb-4" />
                  ),
                  title: "Dedicated Staff",
                  text: "Highly qualified teachers passionate about nurturing each child's talents.",
                },
                {
                  icon: (
                    <FaHeart className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto mb-3 md:mb-4" />
                  ),
                  title: "Character Building",
                  text: "We emphasize values, leadership, and social responsibility.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-primary-focus p-4 sm:p-6 rounded-xl mb-4 md:mb-0"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5,
                      },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-60 sm:h-80 md:h-screen bg-blue-300 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-1"
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-full max-w-6xl px-4">
              <motion.div
                className="text-center text-white bg-emerald-500 bg-opacity-70 p-6 md:p-8 rounded-xl mx-auto"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Our Vision in Action
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                  See how we're creating an environment where students don't
                  just learn, but learn how to learn.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <motion.div
                    className="bg-white bg-opacity-90 rounded-lg p-6 text-gray-800 dark:text-gray-800"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <FaLightbulb className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Innovative Learning
                    </h3>
                    <p>
                      Project-based curriculum that fosters creativity and
                      critical thinking skills.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white bg-opacity-90 rounded-lg p-6 text-gray-800 dark:text-gray-800"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <FaBookOpen className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Holistic Education
                    </h3>
                    <p>
                      Balancing academics with arts, sports, and character
                      development.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white bg-opacity-90 rounded-lg p-6 text-gray-800 dark:text-gray-800"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <FaChalkboardTeacher className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Teacher Development
                    </h3>
                    <p>
                      Continuous professional growth for our dedicated
                      educators.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="flex flex-col lg:flex-row min-h-screen"
        ref={splitRef}
      >
        <motion.div
          className="w-full lg:w-1/2 min-h-[50vh] lg:h-auto bg-cover bg-center flex items-center justify-center p-6 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/student.jpg')",
          }}
          initial={{ x: "-100%" }}
          animate={isSplitInView ? { x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isSplitInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white text-center max-w-xs sm:max-w-md"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-300 mb-4 overflow-hidden relative">
                <Image
                  src="/pic75.png"
                  alt="Sarah"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4">
                "Green Valley helped me discover my love for science and gave me
                the confidence to pursue my dreams."
              </blockquote>
              <p className="font-bold text-sm md:text-base">
                - Sarah, Class of 2023
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 min-h-[50vh] lg:h-auto bg-cover bg-center flex items-center justify-center p-6 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,25,50,0.7), rgba(0,25,50,0.7)), url('/teacher.jpg')",
          }}
          initial={{ x: "100%" }}
          animate={isSplitInView ? { x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isSplitInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white text-center max-w-xs sm:max-w-md"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-300 mb-4 overflow-hidden relative">
                <Image
                  src="/pic72.png"
                  alt="Mr. Johnson"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4">
                "Teaching here is rewarding because we get to see students grow
                as well-rounded individuals."
              </blockquote>
              <p className="font-bold text-sm md:text-base">
                - Mr. Johnson, Head of Science
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-10 md:py-16 lg:py-20 px-4 bg-gradient-to-r from-secondary to-accent text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Join Our School Family Today
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="btn btn-primary btn-md md:btn-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <motion.button
              className="btn btn-outline btn-md md:btn-lg text-white hover:bg-white hover:text-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Talk to Us on </span>WhatsApp
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-base-200 dark:bg-gray-900 py-8 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 dark:text-white"
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h3>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <motion.div
              className="absolute h-1 bg-primary top-1/2 left-0 right-0 transform -translate-y-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5 }}
            />

            <div className="flex justify-between relative">
              {[
                { year: "2005", event: "Founded" },
                { year: "2010", event: "First BECE batch" },
                { year: "2015", event: "New campus opened" },
                { year: "2020", event: "ICT Centre built" },
                { year: "2024", event: "100% BECE pass" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-content flex items-center justify-center mx-auto mb-2 text-base md:text-xl font-bold"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {item.year}
                  </motion.div>
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-2 md:p-3 rounded-lg shadow-md w-24 md:w-40 text-sm md:text-base dark:text-white"
                    whileHover={{ y: -5 }}
                  >
                    {item.event}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <div className="carousel w-full">
              {[
                { year: "2005", event: "Founded" },
                { year: "2010", event: "First BECE batch" },
                { year: "2015", event: "New campus opened" },
                { year: "2020", event: "ICT Centre built" },
                { year: "2024", event: "100% BECE pass" },
              ].map((item, index) => (
                <div
                  key={index}
                  id={`journey-slide${index}`}
                  className="carousel-item relative w-full flex flex-col items-center justify-center p-4"
                >
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-content flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      {item.year}
                    </motion.div>
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs dark:text-white"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-lg sm:text-xl font-bold mb-2">
                        {item.event}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {item.event === "Founded" &&
                          "Our school's humble beginnings with a vision for excellence."}
                        {item.event === "First BECE batch" &&
                          "First group of students to complete their Basic Education Certificate Examination."}
                        {item.event === "New campus opened" &&
                          "Expanded our facilities to accommodate our growing student body."}
                        {item.event === "ICT Centre built" &&
                          "State-of-the-art technology center to prepare students for the digital future."}
                        {item.event === "100% BECE pass" &&
                          "All our students achieved success in their examinations."}
                      </p>
                    </motion.div>
                  </motion.div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a
                      href={`#journey-slide${index === 0 ? 4 : index - 1}`}
                      className="btn btn-circle btn-sm"
                    >
                      <FaChevronLeft />
                    </a>
                    <a
                      href={`#journey-slide${index === 4 ? 0 : index + 1}`}
                      className="btn btn-circle btn-sm"
                    >
                      <FaChevronRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-base-300 dark:border-gray-700 max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg font-bold mb-2 dark:text-white">
                Hanvil Academy
              </h4>
              <p className="text-sm dark:text-gray-300">
                Nurturing Tomorrow's Leaders Since 2005
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["About", "Academics", "Admissions", "Contact"].map(
                (link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="link link-hover text-sm dark:text-gray-300"
                  >
                    {link}
                  </a>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                <FaPhone className="text-sm dark:text-gray-300" />
                <span className="text-sm dark:text-gray-300">
                  +233 24 123 4567
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                <FaEnvelope className="text-sm dark:text-gray-300" />
                <span className="text-sm dark:text-gray-300">
                  info@Hanvil Academy.edu.gh
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <FaMapMarkerAlt className="text-sm dark:text-gray-300" />
                <span className="text-sm dark:text-gray-300">Accra, Ghana</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-6 text-sm dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              © {new Date().getFullYear()} Hanvil Academy. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Floating Notice Board */}
      <AnimatePresence>
        {showFloatingNotice && (
          <motion.div
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <motion.div
              className="bg-yellow-50 dark:bg-gray-800 p-4 rounded-lg shadow-xl w-64 border-2 border-yellow-200 dark:border-gray-700 relative"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-center underline dark:text-white">
                  Notice Board
                </h3>
                <button
                  onClick={() => setShowFloatingNotice(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 absolute top-2 right-2"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                <motion.div
                  className="p-2 bg-white dark:bg-gray-700 rounded border-l-4 border-red-500"
                  whileHover={{ x: 5 }}
                >
                  <p className="font-semibold text-sm sm:text-base dark:text-white">
                    Admissions Open
                  </p>
                  <p className="text-xs sm:text-sm dark:text-gray-300">
                    2024-25 academic year
                  </p>
                </motion.div>
                <motion.div
                  className="p-2 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500"
                  whileHover={{ x: 5 }}
                >
                  <p className="font-semibold text-sm sm:text-base dark:text-white">
                    Sports Day
                  </p>
                  <p className="text-xs sm:text-sm dark:text-gray-300">
                    15th June, 9 AM
                  </p>
                </motion.div>
                <motion.div
                  className="p-2 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500"
                  whileHover={{ x: 5 }}
                >
                  <p className="font-semibold text-sm sm:text-base dark:text-white">
                    PTA Meeting
                  </p>
                  <p className="text-xs sm:text-sm dark:text-gray-300">
                    22nd June, 2 PM
                  </p>
                </motion.div>
              </div>
              <button className="btn btn-sm btn-outline mt-3 w-full text-xs sm:text-sm dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                View All Notices
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <motion.button
        className={`fixed bottom-4 right-4 z-50 btn btn-circle btn-primary shadow-lg ${
          scrollYProgress.get() > 0.1 ? "block" : "hidden"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  );
}
