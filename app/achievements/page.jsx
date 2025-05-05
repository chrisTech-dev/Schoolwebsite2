"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaTrophy,
  FaMedal,
  FaGraduationCap,
  FaRunning,
  FaMusic,
  FaPalette,
  FaChalkboardTeacher,
  FaQuoteLeft,
} from "react-icons/fa";

export default function AchievementsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const achievements = [
    { year: "2019", event: "First BECE 100% Pass Rate", category: "academic" },
    {
      year: "2020",
      event: "Regional Science Quiz Champions",
      category: "academic",
    },
    { year: "2021", event: "District Athletics Champions", category: "sports" },
    {
      year: "2022",
      event: "National Art Competition Winners",
      category: "arts",
    },
    {
      year: "2023",
      event: "Best Teacher in District Award",
      category: "staff",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      {/* Introduction Section - Mobile Optimized */}
      <motion.section
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 px-2">
          Our <span className="text-yellow-600">Achievements</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed px-2">
          "At Hanvil Academy, we believe in nurturing excellence. Over the
          years, our students, staff, and programs have reached remarkable
          milestones."
        </p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </motion.section>

      {/* Academic Achievements - Stack on Mobile */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-6 px-2">
          <FaGraduationCap className="text-3xl text-indigo-700 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            Academic Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AchievementCard
            icon={<FaTrophy className="text-4xl md:text-5xl" />}
            title="BECE Excellence"
            description="100% pass rate for 5 consecutive years (2019-2023)"
            color="yellow"
            isMobile={isMobile}
          />
          <AchievementCard
            icon={<FaMedal className="text-4xl md:text-5xl" />}
            title="Quiz Champions"
            description="Regional Science & Math Quiz champions 2020, 2022"
            color="blue"
            isMobile={isMobile}
          />
          <AchievementCard
            icon={<FaGraduationCap className="text-4xl md:text-5xl" />}
            title="Top Performers"
            description="5 students ranked in top 10 of district BECE results"
            color="green"
            isMobile={isMobile}
          />
        </div>
      </motion.section>

      {/* Sports & Athletics - Single Column on Mobile */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-6 px-2">
          <FaRunning className="text-3xl text-indigo-700 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            Sports & Athletics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ImageCard
            src="/pic25.jpg"
            alt="Sports Trophy"
            title="District Champions"
            description="Winners of inter-school athletics competition 3 years running"
            isMobile={isMobile}
          />
          <ImageCard
            src="/pic51.jpg"
            alt="Football Team"
            title="Football Excellence"
            description="Junior football team placed 2nd in regional tournament"
            isMobile={isMobile}
          />
          <ImageCard
            src="/pic26.jpg"
            alt="Athletics"
            title="Individual Honors"
            description="12 gold, 8 silver, and 5 bronze medals in district events"
            isMobile={isMobile}
          />
        </div>
      </motion.section>

      {/* Cultural & Creative - Stack on Mobile */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center mb-6 px-2">
          <FaMusic className="text-3xl text-indigo-700 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            Cultural & Creative Arts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-indigo-900 text-white p-4 sm:p-6 rounded-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <FaPalette className="text-4xl sm:text-5xl text-yellow-400 mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Art & Design
                </h3>
                <p className="text-indigo-200 text-sm sm:text-base">
                  National Youth Art Competition winners (2021), with 3 students
                  receiving scholarships
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <ResponsiveImage src="/pic52.jpg" alt="Art Exhibition" />
              <ResponsiveImage src="/pic54.jpg" alt="Student Art" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 sm:p-6 rounded-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <FaMusic className="text-4xl sm:text-5xl text-yellow-400 mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Performing Arts
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base">
                  Best Drama Group award at National Cultural Festival 2022
                </p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 relative">
              <ResponsiveImage
                src="/pic64.jpg"
                alt="Drama Performance"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Staff & School Recognition - Adjusted for Mobile */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center mb-6 px-2">
          <FaChalkboardTeacher className="text-3xl text-indigo-700 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            Staff & School Recognition
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 sm:p-6 bg-indigo-800 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Award-Winning Educators
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Best Teacher in District 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>2 teachers in National Excellence Program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>STEM Teaching Innovation Award 2021</span>
                </li>
              </ul>
            </div>
            <div className="md:w-2/3 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-900">
                School Accolades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                    Recognized by Ghana Education Service as "Model School for
                    Inclusive Education"
                  </p>
                  <ResponsiveImage
                    src="/pic31.jpg"
                    alt="GES Award"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                    Featured in Ghana Education Times for innovative ICT
                    integration
                  </p>
                  <ResponsiveImage
                    src="/pic66.jpg"
                    alt="Media Feature"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section - Adjusted for Mobile */}
      <motion.section
        className="max-w-6xl mx-auto mb-16 bg-indigo-900 text-white rounded-xl p-4 sm:p-6 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          By The Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
          <StatBox number="150+" label="BECE Graduates" isMobile={isMobile} />
          <StatBox number="20+" label="Academic Trophies" isMobile={isMobile} />
          <StatBox number="10+" label="Regional Awards" isMobile={isMobile} />
          <StatBox
            number="5"
            label="Years 100% Pass Rate"
            isMobile={isMobile}
          />
        </div>
      </motion.section>

      {/* Testimonials - Stack on Mobile */}
      <motion.section
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-900 px-2">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2">
          <TestimonialCard
            quote="Hanvil Academy gave me the foundation to win a STEM scholarship. The science program was exceptional!"
            name="Kwabena Osei"
            year="2019 Graduate"
            image="/pic55.jpg"
            isMobile={isMobile}
          />
          <TestimonialCard
            quote="The arts program helped me discover my talent in painting. After winning the national competition, I got an art scholarship."
            name="Ama Serwaa"
            year="2021 Graduate"
            image="/pic57.jpg"
            isMobile={isMobile}
          />
        </div>
      </motion.section>

      {/* Timeline - Full Width on Mobile */}
      <motion.section
        className="max-w-4xl mx-auto mb-16 px-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-900">
          Our Journey
        </h2>
        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          {!isMobile && (
            <div className="absolute left-1/2 h-full w-0.5 bg-indigo-300 transform -translate-x-1/2"></div>
          )}

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-6 w-full ${
                isMobile ? "pl-6 border-l-2 border-indigo-300" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.2 }}
            >
              <div
                className={`w-full p-4 sm:p-6 rounded-xl shadow-lg ${getCategoryColor(
                  item.category
                )}`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 sm:mr-4">
                    <span className="font-bold text-indigo-900 text-sm sm:text-base">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.event}
                  </h3>
                </div>
                <p className="text-white opacity-90 text-sm sm:text-base">
                  {getCategoryDescription(item.category)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section - 2 Columns on Mobile */}
      <motion.section
        className="max-w-6xl mx-auto px-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-900">
          Gallery of Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {[
            "/pic29.jpg",
            "/pic24.jpg",
            "/pic43.jpg",
            "/pic44.jpg",
            "/pic28.jpg",
            "/pic66.jpg",
            "/pic27.jpg",
            "/pic30.jpg",
          ].map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: isMobile ? 1 : 1.03 }}
            >
              <ResponsiveImage
                src={img}
                alt="Achievement"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

// Component for responsive images
function ResponsiveImage({ src, alt, className = "" }) {
  return (
    <div className="w-full h-full relative">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

// Component for achievement cards
function AchievementCard({ icon, title, description, color, isMobile }) {
  const colorClasses = {
    yellow: "border-yellow-500 text-yellow-600",
    blue: "border-blue-500 text-blue-600",
    green: "border-green-500 text-green-600",
  };

  return (
    <motion.div
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 ${colorClasses[color]}`}
      whileHover={{ y: isMobile ? 0 : -5 }}
    >
      <div className={`${colorClasses[color]} mb-3`}>{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </motion.div>
  );
}

// Component for image cards
function ImageCard({ src, alt, title, description, isMobile }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
    >
      <div className="aspect-video relative">
        <ResponsiveImage src={src} alt={alt} />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

// Component for stats
function StatBox({ number, label, isMobile }) {
  return (
    <motion.div
      className="p-2 sm:p-4"
      whileHover={{ scale: isMobile ? 1 : 1.05 }}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">
        {number}
      </div>
      <div className="text-xs sm:text-sm md:text-base">{label}</div>
    </motion.div>
  );
}

// Component for testimonials
function TestimonialCard({ quote, name, year, image, isMobile }) {
  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-xl shadow-lg relative"
      whileHover={{ y: isMobile ? 0 : -5 }}
    >
      <FaQuoteLeft className="text-3xl sm:text-4xl text-indigo-100 absolute top-3 right-3" />
      <p className="text-base sm:text-lg italic mb-4 relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-200 mr-3 overflow-hidden">
          <ResponsiveImage src={image} alt={name} />
        </div>
        <div>
          <div className="font-bold text-sm sm:text-base">{name}</div>
          <div className="text-gray-500 text-xs sm:text-sm">{year}</div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper functions
function getCategoryColor(category) {
  switch (category) {
    case "academic":
      return "bg-blue-600";
    case "sports":
      return "bg-green-600";
    case "arts":
      return "bg-purple-600";
    case "staff":
      return "bg-yellow-600";
    default:
      return "bg-indigo-600";
  }
}

function getCategoryDescription(category) {
  switch (category) {
    case "academic":
      return "A testament to our educational excellence";
    case "sports":
      return "Celebrating athletic achievements";
    case "arts":
      return "Recognizing creative talents";
    case "staff":
      return "Honoring our dedicated educators";
    default:
      return "A school milestone";
  }
}
