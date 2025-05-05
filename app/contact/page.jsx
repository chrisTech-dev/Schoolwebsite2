"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3pooak4", // your EmailJS service ID
        "template_h0hvb8c", // your EmailJS template ID
        form.current,
        "Fsy8x4NS2KC67KN9a" // your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in touch with Bright Future Basic School
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">Our Contact Information</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-base-content/80">
                  Bright Future Basic School
                  <br />
                  No. 12 Peace Avenue, Madina
                  <br />
                  Accra, Ghana
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-base-content/80">
                  <a href="tel:+233241234567" className="hover:text-primary">
                    024 123 4567
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                <p className="text-base-content/80">
                  <a
                    href="https://wa.me/233241234567"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    024 123 4567
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-base-content/80">
                  <a
                    href="mailto:brightfutureschool@gmail.com"
                    className="hover:text-primary"
                  >
                    brightfutureschool@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                <p className="text-base-content/80">
                  Mon–Fri: 8:00 AM – 4:00 PM
                  <br />
                  Saturday: 9:00 AM – 12:00 PM
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <div className="flex gap-2">
                  <FaFacebook className="text-xl" />
                  <FaInstagram className="text-xl" />
                  <FaYoutube className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/brightfutureschool"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/brightfutureschool"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://youtube.com/brightfutureschool"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
          <div className="bg-base-200 p-6 rounded-lg">
            {success && (
              <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
                ✅ Your message has been sent successfully!
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="your_name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="your_email"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
