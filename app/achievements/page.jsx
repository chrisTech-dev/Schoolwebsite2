"use client";

import { useRef, useState, useEffect } from "react";
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
      className={`bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 dark:text-white mb-4 px-2">
          Our{" "}
          <span className="text-yellow-600 dark:text-yellow-500">
            Achievements
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed px-2">
          At Hanvil Academy, we believe in nurturing excellence. Over the years,
          our students, staff, and programs have reached remarkable milestones.
        </p>
        <div className="w-20 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto"></div>
      </section>

      {/* Academic Achievements */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center mb-6 px-2">
          <FaGraduationCap className="text-3xl text-indigo-700 dark:text-indigo-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Academic Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AchievementCard
            icon={<FaTrophy className="text-4xl md:text-5xl" />}
            title="BECE Excellence"
            description="100% pass rate for 5 consecutive years (2019-2023)"
            color="yellow"
            darkMode={isDarkMode}
          />
          <AchievementCard
            icon={<FaMedal className="text-4xl md:text-5xl" />}
            title="Quiz Champions"
            description="Regional Science & Math Quiz champions 2020, 2022"
            color="blue"
            darkMode={isDarkMode}
          />
          <AchievementCard
            icon={<FaGraduationCap className="text-4xl md:text-5xl" />}
            title="Top Performers"
            description="5 students ranked in top 10 of district BECE results"
            color="green"
            darkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center mb-6 px-2">
          <FaRunning className="text-3xl text-indigo-700 dark:text-indigo-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Sports & Athletics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ImageCard
            src="/pic25.jpg"
            alt="Sports Trophy"
            title="District Champions"
            description="Winners of inter-school athletics competition 3 years running"
            darkMode={isDarkMode}
          />
          <ImageCard
            src="/pic51.jpg"
            alt="Football Team"
            title="Football Excellence"
            description="Junior football team placed 2nd in regional tournament"
            darkMode={isDarkMode}
          />
          <ImageCard
            src="/pic26.jpg"
            alt="Athletics"
            title="Individual Honors"
            description="12 gold, 8 silver, and 5 bronze medals in district events"
            darkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Cultural & Creative */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center mb-6 px-2">
          <FaMusic className="text-3xl text-indigo-700 dark:text-indigo-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Cultural & Creative Arts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-indigo-900 dark:bg-indigo-800 text-white p-4 sm:p-6 rounded-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <FaPalette className="text-4xl sm:text-5xl text-yellow-400 mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Art & Design
                </h3>
                <p className="text-indigo-200 dark:text-indigo-100 text-sm sm:text-base">
                  National Youth Art Competition winners (2021), with 3 students
                  receiving scholarships
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <Image
                src="/pic52.jpg"
                alt="Art Exhibition"
                width={500}
                height={300}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/pic54.jpg"
                alt="Student Art"
                width={500}
                height={300}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-700 dark:to-indigo-800 text-white p-4 sm:p-6 rounded-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
              <FaMusic className="text-4xl sm:text-5xl text-yellow-400 mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Performing Arts
                </h3>
                <p className="text-indigo-100 dark:text-indigo-50 text-sm sm:text-base">
                  Best Drama Group award at National Cultural Festival 2022
                </p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src="/pic64.jpg"
                alt="Drama Performance"
                width={800}
                height={450}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff & School Recognition */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center mb-6 px-2">
          <FaChalkboardTeacher className="text-3xl text-indigo-700 dark:text-indigo-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Staff & School Recognition
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 sm:p-6 bg-indigo-800 dark:bg-indigo-900 text-white">
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-900 dark:text-white">
                School Accolades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-2 sm:mb-4">
                    Recognized by Ghana Education Service as "Model School for
                    Inclusive Education"
                  </p>
                  <Image
                    src="/pic31.jpg"
                    alt="GES Award"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-2 sm:mb-4">
                    Featured in Ghana Education Times for innovative ICT
                    integration
                  </p>
                  <Image
                    src="/pic66.jpg"
                    alt="Media Feature"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mb-16 bg-indigo-900 dark:bg-indigo-800 text-white rounded-xl p-4 sm:p-6 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          By The Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
          <StatBox number="150+" label="BECE Graduates" darkMode={isDarkMode} />
          <StatBox
            number="20+"
            label="Academic Trophies"
            darkMode={isDarkMode}
          />
          <StatBox number="10+" label="Regional Awards" darkMode={isDarkMode} />
          <StatBox
            number="5"
            label="Years 100% Pass Rate"
            darkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-900 dark:text-white px-2">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2">
          <TestimonialCard
            quote="Hanvil Academy gave me the foundation to win a STEM scholarship. The science program was exceptional!"
            name="Kwabena Osei"
            year="2019 Graduate"
            image="/pic55.jpg"
            darkMode={isDarkMode}
          />
          <TestimonialCard
            quote="The arts program helped me discover my talent in painting. After winning the national competition, I got an art scholarship."
            name="Ama Serwaa"
            year="2021 Graduate"
            image="/pic57.jpg"
            darkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto mb-16 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-900 dark:text-white">
          Our Journey
        </h2>
        <div className="relative">
          {!isMobile && (
            <div className="absolute left-1/2 h-full w-0.5 bg-indigo-300 dark:bg-indigo-600 transform -translate-x-1/2"></div>
          )}

          {achievements.map((item, index) => (
            <div
              key={index}
              className={`mb-6 w-full ${
                isMobile
                  ? "pl-6 border-l-2 border-indigo-300 dark:border-indigo-600"
                  : ""
              }`}
            >
              <div
                className={`w-full p-4 sm:p-6 rounded-xl shadow-lg ${getCategoryColor(
                  item.category,
                  isDarkMode
                )}`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mr-3 sm:mr-4">
                    <span className="font-bold text-indigo-900 dark:text-white text-sm sm:text-base">
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
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-900 dark:text-white">
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
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={img}
                alt="Achievement"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Achievement Card Component
function AchievementCard({ icon, title, description, color, darkMode }) {
  const colorClasses = {
    yellow: darkMode
      ? "border-yellow-400 text-yellow-400"
      : "border-yellow-500 text-yellow-600",
    blue: darkMode
      ? "border-blue-400 text-blue-400"
      : "border-blue-500 text-blue-600",
    green: darkMode
      ? "border-green-400 text-green-400"
      : "border-green-500 text-green-600",
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-l-4 ${colorClasses[color]}`}
    >
      <div className={`${colorClasses[color]} mb-3`}>{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}

// Image Card Component
function ImageCard({ src, alt, title, description, darkMode }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

// Stat Box Component
function StatBox({ number, label, darkMode }) {
  return (
    <div className="p-2 sm:p-4">
      <div
        className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
          darkMode ? "text-yellow-400" : "text-yellow-500"
        } mb-1 sm:mb-2`}
      >
        {number}
      </div>
      <div className="text-xs sm:text-sm md:text-base">{label}</div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, name, year, image, darkMode }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg relative">
      <FaQuoteLeft
        className={`text-3xl sm:text-4xl ${
          darkMode ? "text-indigo-900" : "text-indigo-100"
        } absolute top-3 right-3`}
      />
      <p className="text-base sm:text-lg italic mb-4 relative z-10 dark:text-gray-300">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-200 dark:bg-indigo-900 mr-3 overflow-hidden relative">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <div className="font-bold text-sm sm:text-base dark:text-white">
            {name}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            {year}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getCategoryColor(category, darkMode) {
  switch (category) {
    case "academic":
      return darkMode ? "bg-blue-700" : "bg-blue-600";
    case "sports":
      return darkMode ? "bg-green-700" : "bg-green-600";
    case "arts":
      return darkMode ? "bg-purple-700" : "bg-purple-600";
    case "staff":
      return darkMode ? "bg-yellow-600" : "bg-yellow-600";
    default:
      return darkMode ? "bg-indigo-700" : "bg-indigo-600";
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
