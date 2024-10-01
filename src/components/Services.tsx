import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaMobileAlt, FaConnectdevelop } from "react-icons/fa";

const treeVariants = {
  initial: (direction: string) => ({
    opacity: 0,
    x: direction === "left" ? -200 : 200,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.3,
    transition: { duration: 0.3 },
  },
};

const serviceData = [
  {
    title: "Fullstack Development",
    description:
      "Crafting responsive and scalable web applications using modern technologies like React, Next.js, Node.js, and databases like MongoDB and PostgreSQL.",
    icon: <FaCode className="text-red-500" size={50} />,
    border: "border-red-500",
    button: "bg-red-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing intuitive mobile applications for iOS and Android using React Native, ensuring seamless user experiences.",
    icon: <FaMobileAlt className="text-blue-500" size={50} />,
    border: "border-blue-500",
    button: "bg-blue-500",
  },
  {
    title: "API Integration",
    description:
      "Connecting your applications with powerful APIs to enhance functionality and provide seamless data exchange.",
    icon: <FaConnectdevelop className="text-green-500" size={50} />,
    border: "border-green-500",
    button: "bg-green-500",
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-0px" });

  return (
    <motion.div className="w-full h-full bg-gradient-to-b from-white to-purple-300 pt-6 lg:pt-10 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-3xl lg:text-5xl text-gray-800">Our Services</h1>

      {/* Services Section */}
      <div className="flex flex-col items-center w-full max-w-4xl pt-0 lg:pt-8">
        {serviceData.map((service, index) => {
          const direction = index % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              ref={ref}
              key={index}
              custom={direction}
              className={`flex w-full mb-2 lg:mb-10 lg:px-0 px-3 ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
              variants={treeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <motion.div
                className={`flex items-start gap-x-3 lg:gap-x-0 w-full max-w-[30rem] border-b-4 lg:border-b-0 p-4 ${
                  index % 2 === 0 ? "lg:border-l-4" : "lg:border-r-4"
                } ${service.border} transition-all duration-300`}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="mr-4"
                >
                  {service.icon}
                </motion.div>
                <div className="text-left flex flex-col gap-y-1.5 mt-2 lg:mt-0">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#333333]">
                    {service.title}
                  </h2>
                  <p className="lg:text-sm text-xs leading-relaxed text-[#666666]">
                    {service.description}
                  </p>
                  <motion.button
                    className={`mt-2 py-1.5 px-3 lg:py-2 lg:px-4 ${service.button} w-fit text-white hover:bg-purple-700 transition border-none rounded-lg`}
                    aria-label={`Learn more about ${service.title}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
