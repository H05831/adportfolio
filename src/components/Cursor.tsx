"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className="hidden lg:block w-[3.125rem] h-[3.125rem]  border-purple-600 rounded-full border fixed z-[9999999]"
    ></motion.div>
  );
};

export default Cursor;
