"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaDownload,
  FaCalendarAlt,
  FaBell,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function AcademicCalendarPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  // Academic calendar data
  const academicYear = {
    year: "2024/2025",
    terms: [
      {
        name: "1st Term",
        reopening: "January 9, 2025",
        midTermBreak: "February 28 - March 4, 2025",
        vacation: "April 11, 2025",
      },
      {
        name: "2nd Term",
        reopening: "May 6, 2025",
        midTermBreak: "June 20 - June 24, 2025",
        vacation: "July 31, 2025",
      },
      {
        name: "3rd Term",
        reopening: "September 3, 2025",
        midTermBreak: "October 18 - October 21, 2025",
        vacation: "December 6, 2025",
      },
    ],
    keyEvents: [
      { date: "January 9", event: "School Reopens (Term 1)" },
      { date: "February 21", event: "Inter-Class Sports Competition" },
      { date: "March 7", event: "Independence Day Celebration" },
      { date: "April 1-10", event: "End-of-Term Exams" },
      { date: "May 1", event: "Workers' Day (Holiday)" },
      { date: "July 15-20", event: "BECE Mock Exams" },
      { date: "September 3", event: "School Reopens (Term 3)" },
      { date: "November 15", event: "Parents-Teacher Conference" },
      { date: "December 6", event: "Prize-Giving & Closing Day" },
    ],
  };

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8`}
      ref={ref}
    >
      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Academic{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Calendar</span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute -inset-4 bg-blue-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
            "Below is our official academic calendar for the {academicYear.year}{" "}
            school year, based on the Ghana Education Service (GES) schedule.
            Please note that dates are subject to change."
          </p>
        </motion.div>

        <motion.div
          className="w-24 h-1 bg-yellow-500 mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.section>

      {/* Term Breakdown */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="flex items-center mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaCalendarAlt className="text-3xl text-indigo-700 dark:text-indigo-400 mr-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Term Dates
          </h2>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-800 dark:bg-indigo-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Term</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Reopening Date
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Mid-Term Break
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Vacation Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {academicYear.terms.map((term, index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <td className="px-6 py-4 font-medium text-indigo-900 dark:text-white">
                      {term.name}
                    </td>
                    <td className="px-6 py-4 dark:text-gray-300">
                      {term.reopening}
                    </td>
                    <td className="px-6 py-4 dark:text-gray-300">
                      {term.midTermBreak}
                    </td>
                    <td className="px-6 py-4 dark:text-gray-300">
                      {term.vacation}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>

      {/* Visual Calendar Section */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="flex items-center mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaCalendarAlt className="text-3xl text-indigo-700 dark:text-indigo-400 mr-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Visual Calendar
          </h2>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Term 1 Calendar */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-indigo-600 dark:bg-indigo-800 p-3 text-white text-center font-bold">
                Term 1 (Jan - Apr)
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="font-medium text-indigo-800 dark:text-indigo-300"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, i) => {
                    const date = i + 1;
                    let className = "p-2 text-center rounded";
                    if (date === 9)
                      className += " bg-green-100 dark:bg-green-900 font-bold";
                    if (date >= 28 && date <= 4)
                      className += " bg-yellow-100 dark:bg-yellow-900";
                    if (date === 7) className += " bg-red-100 dark:bg-red-900";
                    if (date >= 1 && date <= 10)
                      className += " bg-blue-100 dark:bg-blue-900";
                    return (
                      <div key={date} className={className}>
                        {date <= 31 ? date : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-sm space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      School Reopens (Jan 9)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Mid-Term Break (Feb 28 - Mar 4)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Independence Day (Mar 7)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      End-of-Term Exams (Apr 1-10)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Term 2 Calendar */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-indigo-600 dark:bg-indigo-800 p-3 text-white text-center font-bold">
                Term 2 (May - Jul)
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="font-medium text-indigo-800 dark:text-indigo-300"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, i) => {
                    const date = i + 1;
                    let className = "p-2 text-center rounded";
                    if (date === 6)
                      className += " bg-green-100 dark:bg-green-900 font-bold";
                    if (date >= 20 && date <= 24)
                      className += " bg-yellow-100 dark:bg-yellow-900";
                    if (date === 1) className += " bg-red-100 dark:bg-red-900";
                    if (date >= 15 && date <= 20)
                      className += " bg-blue-100 dark:bg-blue-900";
                    return (
                      <div key={date} className={className}>
                        {date <= 31 ? date : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-sm space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      School Reopens (May 6)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Mid-Term Break (Jun 20-24)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Workers' Day (May 1)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      BECE Mock Exams (Jul 15-20)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Term 3 Calendar */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-indigo-600 dark:bg-indigo-800 p-3 text-white text-center font-bold">
                Term 3 (Sep - Dec)
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="font-medium text-indigo-800 dark:text-indigo-300"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, i) => {
                    const date = i + 1;
                    let className = "p-2 text-center rounded";
                    if (date === 3)
                      className += " bg-green-100 dark:bg-green-900 font-bold";
                    if (date >= 18 && date <= 21)
                      className += " bg-yellow-100 dark:bg-yellow-900";
                    if (date === 15)
                      className += " bg-purple-100 dark:bg-purple-900";
                    if (date === 6)
                      className += " bg-pink-100 dark:bg-pink-900";
                    return (
                      <div key={date} className={className}>
                        {date <= 31 ? date : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-sm space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      School Reopens (Sep 3)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Mid-Term Break (Oct 18-21)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Parents-Teacher Conf (Nov 15)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-500 mr-2 rounded-full"></div>
                    <span className="dark:text-gray-300">
                      Prize-Giving Day (Dec 6)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Key Events Timeline */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="flex items-center mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FaBell className="text-3xl text-indigo-700 dark:text-indigo-400 mr-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Key Events
          </h2>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="space-y-8">
            {academicYear.keyEvents.map((event, index) => (
              <motion.div
                key={index}
                className="flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
              >
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="text-indigo-800 dark:text-indigo-300 font-bold">
                      {event.date}
                    </span>
                  </div>
                  {index !== academicYear.keyEvents.length - 1 && (
                    <div className="w-0.5 h-full bg-indigo-200 dark:bg-indigo-700 my-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-indigo-900 dark:text-white mb-2">
                    {event.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mark your calendars for this important school event
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Downloads Section */}
      <motion.section
        className="max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="bg-indigo-900 dark:bg-indigo-950 text-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Download Calendar
            </h2>
            <p className="mb-6">
              Download a printable version of our academic calendar to keep
              track of important dates throughout the year.
            </p>

            <motion.a
              href="/downloads/academic-calendar.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-indigo-900 rounded-lg shadow-lg mb-6 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-xl mr-3" />
              <span className="text-lg font-medium">
                Download Full Calendar (PDF)
              </span>
            </motion.a>

            <div className="bg-indigo-800 dark:bg-indigo-900 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaExclamationTriangle className="text-yellow-400 mr-2" />
                Important Note
              </h3>
              <p>
                Dates may be adjusted in line with updates from the Ghana
                Education Service (GES). All changes will be communicated via
                SMS and on our Notice Board.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* School Holidays */}
      <motion.section
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
          Public Holidays & Breaks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
              National Holidays
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">March 7:</span> Independence Day
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">May 1:</span> Workers' Day
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">July 1:</span> Republic Day
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">December 25:</span> Christmas
                  Day
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
              School Breaks
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">April 12 - May 5:</span> Term 1
                  Vacation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">August 1 - September 2:</span>{" "}
                  Term 2 Vacation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">December 7 - January 8:</span>{" "}
                  Term 3 Vacation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="dark:text-gray-300">
                  <span className="font-medium">All Mid-Term Breaks:</span> See
                  term dates above
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Reminder Section */}
      <motion.section
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            For the latest updates to the academic calendar, subscribe to our
            SMS alerts or check our notice board regularly.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Alerts
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
