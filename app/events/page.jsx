"use client";

import {
  FaCalendarAlt,
  FaRunning,
  FaGraduationCap,
  FaFlask,
  FaMusic,
  FaChalkboardTeacher,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Event data
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2025-03-24",
      time: "8:00 AM - 3:00 PM",
      description:
        "A day of friendly competition featuring track and field events, team sports, and fun activities for all ages. Parents are welcome to attend and cheer!",
      category: "sports",
      image: "/pic40.jpg",
      registrationLink: "/events/sports-day/register",
      learnMoreLink: "/events/sports-day",
    },
    {
      id: 2,
      title: "Science Fair Exhibition",
      date: "2025-04-15",
      time: "10:00 AM - 2:00 PM",
      description:
        "Students showcase their innovative science projects. Judges from local universities will award prizes in different categories.",
      category: "academic",
      image: "/pic47.jpg",
      registrationLink: "/events/science-fair/register",
      learnMoreLink: "/events/science-fair",
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "2025-05-08",
      time: "9:00 AM - 5:00 PM",
      description:
        "Celebrating Ghana's rich cultural heritage through music, dance, drama, and art. Traditional food will be available.",
      category: "cultural",
      image: "/pic65.jpg",
      registrationLink: "/events/cultural-festival/register",
      learnMoreLink: "/events/cultural-festival",
    },
    {
      id: 4,
      title: "Parent-Teacher Conference",
      date: "2025-06-12",
      time: "2:00 PM - 6:00 PM",
      description:
        "Opportunity for parents to meet with teachers and discuss student progress. Appointments required.",
      category: "academic",
      image: "/pic66.jpg",
      registrationLink: "/events/parent-teacher/register",
      learnMoreLink: "/events/parent-teacher",
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      date: "2025-07-20",
      time: "10:00 AM - 12:00 PM",
      description:
        "Celebrating our graduating class of 2025. Ceremony followed by reception. Formal attire required.",
      category: "graduation",
      image: "/pic44.jpg",
      registrationLink: "/events/graduation/register",
      learnMoreLink: "/events/graduation",
    },
    {
      id: 6,
      title: "Charity Fun Run",
      date: "2025-08-05",
      time: "7:00 AM - 10:00 AM",
      description:
        "5km fun run to raise funds for school library expansion. Open to students, parents, and community members.",
      category: "sports",
      image: "/pic63.jpg",
      registrationLink: "/events/fun-run/register",
      learnMoreLink: "/events/fun-run",
    },
  ];

  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "Christmas Concert 2024",
      date: "2024-12-15",
      description:
        "Students performed holiday songs and skits to celebrate the season.",
      image: "/pic64.jpg",
      galleryLink: "/gallery/christmas-2024",
    },
    {
      id: 2,
      title: "Math Olympiad 2024",
      date: "2024-11-10",
      description:
        "Our team won 3 gold medals in the regional mathematics competition.",
      image: "/pic28.jpg",
      galleryLink: "/gallery/math-olympiad-2024",
    },
    {
      id: 3,
      title: "Career Day 2024",
      date: "2024-10-05",
      description:
        "Professionals from various fields shared insights with our students.",
      image: "/pic62.jpg",
      galleryLink: "/gallery/career-day-2024",
    },
  ];

  // Filter events
  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.category === activeFilter);

  // Categories
  const categories = [
    { id: "all", name: "All Events", icon: <FaCalendarAlt /> },
    { id: "sports", name: "Sports", icon: <FaRunning /> },
    { id: "academic", name: "Academic", icon: <FaFlask /> },
    { id: "cultural", name: "Cultural", icon: <FaMusic /> },
    { id: "graduation", name: "Graduation", icon: <FaGraduationCap /> },
    { id: "meetings", name: "Meetings", icon: <FaChalkboardTeacher /> },
  ];

  // Carousel controls for mobile
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pastEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + pastEvents.length) % pastEvents.length
    );
  };

  return (
    <div className="bg-base-100">
      {/* Hero Section with enhanced animation */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.2, 0.8, 0.4, 1],
              },
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {Array.from("Our Events").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: i * 0.05 + 0.3,
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-white max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.8,
                  ease: "easeOut",
                },
              }}
            >
              Stay updated with the latest events happening at Green Valley
              School
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Upcoming Events
          </h2>

          {/* Animated Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {categories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`btn btn-sm sm:btn-md btn-outline ${
                  activeFilter === category.id ? "btn-primary" : ""
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: i * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1 sm:mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Events Grid with enhanced animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  className="card bg-base-200 shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <motion.figure
                    className="relative h-40 sm:h-48 bg-gray-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={i < 3} // Only prioritize first few images
                    />
                  </motion.figure>
                  <div className="card-body p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <motion.h3
                        className="card-title text-lg sm:text-xl mb-1 sm:mb-0"
                        whileHover={{ color: "hsl(var(--p))" }}
                      >
                        {event.title}
                      </motion.h3>
                      <div className="badge badge-primary self-start">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">
                      {event.time}
                    </p>
                    <p className="text-sm sm:text-base mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="card-actions justify-end">
                      <Link
                        href={event.learnMoreLink}
                        className="btn btn-outline btn-sm sm:btn-md"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Event Calendar */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Event Calendar
          </h3>
          <motion.div
            className="bg-base-200 rounded-lg shadow-md p-4 sm:p-6"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th className="hidden sm:table-cell">Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.slice(0, 5).map((event, i) => (
                    <motion.tr
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ backgroundColor: "hsl(var(--b2))" }}
                    >
                      <td>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td>{event.title}</td>
                      <td className="hidden sm:table-cell">{event.time}</td>
                      <td>
                        <Link
                          href={event.learnMoreLink}
                          className="link link-primary"
                        >
                          Details
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/events/calendar"
                className="btn btn-outline btn-sm sm:btn-md"
              >
                View Full Calendar
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Past Events - Mobile Only Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="sm:hidden"
        >
          <h3 className="text-xl font-bold mb-4">Past Event Highlights</h3>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden relative">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentSlide * 100}%`,
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                }}
              >
                {pastEvents.map((event, index) => (
                  <div key={event.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      className="card bg-base-100 shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <figure className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw"
                          priority={index === currentSlide}
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h4 className="card-title">{event.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="card-actions justify-end">
                          <Link
                            href={event.galleryLink}
                            className="btn btn-outline btn-sm"
                          >
                            View Gallery
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm"
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {pastEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Past Events - Desktop Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden sm:block"
        >
          <h3 className="text-2xl font-bold mb-6">Past Event Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.id}
                className="card bg-base-200 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.figure
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </motion.figure>
                <div className="card-body">
                  <h4 className="card-title">{event.title}</h4>
                  <p className="text-gray-600 mb-2">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="mb-4">{event.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={event.galleryLink}
                      className="btn btn-outline btn-sm"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Media Links */}
      <motion.section
        className="py-8 sm:py-12 bg-primary text-primary-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Follow Us for Event Updates
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {["Facebook", "Instagram", "YouTube"].map((platform, i) => (
              <motion.a
                key={platform}
                href="#"
                className="btn btn-sm sm:btn-md btn-accent"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {platform}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
