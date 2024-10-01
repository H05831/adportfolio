"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  type: "services" | "projects";
}

const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjusting transform values for smoother effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden w-full h-[100vh]"
      style={{
        background: "linear-gradient(180deg, #ffffff, #8F72FF)",
      }}
    >
      {/* Parallax text */}
      <motion.h1
        style={{ y: yText }}
        className="z-50 text-4xl lg:text-6xl xl:text-8xl text-gray-600"
      >
        {type === "services" ? "What We Do?" : "What We Did"}
      </motion.h1>

      {/* Parallax background elements */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-center z-40"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>

      <motion.div
        className="absolute w-full h-full bg-cover bg-center z-30"
        style={{
          y: yBg,
          backgroundImage: "url(/stars.png)",
        }}
      ></motion.div>

      <motion.div className="absolute w-full h-full bg-cover bg-center z-20 bg-[url('/mountains.png')]"></motion.div>
    </div>
  );
};

export default Parallax;
