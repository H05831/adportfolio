import { motion } from "framer-motion";

const ToggleButton = ({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) => {
  return (
    <button
      aria-label="Toggle Menu"
      className="w-12 h-12 rounded-full fixed top-4 left-6 bg-transparent border-none cursor-pointer flex items-center justify-center z-[999999]"
      onClick={() => setOpen(!open)}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        className="mt-1.5 ml-1.5 cursor-pointer"
        aria-hidden="true"
      >
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial={false}
          animate={open ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial={false}
          animate={open ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial={false}
          animate={open ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
