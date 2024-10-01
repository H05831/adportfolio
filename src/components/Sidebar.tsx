import { useState, useEffect } from "react";
import SidebarLinks from "./SidebarLinks";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set mounted to true after the first render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className={`flex flex-col justify-center items-center bg-white text-gray-800 ${
        !isMounted ? "hidden" : ""
      }`}
    >
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        className="fixed -top-2 left-0 bottom-0 w-[12.5rem] lg:w-[25rem] bg-gradient-to-b from-white to-purple-400 z-[999999]"
      >
        <SidebarLinks />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
