"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  FaDownload,
  FaFileAlt,
  FaCheckCircle,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ApplyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("download");
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    parentName: "",
    phone: "",
    email: "",
    classLevel: "",
    photo: null,
    birthCert: null,
  });
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Application submitted successfully!");
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
          Apply to{" "}
          <span className="text-yellow-600 dark:text-yellow-400">
            Hanvil Academy
          </span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute -inset-4 bg-blue-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
            "We welcome applications for Kindergarten, Primary, and Junior High
            School levels. Follow the steps below to apply and give your child
            the best foundation for the future."
          </p>
        </motion.div>

        <motion.div
          className="w-24 h-1 bg-yellow-500 mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.section>

      {/* Application Options */}
      <motion.section
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        <div className="flex overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg mb-8">
          <button
            className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
              activeTab === "download"
                ? "bg-indigo-600 text-white"
                : "text-indigo-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("download")}
          >
            <FaDownload className="inline mr-2" />
            Download Form
          </button>
          <button
            className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
              activeTab === "online"
                ? "bg-indigo-600 text-white"
                : "text-indigo-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("online")}
          >
            <FaFileAlt className="inline mr-2" />
            Apply Online
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "download" ? (
              <div className="p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
                    Download Admission Form
                  </h2>

                  <motion.a
                    href="/admission-form.pdf"
                    download
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg mb-8 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="text-xl mr-3" />
                    <span className="text-lg font-medium">
                      Download Form (PDF)
                    </span>
                  </motion.a>

                  <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                      <FaCheckCircle className="inline text-green-600 mr-2" />
                      How to Apply
                    </h3>
                    <ol className="space-y-4 pl-6">
                      <motion.li
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <span className="font-semibold">
                          1. Download and print
                        </span>{" "}
                        the admission form
                      </motion.li>
                      <motion.li
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <span className="font-semibold">2. Fill out</span> all
                        required sections:
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>Student details</li>
                          <li>Parent/guardian information</li>
                          <li>Previous school information (if applicable)</li>
                        </ul>
                      </motion.li>
                      <motion.li
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <span className="font-semibold">
                          3. Attach required documents:
                        </span>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>1 recent passport photograph of the child</li>
                          <li>Copy of birth certificate</li>
                          <li>Last school report (for transfers)</li>
                          <li>Immunization records (for KG applicants)</li>
                        </ul>
                      </motion.li>
                      <motion.li
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <span className="font-semibold">
                          4. Submit completed form:
                        </span>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>
                            In person at the school office (Monday-Friday,
                            8am-3pm)
                          </li>
                          <li>
                            Via email to{" "}
                            <span className="text-blue-600 dark:text-blue-400">
                              admissions@hanvilacademy.edu.gh
                            </span>
                          </li>
                        </ul>
                      </motion.li>
                    </ol>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
                    Online Application
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="childName"
                        >
                          Full Name of Child
                        </label>
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="dob"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="parentName"
                        >
                          Parent/Guardian Name
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="classLevel"
                        >
                          Class Applying For
                        </label>
                        <select
                          id="classLevel"
                          name="classLevel"
                          value={formData.classLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        >
                          <option value="">Select Class</option>
                          <option value="kg1">Kindergarten 1</option>
                          <option value="kg2">Kindergarten 2</option>
                          <option value="basic1">Basic 1</option>
                          <option value="basic2">Basic 2</option>
                          <option value="basic3">Basic 3</option>
                          <option value="basic4">Basic 4</option>
                          <option value="basic5">Basic 5</option>
                          <option value="basic6">Basic 6</option>
                          <option value="jhs1">JHS 1</option>
                          <option value="jhs2">JHS 2</option>
                          <option value="jhs3">JHS 3</option>
                        </select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="photo"
                        >
                          Passport Photo (JPEG/PNG)
                        </label>
                        <input
                          type="file"
                          id="photo"
                          name="photo"
                          onChange={handleChange}
                          accept="image/*"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <label
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          htmlFor="birthCert"
                        >
                          Birth Certificate (PDF/Image)
                        </label>
                        <input
                          type="file"
                          id="birthCert"
                          name="birthCert"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      <h3 className="text-lg font-semibold text-indigo-800 dark:text-white mb-3">
                        Required Documents
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                          1 recent passport photograph of the child (max 2MB)
                        </li>
                        <li>Clear copy of birth certificate (max 5MB)</li>
                        <li>Previous school report (for transfers, max 5MB)</li>
                      </ul>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      Submit Application
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Admission Period & Contact */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-3xl text-indigo-600 dark:text-indigo-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
              Admission Period
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Admissions are open from{" "}
              <span className="font-semibold">May to August</span> each year for
              the upcoming academic term beginning in September.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                <span className="font-bold">Early application discount:</span>{" "}
                10% off tuition for applications submitted before June 30.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Spaces are limited in each class — we recommend applying early to
              secure your child's place.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-indigo-900 text-white rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <FaPhone className="text-3xl text-yellow-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Need Help With Your Application?
            </h2>
          </div>

          <div className="space-y-6">
            <p>
              Our admissions team is available to answer your questions and
              guide you through the process.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-yellow-400 mr-3" />
                <span>+233 24 123 4567 (Office)</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-400 mr-3" />
                <span>+233 55 987 6543 (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3" />
                <span>admissions@hanvilacademy.edu.gh</span>
              </div>
            </div>

            <div className="bg-indigo-800 rounded-lg p-4">
              <p className="font-medium">
                <span className="text-yellow-400">Office Hours:</span>{" "}
                Monday-Friday, 8:00am - 3:00pm
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
          What Happens After You Apply?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Application Review
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our team will review your application within 3-5 working days and
              contact you if any information is missing.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Assessment & Interview
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              For certain grade levels, we may schedule a simple assessment or
              interview with the child and parents.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Admission Decision
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You'll receive an official response within 10 working days, along
              with next steps for enrollment if accepted.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Ready to Begin Your Child's Educational Journey?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Choose your preferred application method above or contact our
            admissions team for personalized assistance.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Application Now
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
