// app/about/our-story/page.js
"use client";

import {
  FaSchool,
  FaUserGraduate,
  FaAward,
  FaUsers,
  FaBookOpen,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  // Animation controls for better performance and sequence
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Timeline data
  const milestones = [
    {
      year: "2005",
      title: "Foundation",
      description:
        "Established with 50 students and 3 teachers in temporary structures",
      icon: <FaSchool />,
    },
    {
      year: "2010",
      title: "First Graduating Class",
      description: "Our first BECE batch achieved 95% pass rate",
      icon: <FaUserGraduate />,
    },
    {
      year: "2015",
      title: "New Campus",
      description: "Moved to permanent 5-acre facility with modern classrooms",
      icon: <FaSchool />,
    },
    {
      year: "2020",
      title: "Excellence Award",
      description: "Recognized as top performing school in the district",
      icon: <FaAward />,
    },
    {
      year: "2024",
      title: "Current Status",
      description: "500+ students, 30 teachers, 100% BECE pass rate",
      icon: <FaUsers />,
    },
  ];

  // Animation variants for consistent animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-base-100" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] md:h-[60vh] lg:h-96 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90">
          <Image
            src="/pic20.jpg"
            alt="School History"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              A journey of excellence in education since 2005
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Humble Beginnings */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Humble Beginnings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg mb-4">
                Hanvil Academy began in 2005 with a vision to provide quality
                education to children in our community. Founded by Mrs. Ama
                Ansah and a group of passionate educators, we started with just
                50 students in rented classrooms with limited resources.
              </p>
              <p className="text-base sm:text-lg mb-6">
                Our first teachers worked tirelessly, often going beyond their
                call of duty to ensure every child received personalized
                attention. Despite the challenges, we maintained high academic
                standards from day one.
              </p>
              <Link href="/about/founders" className="btn btn-primary">
                Meet Our Founders
              </Link>
            </motion.div>
            <motion.div
              className="relative h-64 w-full md:h-80 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              variants={fadeInUp}
            >
              {/* Early school days image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <Image
                  src="/pic21.jpg"
                  alt="Early school days"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Growth Journey */}
      <section className="py-12 sm:py-16 bg-base-200">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Growth Journey
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerChildren}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 md:mb-16 w-full flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                  variants={fadeInUp}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-base-100 p-4 sm:p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="p-2 sm:p-3 rounded-full bg-primary text-primary-content mr-3 sm:mr-4">
                          {milestone.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700">
                        {milestone.description}
                      </p>
                      <div className="mt-3 sm:mt-4 font-bold text-primary">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                  {/* Empty div for spacing in desktop layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Core Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {[
            {
              title: "Academic Excellence",
              description:
                "We maintain rigorous academic standards while fostering critical thinking and creativity.",
              icon: (
                <FaBookOpen className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-primary" />
              ),
            },
            {
              title: "Character Development",
              description:
                "We instill values of integrity, respect, and responsibility in every student.",
              icon: (
                <FaUserGraduate className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-primary" />
              ),
            },
            {
              title: "Community Engagement",
              description:
                "We actively participate in and contribute to our local community's development.",
              icon: (
                <FaUsers className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-primary" />
              ),
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="card bg-base-100 shadow-lg p-5 sm:p-6 text-center h-full"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {value.icon}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Community Impact */}
      <section className="py-12 sm:py-16 bg-primary text-primary-content">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Community Impact
              </h2>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                Since our founding, Hanvil Academy has been committed to serving
                not just our students, but the entire community. We believe
                education is the foundation for community development.
              </p>
              <p className="text-base sm:text-lg mb-5 sm:mb-6">
                Our initiatives include adult literacy programs, community
                health awareness campaigns, and scholarship opportunities for
                underprivileged students. Each year, we dedicate 5% of our
                revenue to community development projects.
              </p>
              <button className="btn btn-accent">
                Learn About Our Outreach
              </button>
            </motion.div>
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-2 gap-2 sm:gap-4"
            >
              {["pic13", "pic17", "pic19", "pic8"].map((item) => (
                <motion.div
                  key={item}
                  className="aspect-square bg-primary-focus rounded-lg overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Community impact images */}
                  <div className="w-full h-full relative">
                    <Image
                      src={`/${item}.jpg`}
                      alt="Community impact"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-accent text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.blockquote
            className="text-xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8"
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            "We are committed to raising a new generation of Ghanaian leaders
            with integrity, discipline, and knowledge."
          </motion.blockquote>
          <motion.p
            className="text-lg sm:text-xl font-bold"
            variants={fadeInUp}
          >
            - Mrs. Ama Ansah, Founder & Director
          </motion.p>
          <motion.div className="mt-8 sm:mt-12" variants={fadeInUp}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Join Our Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-6 sm:mt-8 md:mt-12 pt-6 border-t border-base-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg font-bold mb-2">Hanvil Academy</h4>
              <p className="text-sm">Nurturing Tomorrow's Leaders Since 2005</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["About", "Academics", "Admissions", "Contact"].map(
                (link, i) => (
                  <a key={i} href="#" className="link link-hover text-sm">
                    {link}
                  </a>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                <FaPhone className="text-sm" />
                <span className="text-sm">+233 24 123 4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                <FaEnvelope className="text-sm" />
                <span className="text-sm">info@HanvilAcademy.edu.gh</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <FaMapMarkerAlt className="text-sm" />
                <span className="text-sm">Accra, Ghana</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>
              © {new Date().getFullYear()} Hanvil Academy. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
