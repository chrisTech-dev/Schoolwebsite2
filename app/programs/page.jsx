// app/programs/page.js
"use client"

import {
  FaBook,
  FaFutbol,
  FaMusic,
  FaGlobe,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsPage() {
  // Programs data
  const academicPrograms = [
    {
      title: "Kindergarten",
      description:
        "Play-based learning that fosters early literacy, numeracy, and social skills in a nurturing environment.",
      features: [
        "Literacy & Language Development",
        "Basic Numeracy",
        "Creative Arts",
        "Social & Emotional Learning",
      ],
      image: "/pic2.jpg",
    },
    {
      title: "Primary School (P1-P6)",
      description:
        "Comprehensive education following the Ghanaian National Curriculum with a focus on foundational skills.",
      features: [
        "English, Math, Science",
        "ICT Integration",
        "Local Language Studies",
        "Creative Arts",
      ],
      image: "/pic1.jpg",
    },
    {
      title: "Junior High School (JHS)",
      description:
        "Rigorous academic preparation for the BECE with specialized subject teaching.",
      features: [
        "Core Subjects (English, Math, Science, Social Studies)",
        "ICT & French",
        "Career Guidance",
        "Exam Preparation",
      ],
      image: "/pic5.jpg",
    },
  ];

  const extracurriculars = [
    {
      title: "Sports Programs",
      icon: <FaFutbol className="text-3xl text-primary" />,
      activities: [
        "Football (Boys & Girls Teams)",
        "Basketball",
        "Athletics",
        "Table Tennis",
      ],
      image: "/pic40.jpg",
    },
    {
      title: "Arts & Culture",
      icon: <FaMusic className="text-3xl text-primary" />,
      activities: [
        "Choir & Music Club",
        "Drama Society",
        "Traditional Dance",
        "Visual Arts",
      ],
      image: "/pic54.jpg",
    },
    {
      title: "Clubs & Societies",
      icon: <FaBook className="text-3xl text-primary" />,
      activities: [
        "Science & Robotics Club",
        "Debate Society",
        "Environmental Club",
        "Young Entrepreneurs",
      ],
      image: "/pic49.jpg",
    },
  ];

  const specialInitiatives = [
    {
      title: "Scholarship Program",
      description:
        "Merit-based and need-based scholarships for exceptional students",
      details:
        "Full and partial scholarships available for qualifying students",
      image: "/pic30.jpg",
    },
    {
      title: "Career Counseling",
      description: "Comprehensive guidance for JHS students",
      details:
        "University preparation, career assessments, and mentorship programs",
      image: "/pic66.jpg",
    },
    {
      title: "Community Outreach",
      description: "Service learning and leadership development",
      details:
        "Annual charity drives, environmental projects, and peer tutoring",
      image: "/pic67.jpg",
    },
  ];

  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Programs
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
              Discover the diverse educational opportunities at Green Valley
              School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2">
                <FaBook className="text-primary" />
                Academic Programs
              </span>
            </motion.h2>
            <p className="max-w-3xl mx-auto">
              Our comprehensive curriculum follows the Ghanaian National
              Curriculum while incorporating international best practices to
              prepare students for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                className="card bg-base-200 shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <figure className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 px-4 sm:px-6 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Extracurricular Activities
              </motion.h2>
              <p className="max-w-3xl mx-auto">
                We believe in holistic education that nurtures talents beyond
                the classroom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {extracurriculars.map((activity, i) => (
                <motion.div
                  key={activity.title}
                  className="card bg-base-100 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <figure className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center gap-4 mb-3">
                      {activity.icon}
                      <h3 className="text-xl font-bold">{activity.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {activity.activities.map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-center gap-2"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: j * 0.05 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Initiatives */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2">
                <FaUserGraduate className="text-primary" />
                Special Initiatives
              </span>
            </motion.h2>
            <p className="max-w-3xl mx-auto">
              Programs designed to support exceptional students and serve our
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialInitiatives.map((initiative, i) => (
              <motion.div
                key={initiative.title}
                className="card bg-base-200 shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <figure className="relative h-48">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{initiative.title}</h3>
                  <p className="font-medium">{initiative.description}</p>
                  <p>{initiative.details}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Global Programs */}
      <section className="py-16 px-4 sm:px-6 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 items-center"
          >
            <motion.div
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden">
                <Image
                  src="/pic55.jpg"
                  alt="Global programs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaGlobe className="text-3xl text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Global Programs
                </h2>
              </div>
              <p className="mb-4">
                Our international partnerships provide students with unique
                global learning opportunities.
              </p>
              <div className="space-y-4">
                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="global-programs" defaultChecked />
                  <div className="collapse-title text-lg font-medium">
                    Student Exchange Program
                  </div>
                  <div className="collapse-content">
                    <p>
                      Annual exchange programs with partner schools in the UK,
                      USA, and South Africa for selected students.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="global-programs" />
                  <div className="collapse-title text-lg font-medium">
                    International Competitions
                  </div>
                  <div className="collapse-content">
                    <p>
                      Participation in global academic competitions in STEM,
                      debate, and creative arts.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 rounded-box">
                  <input type="radio" name="global-programs" />
                  <div className="collapse-title text-lg font-medium">
                    Cultural Exchange
                  </div>
                  <div className="collapse-content">
                    <p>
                      Virtual exchange programs connecting our students with
                      peers around the world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2">
                <FaChalkboardTeacher className="text-primary" />
                Innovative Teaching Methods
              </span>
            </motion.h2>
            <p className="max-w-3xl mx-auto">
              Our educators employ research-based strategies to maximize student
              engagement and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="card bg-base-200 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <h3 className="card-title">Project-Based Learning</h3>
                <p>
                  Students engage in meaningful, real-world projects that
                  integrate multiple subject areas and develop critical thinking
                  skills.
                </p>
                <div className="mt-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Real-World Application</h4>
                      <p className="text-sm">
                        Students solve authentic problems with tangible outcomes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cross-Curricular</h4>
                      <p className="text-sm">
                        Integrates multiple subject areas in each project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card bg-base-200 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <h3 className="card-title">Differentiated Instruction</h3>
                <p>
                  Teachers tailor instruction to meet individual learning needs
                  through flexible grouping, varied assignments, and
                  personalized support.
                </p>
                <div className="mt-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Personalized Learning</h4>
                      <p className="text-sm">
                        Content tailored to student readiness and interests
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Flexible Grouping</h4>
                      <p className="text-sm">
                        Students work in various configurations based on needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg mb-8">
              Discover how our programs can benefit your child's education and
              personal growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="btn btn-accent">
                Admissions Process
              </Link>
              <Link href="/contact" className="btn btn-outline btn-accent">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
