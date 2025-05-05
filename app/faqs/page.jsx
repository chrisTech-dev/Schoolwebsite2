// app/faqs/page.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaChevronDown,
  FaSchool,
  FaClock,
  FaMoneyBillWave,
  FaUtensils,
  FaBookOpen,
  FaPencilAlt,
  FaFirstAid,
  FaPhone,
} from "react-icons/fa";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqCategories = [
    { id: "admissions", name: "Admissions", icon: <FaSchool /> },
    { id: "hours", name: "School Hours", icon: <FaClock /> },
    { id: "tuition", name: "Tuition", icon: <FaMoneyBillWave /> },
    { id: "meals", name: "Meals", icon: <FaUtensils /> },
    { id: "curriculum", name: "Curriculum", icon: <FaBookOpen /> },
    { id: "supplies", name: "Supplies", icon: <FaPencilAlt /> },
    { id: "health", name: "Health & Safety", icon: <FaFirstAid /> },
    { id: "contact", name: "Contact", icon: <FaPhone /> },
  ];

  const faqs = [
    {
      question: "What classes do you offer?",
      answer:
        "We offer Creche, Nursery, Kindergarten, Primary (B1–B6), and Junior High School (B7–B9).",
      category: "admissions",
    },
    {
      question: "What is the age requirement for KG 1?",
      answer: "Children must be at least 4 years old to enroll in KG 1.",
      category: "admissions",
    },
    {
      question: "What are the school hours?",
      answer: "School runs from 7:30 AM to 3:00 PM, Monday to Friday.",
      category: "hours",
    },
    {
      question: "Is there after-school care?",
      answer: "Yes, we offer after-school care until 5:00 PM for a small fee.",
      category: "hours",
    },
    {
      question: "How much are the school fees?",
      answer:
        "Fees depend on the class. You can view details on our Tuition Page.",
      category: "tuition",
    },
    {
      question: "Can I pay fees in installments?",
      answer:
        "Yes, we allow termly payments. Please speak to the bursar for special arrangements.",
      category: "tuition",
    },
    {
      question: "Do you provide lunch?",
      answer:
        "Yes, nutritious meals are available for purchase. Students can also bring food from home.",
      category: "meals",
    },
    {
      question: "What curriculum do you use?",
      answer:
        "We follow the Ghana Education Service (GES) curriculum with added focus on technology and creativity.",
      category: "curriculum",
    },
    {
      question: "What items should my child bring on the first day?",
      answer:
        "Students should come with notebooks, pencils, pens, and any required textbooks. A full list is given after admission.",
      category: "supplies",
    },
    {
      question: "What if my child falls sick at school?",
      answer:
        "We have a trained first-aid officer. Parents will be contacted immediately for serious cases.",
      category: "health",
    },
    {
      question: "How can I reach the school?",
      answer: "Visit our Contact Page or call us at 024XXXXXXX.",
      category: "contact",
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Find answers to common questions about Green Valley School
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Category Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setActiveCategory("all")}
              className={`btn btn-sm sm:btn-md ${
                activeCategory === "all" ? "btn-primary" : "btn-outline"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Categories
            </motion.button>
            {faqCategories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn btn-sm sm:btn-md btn-outline flex items-center gap-2 ${
                  activeCategory === category.id ? "btn-primary" : ""
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`card bg-base-200 shadow-md ${
                  openQuestion === index ? "rounded-t-lg" : "rounded-lg"
                }`}
                whileHover={{ scale: 1.005 }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-primary" />
                  </motion.div>
                </button>
              </motion.div>

              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    className="card bg-base-100 shadow-md rounded-b-lg"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                  >
                    <div className="p-6 pt-0">
                      <div className="prose">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            If you didn't find what you were looking for, feel free to contact
            us directly.
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="btn btn-primary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/admissions"
              className="btn btn-outline"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Admissions Info
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
