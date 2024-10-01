import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const SidebarLinks = () => {
  const LINKS = ["Homepage", "Services", "Portfolio", "Contact", "TechStack"];

  return (
    <motion.div
      variants={variants}
      className="absolute w-full h-full flex flex-col justify-center gap-10 items-center"
    >
      {LINKS.map((link) => (
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`#${link}`}
          key={link}
          className="font-semibold text-xl lg:text-2xl"
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SidebarLinks;
