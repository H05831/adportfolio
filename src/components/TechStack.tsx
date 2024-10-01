"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb, DiRedis } from "react-icons/di";
import { FaDocker, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramer, TbBrandReactNative } from "react-icons/tb";

const techVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, // Stagger each child animation slightly
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.3,
    transition: { duration: 0.3 },
  },
};

const skills = [
  {
    name: "React",
    icon: <FaReact size={50} className="text-sky-500" />,
    border: "border-sky-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="text-black" />,
    border: "border-black",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={50} className="text-green-500" />,
    border: "border-green-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} className="text-sky-500" />,
    border: "border-sky-500",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={50} className="text-yellow-500" />,
    border: "border-yellow-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={50} className="text-blue-500" />,
    border: "border-blue-500",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={50} className="text-sky-500" />,
    border: "border-sky-500",
  },
  {
    name: "Docker",
    icon: <FaDocker size={50} className="text-blue-500" />,
    border: "border-blue-500",
  },
  {
    name: "Redis",
    icon: <DiRedis size={50} className="text-red-500" />,
    border: "border-red-500",
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramer size={50} className="text-pink-500" />,
    border: "border-pink-500",
  },
  {
    name: "Postgresql",
    icon: <BiLogoPostgresql size={50} className="text-blue-500" />,
    border: "border-blue-500",
  },
  {
    name: "Mongodb",
    icon: <DiMongodb size={50} className="text-green-500" />,
    border: "border-green-500",
  },
];

const TechStack = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-b from-white to-purple-300 py-14 flex flex-col items-center overflow-y-scroll"
    >
      <h2 className="text-4xl lg:text-6xl text-gray-800 mb-10">
        My Tech Stack
      </h2>
      <motion.div
        className="w-[90%] grid grid-cols-1 lg:grid-cols-4 gap-10 mt-2 pr-3 lg:pr-0"
        variants={techVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`flex items-center w-full max-w-[30rem] mb-8 p-4 border-l-4 border-b-4 ${skill.border}`}
            variants={techVariants}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mr-4"
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-[#333333]">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;
