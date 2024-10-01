"use client";

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.fromName,
          from_email: formData.fromEmail,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setIsLoading(false);
          setFormData({
            fromName: "",
            fromEmail: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message.");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="h-screen w-full bg-gradient-to-b from-white to-purple-300 text-gray-800 flex flex-col lg:flex-row items-center justify-center lg:gap-20 lg:py-3 overflow-y-scroll scroll-smooth"
    >
      {/* Scrollable container */}
      <motion.div
        variants={variants}
        className="w-full max-w-md lg:max-w-lg flex flex-col gap-5 lg:gap-10 text-center lg:text-start px-4 lg:px-0 mt-40 lg:mt-0"
      >
        <motion.h1
          variants={variants}
          className="text-3xl lg:text-6xl leading-snug lg:leading-tight"
        >
          {"Let's"} work together
        </motion.h1>
        <motion.div variants={variants}>
          <h2 className="text-lg font-semibold">Mail</h2>
          <span className="font-light">adityashiyale20@gmail.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="text-lg font-semibold">Address</h2>
          <span className="font-light">Warud, Maharastra</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="text-lg font-semibold">Phone</h2>
          <span className="font-light">+917219370887</span>
        </motion.div>
      </motion.div>

      {/* Scrollable Form Section */}
      <motion.div
        variants={variants}
        className="w-full max-w-md lg:max-w-lg flex justify-center items-center lg:items-start p-4 lg:mt-14"
      >
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col gap-6 w-full"
          onSubmit={sendEmail}
        >
          <input
            className="w-full h-[3.6rem] pl-4 bg-transparent border text-gray-900 rounded-md border-purple-700 focus:outline-purple-500 placeholder:text-gray-700"
            type="text"
            required
            placeholder="Name"
            value={formData.fromName}
            onChange={handleChange}
            name="fromName"
          />
          <input
            className="w-full h-[3.6rem] pl-4 bg-transparent border text-gray-900 rounded-md border-purple-700 focus:outline-purple-500 placeholder:text-gray-700"
            type="email"
            required
            placeholder="Email"
            value={formData.fromEmail}
            onChange={handleChange}
            name="fromEmail"
          />
          <textarea
            className="w-full h-[10rem] pt-4 pl-4 border bg-transparent rounded-md border-purple-700 focus:outline-purple-500 placeholder:text-gray-700"
            required
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
          {/* Button Section */}
          <div className="w-full flex justify-center">
            <button
              disabled={isLoading}
              className="w-full h-[3.6rem] bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all"
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
