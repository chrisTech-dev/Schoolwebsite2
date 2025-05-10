"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaMobileAlt,
  FaCalendarAlt,
  FaPercentage,
  FaExclamationTriangle,
  FaPhone,
} from "react-icons/fa";

export default function TuitionPage() {
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

  // Tuition data
  const tuition = {
    levels: [
      { name: "Creche / Nursery", termly: 3000, annual: 9000 },
      { name: "KG 1 – KG 2", termly: 4000, annual: 12000 },
      { name: "Primary (B1–B6)", termly: 4500, annual: 135000 },
      { name: "JHS (B7–B9)", termly: 5000, annual: 15000 },
    ],
    paymentMethods: [
      {
        method: "Bank Payment",
        details: [
          "Bank Name: GCB Bank",
          "Account Name: Hanvil Academy",
          "Account Number: 123456789012",
          "Branch: Accra Main",
        ],
      },
      {
        method: "Mobile Money",
        details: [
          "Number: 024 123 4567",
          "Name: Hanvil Academy",
          "Network: MTN, Vodafone, AirtelTigo",
        ],
      },
    ],
    paymentSchedule: [
      { term: "1st Term", deadline: "Before January 15" },
      { term: "2nd Term", deadline: "Before May 10" },
      { term: "3rd Term", deadline: "Before September 10" },
    ],
    otherCharges: [
      { item: "Admission Fee", amount: 100 },
      { item: "Uniform (2 sets)", amount: 150 },
      { item: "Textbooks & Stationery", amount: 200 },
      { item: "PTA Dues", amount: 30 },
      { item: "Sports Kit", amount: 80 },
      { item: "ICT Fee", amount: 50 },
    ],
    discounts: [
      "10% discount for parents with 3 or more children enrolled",
      "5% early payment discount (when paid before term begins)",
      "Sibling discount: 5% off for second child, 7% for third child",
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
          Tuition &{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Fees</span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute -inset-4 bg-blue-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
            At Hanvil Academy, we strive to offer quality education at an
            affordable cost. Below is a transparent breakdown of our tuition and
            other fees for the academic year.
          </p>
        </motion.div>

        <motion.div
          className="w-24 h-1 bg-yellow-500 mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.section>

      {/* Tuition Fees Table */}
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
          <FaMoneyBillWave className="text-3xl text-indigo-700 dark:text-indigo-400 mr-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
            Tuition Fees (2024/2025 Academic Year)
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
                  <th className="px-6 py-4 text-left font-semibold">Level</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Termly Fee (GHS)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Annual Fee (GHS)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {tuition.levels.map((level, index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <td className="px-6 py-4 font-medium text-indigo-900 dark:text-white">
                      {level.name}
                    </td>
                    <td className="px-6 py-4 dark:text-gray-300">
                      {level.termly.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 dark:text-gray-300">
                      {level.annual.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-medium">
                      Save GHS{" "}
                      {(level.termly * 3 - level.annual).toLocaleString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          * Annual payment offers a 10% discount compared to termly payments
        </motion.div>
      </motion.section>

      {/* Payment Information */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        {/* Payment Methods */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <FaUniversity className="text-3xl text-indigo-700 dark:text-indigo-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white">
              Payment Methods
            </h2>
          </div>

          <div className="space-y-8">
            {tuition.paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
                  {method.method}
                </h3>
                <ul className="space-y-2">
                  {method.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                        •
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Schedule */}
        <motion.div
          className="bg-indigo-900 dark:bg-indigo-950 text-white rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-3xl text-yellow-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold">Payment Schedule</h2>
          </div>

          <div className="space-y-6">
            {tuition.paymentSchedule.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="bg-yellow-400 text-indigo-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">
                    {item.term}
                  </h3>
                  <p className="text-indigo-100">{item.deadline}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 bg-indigo-800 dark:bg-indigo-900 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h3 className="font-semibold flex items-center mb-2">
              <FaExclamationTriangle className="text-yellow-400 mr-2" />
              Late Payment Policy
            </h3>
            <p>
              A late fee of GHS 20 applies after the 2nd week of resumption.
              Payments made after 4 weeks may result in temporary suspension of
              classes.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Other Charges & Discounts */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        {/* Other Charges */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
            Other Charges
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Amount (GHS)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {tuition.otherCharges.map((charge, index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {charge.item}
                    </td>
                    <td className="px-4 py-3 font-medium dark:text-gray-300">
                      {charge.amount.toLocaleString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="mt-6 bg-blue-50 dark:bg-gray-700 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Note:</span> Uniforms and
              textbooks can be purchased directly from the school or from
              approved vendors.
            </p>
          </motion.div>
        </motion.div>

        {/* Discounts & Promotions */}
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl shadow-xl p-6 md:p-8 border border-yellow-200 dark:border-yellow-800"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center mb-6">
            <FaPercentage className="text-3xl text-yellow-600 dark:text-yellow-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 dark:text-yellow-300">
              Discounts & Promotions
            </h2>
          </div>

          <div className="space-y-4">
            {tuition.discounts.map((discount, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.2 }}
              >
                <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <p className="text-yellow-900 dark:text-yellow-200">
                  {discount}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 bg-yellow-500 bg-opacity-20 dark:bg-yellow-600/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Current Promotion
            </h3>
            <p className="text-yellow-900 dark:text-yellow-200">
              <span className="font-bold">Limited Time:</span> 15% discount on
              full annual payment if made before December 15, 2024.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact & Final CTA */}
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 dark:text-white mb-6">
              Need Clarification?
            </h2>
            <div className="flex items-center mb-4">
              <FaPhone className="text-indigo-600 dark:text-indigo-400 mr-3" />
              <span className="text-lg font-medium dark:text-gray-300">
                Contact our Bursar:
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              For any questions regarding fees, payment plans, or financial
              assistance, please contact:
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full px-3 py-1 mr-3 font-medium">
                  Phone
                </span>
                <span className="dark:text-gray-300">020 123 4567</span>
              </p>
              <p className="flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full px-3 py-1 mr-3 font-medium">
                  WhatsApp
                </span>
                <span className="dark:text-gray-300">024 765 4321</span>
              </p>
              <p className="flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full px-3 py-1 mr-3 font-medium">
                  Email
                </span>
                <span className="dark:text-gray-300">
                  bursar@hanvilacademy.edu.gh
                </span>
              </p>
              <p className="flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full px-3 py-1 mr-3 font-medium">
                  Hours
                </span>
                <span className="dark:text-gray-300">
                  Monday-Friday, 8:00am - 3:00pm
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Flexible Payment Plans Available
            </h2>
            <p className="mb-6">
              We understand financial constraints and offer customized payment
              plans for families who need them.
            </p>
            <motion.button
              className="w-full md:w-auto px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Payment Plan
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
            Financial Assistance
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">
            Limited scholarships and financial aid are available for exceptional
            students from low-income families.
          </p>
          <button className="text-yellow-800 dark:text-yellow-300 font-medium hover:underline transition-colors">
            Learn about our scholarship programs →
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
