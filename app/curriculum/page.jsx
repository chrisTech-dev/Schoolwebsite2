"use client";

import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBook,
  FaFlask,
  FaLaptopCode,
  FaMusic,
  FaPencilAlt,
  FaRunning,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";

export default function CurriculumPage() {
  // Create separate refs for different sections
  const pageRef = useRef(null);
  const contentRef = useRef(null);
  const scrollRef = useRef(null);

  // Scroll progress animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [activeTab, setActiveTab] = useState("kg");
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  // Image paths for each curriculum level
  const curriculumImages = {
    kg: "/kg-classroom.jpg",
    primary: "/primary-classroom.jpg",
    jhs: "/jhs-classroom.jpg",
  };

  // Curriculum data
  const curriculum = {
    kg: {
      title: "Kindergarten",
      grades: "KG1 & KG2",
      image: "/pic35.jpg",
      subjects: [
        "Pre-literacy",
        "Pre-numeracy",
        "Creative Arts",
        "Music & Movement",
        "Physical Development",
      ],
      focus: [
        "Play-based learning",
        "Motor skills development",
        "Early socialization",
        "Language acquisition",
        "Creative expression",
      ],
      methods: [
        "Montessori activities",
        "Learning through play",
        "Storytelling",
        "Sensory activities",
        "Music and movement",
      ],
    },
    primary: {
      title: "Primary",
      grades: "Basic 1–6",
      image: "/pic42.jpg",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Our World Our People",
        "ICT",
        "Creative Arts",
        "Religious & Moral Education",
        "Physical Education",
      ],
      focus: [
        "Foundational literacy",
        "Numeracy skills",
        "Basic digital literacy",
        "Social development",
        "Creative thinking",
      ],
      methods: [
        "Interactive lessons",
        "Group projects",
        "Hands-on activities",
        "Educational games",
        "Technology integration",
      ],
    },
    jhs: {
      title: "Junior High",
      grades: "Basic 7–9",
      image: "/pic56.jpg",
      subjects: [
        "English",
        "Mathematics",
        "Integrated Science",
        "Social Studies",
        "BDT (Pre-Technical)",
        "ICT",
        "French",
        "Religious & Moral Education",
      ],
      focus: [
        "BECE preparation",
        "Analytical thinking",
        "Vocational awareness",
        "Research skills",
        "Leadership development",
      ],
      methods: [
        "Project-based learning",
        "Practical demonstrations",
        "Debates and discussions",
        "Career exploration",
        "Exam preparation",
      ],
    },
  };

  const coreSubjects = [
    {
      icon: <FaBook className="text-4xl" />,
      title: "English Language",
      description:
        "Comprehensive program covering reading, writing, grammar, and comprehension skills with emphasis on critical thinking and communication.",
    },
    {
      icon: <FaPencilAlt className="text-4xl" />,
      title: "Mathematics",
      description:
        "From basic arithmetic to geometry and algebra, we develop logical thinking and real-world problem-solving abilities.",
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Science",
      description:
        "Hands-on experiments and environmental studies that foster curiosity and scientific thinking about the natural world.",
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "ICT",
      description:
        "Digital literacy program covering basic computing, typing, software applications, and introductory coding concepts.",
    },
    {
      icon: <FaMusic className="text-4xl" />,
      title: "Creative Arts & PE",
      description:
        "Programs in visual arts, music, drama, and physical education to develop artistic skills and physical wellbeing.",
    },
  ];

  const enrichmentPrograms = [
    "French Language Instruction",
    "Accelerated Reading Program",
    "Introductory Robotics & Coding",
    "Entrepreneurship Training",
    "Cultural Exchange Programs",
    "Debate & Public Speaking",
    "Environmental Club",
    "STEM Competitions",
  ];

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      ref={pageRef}
    >
      {/* Hero Section with parallax effect */}
      <motion.section
        className="max-w-6xl mx-auto text-center mb-16 relative"
        style={{ y: parallaxY }}
      >
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-20 animate-blob"
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-200 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-20 animate-blob animation-delay-2000"
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-indigo-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-20 animate-blob animation-delay-4000"
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 dark:text-white mb-6 relative z-10"
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          Our{" "}
          <span className="text-yellow-600 dark:text-yellow-400">
            Curriculum
          </span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto relative z-10"
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
            At our school, our curriculum is designed to develop well-rounded
            learners — intellectually, socially, and morally. We follow the
            Ghana Education Service (GES) standards while enriching students'
            learning with practical, creative, and digital skills.
          </p>
        </motion.div>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8"
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        />
      </motion.section>

      {/* Main content with scroll animations */}
      <div ref={contentRef}>
        {/* Curriculum Stages - Animated Tabs */}
        <motion.section className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col items-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-8 text-center"
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              Academic Stages
            </motion.h2>

            {!isMobile && (
              <motion.div
                className="flex overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg mb-8"
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                {Object.keys(curriculum).map((key) => (
                  <motion.button
                    key={key}
                    className={`px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === key
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        : "text-indigo-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveTab(key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {curriculum[key].title}
                  </motion.button>
                ))}
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                animate={{
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <motion.h3
                        className="text-2xl font-bold text-indigo-900 dark:text-white mb-2"
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                        }}
                      >
                        {curriculum[activeTab].title}
                        <span className="text-yellow-600 dark:text-yellow-400">
                          {" "}
                          ({curriculum[activeTab].grades})
                        </span>
                      </motion.h3>

                      <motion.div
                        className="aspect-video relative rounded-xl overflow-hidden mb-6"
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.4,
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={curriculum[activeTab].image}
                          alt={`${curriculum[activeTab].title} classroom`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </motion.div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-indigo-800 dark:text-gray-300 mb-3 border-b border-indigo-200 dark:border-gray-700 pb-2">
                            Core Subjects
                          </h4>
                          <ul className="space-y-2">
                            {curriculum[activeTab].subjects.map(
                              (subject, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start"
                                  transition={{
                                    delay: 0.5 + index * 0.05,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                  }}
                                  whileHover={{ x: 5 }}
                                >
                                  <span className="text-yellow-500 dark:text-yellow-400 mr-2">
                                    •
                                  </span>
                                  <span className="dark:text-gray-300">
                                    {subject}
                                  </span>
                                </motion.li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-indigo-800 dark:text-gray-300 mb-3 border-b border-indigo-200 dark:border-gray-700 pb-2">
                            Learning Focus
                          </h4>
                          <ul className="space-y-2">
                            {curriculum[activeTab].focus.map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                transition={{
                                  delay: 0.6 + index * 0.05,
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 10,
                                }}
                                whileHover={{ x: 5 }}
                              >
                                <span className="text-blue-500 dark:text-blue-400 mr-2">
                                  •
                                </span>
                                <span className="dark:text-gray-300">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-2">
                          <h4 className="text-lg font-semibold text-indigo-800 dark:text-gray-300 mb-3 border-b border-indigo-200 dark:border-gray-700 pb-2">
                            Teaching Methods
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {curriculum[activeTab].methods.map(
                              (method, index) => (
                                <motion.div
                                  key={index}
                                  className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 text-center border border-indigo-100 dark:border-gray-600"
                                  transition={{
                                    delay: 0.8 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                  }}
                                  whileHover={{
                                    y: -5,
                                    scale: 1.05,
                                    background:
                                      "linear-gradient(to bottom right, #e0e7ff, #c7d2fe)",
                                  }}
                                >
                                  <p className="text-sm font-medium text-indigo-800 dark:text-gray-200">
                                    {method}
                                  </p>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Mobile Navigation - Enhanced with spring animation */}
        {isMobile && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="dropdown dropdown-top dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-primary shadow-lg bg-gradient-to-br from-indigo-600 to-purple-600 border-none"
              >
                <FaBook className="text-xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 mb-2"
              >
                {Object.keys(curriculum).map((key) => (
                  <motion.li
                    key={key}
                    transition={{ delay: 0.1 * parseInt(key) }}
                  >
                    <button
                      className={`text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        activeTab === key ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => setActiveTab(key)}
                    >
                      {curriculum[key].title}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Core Subjects Section with staggered animations */}
        <motion.section className="max-w-6xl mx-auto mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-900 dark:text-white mb-12"
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            Core{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Subjects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreSubjects.map((subject, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                transition={{
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    {subject.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-indigo-900 dark:text-white mb-3">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {subject.description}
                  </p>
                </div>
                <motion.div
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-4 text-center"
                  whileHover={{
                    background: "linear-gradient(to right, #e0e7ff, #c7d2fe)",
                  }}
                >
                  <motion.button
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Syllabus →
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Life Skills & Enrichment Section with advanced effects */}
        <motion.section className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="md:w-1/2 bg-indigo-900 text-white rounded-2xl shadow-xl overflow-hidden relative"
              transition={{
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"></div>
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >
                    <FaUsers className="text-3xl text-yellow-400 mr-4" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Life Skills & Moral Education
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      Character Development
                    </h3>
                    <p className="text-indigo-100">
                      Our comprehensive program instills values of
                      responsibility, respect, leadership, and teamwork through
                      daily practice and special activities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      Religious & Moral Education
                    </h3>
                    <p className="text-indigo-100">
                      Students explore ethical decision-making, cultural
                      awareness, and spiritual growth in our inclusive RME
                      program.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      Civic Education
                    </h3>
                    <p className="text-indigo-100">
                      Practical lessons in citizenship, national pride, and
                      community responsibility prepare students to be engaged
                      members of society.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              transition={{
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >
                    <FaGlobe className="text-3xl text-indigo-600 dark:text-indigo-400 mr-4" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
                    Enrichment Programs
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {enrichmentPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 flex items-start border border-indigo-100 dark:border-gray-600"
                      transition={{
                        delay: 1.1 + index * 0.05,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      whileHover={{
                        x: 5,
                        background:
                          "linear-gradient(to bottom right, #e0e7ff, #c7d2fe)",
                      }}
                    >
                      <span className="text-yellow-500 dark:text-yellow-400 mr-2 mt-1">
                        •
                      </span>
                      <span className="text-indigo-800 dark:text-gray-200 font-medium">
                        {program}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 border border-indigo-200 dark:border-gray-600"
                  whileHover={{
                    background: "linear-gradient(to right, #e0e7ff, #c7d2fe)",
                  }}
                >
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-white mb-2">
                    Special Features
                  </h3>
                  <ul className="space-y-2 text-indigo-700 dark:text-gray-300">
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        ✓
                      </span>
                      <span>Weekly French language classes from Basic 4</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        ✓
                      </span>
                      <span>Annual STEM Fair showcasing student projects</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        ✓
                      </span>
                      <span>
                        Entrepreneurship Day with real business simulations
                      </span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Assessment Section with advanced animations */}
        <motion.section
          className="max-w-6xl mx-auto mb-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          whileHover={{
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >
                    <FaChartLine className="text-3xl text-yellow-400 mr-4" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Assessment & Reporting
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      Continuous Evaluation
                    </h3>
                    <ul className="space-y-2 text-indigo-100">
                      <motion.li
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Weekly class assignments and quizzes</span>
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Monthly project-based assessments</span>
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Termly examinations covering all subjects</span>
                      </motion.li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      BECE Preparation
                    </h3>
                    <p className="text-indigo-100">
                      Our JHS students undergo rigorous preparation including
                      mock exams, remedial classes, and personalized coaching to
                      excel in the Basic Education Certificate Examination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-6">
                  Progress Reporting
                </h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                    >
                      <FaBook className="text-blue-600 dark:text-blue-300 text-xl" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-800 dark:text-white mb-2">
                        Detailed Report Cards
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Issued every term with academic performance, teacher
                        comments, and improvement recommendations.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3 mr-4"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                    >
                      <FaUsers className="text-indigo-600 dark:text-indigo-300 text-xl" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-800 dark:text-white mb-2">
                        Parent-Teacher Conferences
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Held twice per term to discuss student progress and
                        development strategies.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-green-100 dark:bg-green-900 rounded-full p-3 mr-4"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                    >
                      <FaRunning className="text-green-600 dark:text-green-300 text-xl" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-800 dark:text-white mb-2">
                        Holistic Evaluation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Assessments include academic performance, character
                        development, and extracurricular participation.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery & Downloads Section with advanced effects */}
        <motion.section className="max-w-6xl mx-auto" ref={scrollRef}>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-2/3">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-8"
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                Learning{" "}
                <span className="text-yellow-600 dark:text-yellow-400">
                  In Action
                </span>
              </motion.h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                {["pic59", "pic56", "pic58", "pic37", "pic39", "pic42"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      className="aspect-square relative rounded-xl overflow-hidden shadow-md"
                      transition={{
                        delay: 1.4 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <Image
                        src={`/${item}.jpg`}
                        alt="Learning activity"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">
                          View More
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div className="md:w-1/3">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-6"
                transition={{
                  delay: 1.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-6">
                  Download Resources
                </h3>

                <div className="space-y-4">
                  <motion.a
                    href="/curriculum-brochure.pdf"
                    download
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-colors border border-indigo-100 dark:border-gray-600"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center">
                      <FaDownload className="text-indigo-600 dark:text-indigo-400 mr-3" />
                      <span className="font-medium text-indigo-900 dark:text-white">
                        Curriculum Brochure
                      </span>
                    </div>
                    <span className="text-sm text-indigo-500 dark:text-indigo-300">
                      PDF
                    </span>
                  </motion.a>

                  <motion.a
                    href="/sample-timetable.pdf"
                    download
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-colors border border-indigo-100 dark:border-gray-600"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center">
                      <FaDownload className="text-indigo-600 dark:text-indigo-400 mr-3" />
                      <span className="font-medium text-indigo-900 dark:text-white">
                        Sample Timetable
                      </span>
                    </div>
                    <span className="text-sm text-indigo-500 dark:text-indigo-300">
                      PDF
                    </span>
                  </motion.a>

                  <motion.a
                    href="/bece-guide.pdf"
                    download
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-colors border border-indigo-100 dark:border-gray-600"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center">
                      <FaDownload className="text-indigo-600 dark:text-indigo-400 mr-3" />
                      <span className="font-medium text-indigo-900 dark:text-white">
                        BECE Preparation Guide
                      </span>
                    </div>
                    <span className="text-sm text-indigo-500 dark:text-indigo-300">
                      PDF
                    </span>
                  </motion.a>
                </div>

                <motion.div
                  className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/50 dark:to-amber-900/50 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800"
                  whileHover={{
                    background: "linear-gradient(to right, #fef9c3, #fef08a)",
                  }}
                >
                  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                    Need More Information?
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                    Contact our academic office for detailed curriculum
                    documents or specific program inquiries.
                  </p>
                  <motion.button
                    className="mt-3 bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
