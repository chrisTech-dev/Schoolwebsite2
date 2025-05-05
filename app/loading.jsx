// app/loading.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const loadingMessages = [
  "Preparing your experience...",
  "Almost there...",
  "Loading the magic...",
  "Just a moment...",
  "Getting things ready...",
];

export default function Loading() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Rotate through loading messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 3000);

    // Simulate progress (for demo purposes)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 10;
      });
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const loadingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-base-100 to-base-200 text-base-content p-6">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-base-100/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center"
      >
        {/* Logo with sophisticated animation */}
        <motion.div
          className="relative w-32 h-32 mb-8"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/pic100.png"
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary border-opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated loading spinner */}
        <motion.div
          className="relative w-24 h-24 mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary border-l-secondary animate-spin"
            style={{ animationDirection: "reverse" }}
          />
          <div
            className="absolute inset-4 rounded-full border-4 border-transparent border-t-accent border-r-accent animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-base-200 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Dynamic loading messages */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessageIndex}
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="text-lg font-medium text-center mb-6 h-8"
          >
            {loadingMessages[currentMessageIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Percentage indicator */}
        <motion.div
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {Math.min(100, Math.floor(progress))}%
        </motion.div>

        {/* Tips section */}
        <motion.div
          className="mt-8 p-4 bg-base-200 rounded-lg w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-primary mb-2">
            Did you know?
          </h3>
          <p className="text-sm">
            Our website uses advanced technology to ensure the fastest loading
            times possible.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
