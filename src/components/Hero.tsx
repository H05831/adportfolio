"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const textVariants: Variants = {
  initial: (isMobile: boolean) => ({
    x: isMobile ? -50 : -500,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollButtonVariants: Variants = {
  animate: {
    opacity: 1,
    y: [0, 10],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-b from-white to-purple-300 relative flex justify-center items-center overflow-hidden">
      <div className="max-w-screen-xl h-full m-auto">
        {/* Main Content */}
        <motion.div
          variants={textVariants}
          custom={isMobile}
          initial="initial"
          whileInView="animate"
          className="w-full h-full flex flex-col justify-center gap-10 text-center text-gray-600"
        >
          {/* Header Text */}
          <motion.h2
            variants={textVariants}
            custom={isMobile}
            initial="initial"
            whileInView="animate"
            className="text-2xl lg:text-3xl tracking-[0.625rem] text-gray-800"
            aria-label="Aditya Shiyale's name"
          >
            ADITYA SHIYALE
          </motion.h2>
          {/* Main Title */}
          <motion.h1
            variants={textVariants}
            initial="initial"
            custom={isMobile}
            whileInView="animate"
            className="text-[2.5rem] lg:text-[5.5rem] leading-[3rem] lg:leading-[6.4rem] text-gray-800"
            aria-label="Fullstack Web Developer and Mobile Developer title"
          >
            Fullstack Web Developer and Mobile Developer
          </motion.h1>
          {/* Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-5 z-[999999]"
          >
            <motion.a
              variants={textVariants}
              className="p-5 border border-purple-600 rounded-[0.625rem] bg-transparent text-purple-600 hover:bg-purple-600 hover:text-white transition"
              aria-label="See the latest works"
              href="#Portfolio"
            >
              See the Latest Works
            </motion.a>

            <motion.a
              variants={textVariants}
              initial="initial"
              custom={isMobile}
              whileInView="animate"
              className="p-5 border rounded-[0.625rem] bg-purple-600 text-white hover:bg-purple-700 transition cursor-pointer"
              onClick={() => console.log("Contact button clicked")}
              aria-label="Contact me"
              href="#Contact"
            >
              Contact Me
            </motion.a>
          </motion.div>
          {/* Scroll Button (Mouse Image) */}
          <motion.div
            variants={scrollButtonVariants}
            animate="animate"
            className="-mt-2 lg:mt-10 flex justify-center"
          >
            <motion.img
              src="/scroll.png"
              alt="Scroll down button"
              width={42}
              height={42}
              className="cursor-pointer filter-purple"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
