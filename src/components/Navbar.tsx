"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="h-20 bg-white shadow-md">
      {/* Sidebar */}
      <Sidebar />
      <div className="max-w-screen-xl m-auto flex items-center justify-end lg:justify-between h-full px-8 lg:px-0">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl hidden lg:block text-purple-600"
        >
          ADDEV
        </motion.span>
        {/* Social links */}
        <div className="flex items-center gap-5 text-purple-600">
          <Link href="#">
            <FaFacebook size={22} className="text-blue-600" />
          </Link>
          <Link href="#">
            <FaTwitter size={22} className="text-sky-500" />
          </Link>
          <Link href="#">
            <FaLinkedin size={22} className="text-blue-600" />
          </Link>
          <Link href="#">
            <FaInstagram size={22} className="text-rose-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
