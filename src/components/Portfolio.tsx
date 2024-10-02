"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa"; // Import icons for React and Node.js
import { IoLogoVercel } from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMarkdown,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface Project {
  id: number;
  title: string;
  img: string;
  desc: string;
  techStack: { name: string; icon: JSX.Element }[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "React Commerce",
    img: "/p.png",
    desc: "E-commerce application built with React and Tailwind CSS.",
    techStack: [
      {
        name: "React",
        icon: <FaReact size={20} className="inline-block  text-sky-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss
            size={20}
            className="inline-block text-lg text-blue-500"
          />
        ),
      },
      {
        name: "Node.js",
        icon: <FaNodeJs size={20} className="inline-block text-green-500" />,
      },
    ],
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "/p2.png",
    desc: "A personal blog platform built with Next.js and Markdown.",
    techStack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs size={20} className="inline-block  text-black" />,
      },
      {
        name: "Markdown",
        icon: <SiMarkdown size={20} className="inline-block text-rose-500" />,
      },
      {
        name: "Vercel",
        icon: <IoLogoVercel className="inline-block text-black" />,
      },
    ],
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "/p3.png",
    desc: "Simple app using vanilla JavaScript and CSS animations.",
    techStack: [
      {
        name: "JavaScript",
        icon: (
          <SiJavascript size={20} className="inline-block text-yellow-500" />
        ),
      },
      {
        name: "CSS",
        icon: <SiCss3 size={20} className="inline-block text-blue-500" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 size={20} className="inline-block text-orange-600" />,
      },
    ],
  },
  {
    id: 4,
    title: "Music App",
    img: "/p4.png",
    desc: "Music streaming app built with React Native and Firebase.",
    techStack: [
      {
        name: "React Native",
        icon: (
          <TbBrandReactNative size={20} className="inline-block text-sky-500" />
        ),
      }, // Use text or an icon
      {
        name: "Firebase",
        icon: <SiFirebase size={20} className="inline-block text-orange-500" />,
      },
      {
        name: "Expo",
        icon: <SiExpo size={20} className="inline-block text-black" />,
      },
    ],
  },
];

interface SingleProps {
  item: Project;
}

const Single: React.FC<SingleProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="h-screen snap-center">
      <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-300">
        <div className="max-w-screen-xl h-full m-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[3.125rem] mt-20 lg:mt-8">
          <div
            ref={ref}
            className="lg:h-[60%] h-[30%] w-[82%] lg:w-[50%] aspect-video lg:aspect-auto"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={300}
              unoptimized
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <motion.div
            style={{ y }}
            className="h-[40%] flex flex-col gap-4 lg:gap-6 items-center justify-center lg:justify-start lg:items-start text-center lg:text-start px-8"
          >
            <h2 className="text-4xl lg:text-6xl text-gray-800">{item.title}</h2>
            <p className="text-sm lg:text-xl text-gray-800">{item.desc}</p>
            <div className="flex gap-2 mt-2 lg:mt-3">
              {item.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="bg-gradient-to-r from-purple-200 to-purple-400 text-gray-800 font-semibold text-xs lg:text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition duration-300 flex items-center gap-x-2"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
            <button className="bg-purple-600 text-white font-medium rounded-lg p-3 w-52 mt-4 lg:mt-6 shadow-lg hover:bg-purple-700 transition-all">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 pt-[3.125rem]">
        <h1 className="text-gray-800 text-4xl lg:text-6xl text-center mt-6 lg:mt-0">
          Featured Works
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-2 lg:h-2.5 bg-purple-500 mt-3 lg:mt-4 rounded-full"
        ></motion.div>
      </div>
      {PROJECTS.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
