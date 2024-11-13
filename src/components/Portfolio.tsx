"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";

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
    title: "Ecommerce Application",
    img: "/adstore-image.png",
    desc: "E-commerce application built with React and Tailwind CSS.",
    techStack: [
      {
        name: "NextJs",
        icon: <SiNextdotjs size={20} className="inline-block" />,
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
        name: "Prisma",
        icon: <SiPrisma size={20} className="inline-block text-green-900" />,
      },
      {
        name: "Mongodb",
        icon: <SiMongodb size={20} className="inline-block text-green-600" />,
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
            className="lg:h-[60%] h-[30%] w-[82%] lg:w-[45%] aspect-video relative"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
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
            <Link
              href="https://adstore-umber.vercel.app"
              className="flex items-center justify-center bg-purple-600 text-white font-medium rounded-lg p-3 w-52 mt-4 lg:mt-6 shadow-lg hover:bg-purple-700 transition-all"
            >
              Live Url
            </Link>
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
