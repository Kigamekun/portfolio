import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import shapeHeader from "../../assets/images/header-shape.png";
import cvFile from "../../assets/file/CVREKSAPRAYOGAS(ENG).pdf";
const HomeContent = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "Reksa Prayoga Syahputra.";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Adjust the interval speed as needed

    return () => clearInterval(intervalId);
  }, []);

  const containerHomeVariants = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const descriptionHomeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerHomeVariants}
        className="flex flex-col items-center"
      >
        <h2 className="text-primary font-extrabold xl:text-5xl md:text-4xl text-xl">{typedText}</h2>
        <div className="relative -z-10">
          <img
            src={shapeHeader}
            loading="lazy"
            decoding="async"
            alt="shape header"
            className="absolute -z-10 md:bottom-0 bottom-1.5 xl:w-auto md:w-80 w-28"
          />
          <h1 className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1487B9] to-[#1FC2F0] xl:text-[82px] md:text-[70px] text-[32px] font-bold">
            Fullstack Developer
          </h1>
        </div>
      </motion.div>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={descriptionHomeVariants}
        className="md:text-[24px] max-w-3xl text-center text-slate-500 md:leading-10 leading-6"
      >
        <span className="font-semibold">Fullstack Developer</span> with 3+ years of experience in Laravel for developing a website and web applications.
        <br /><br /> <a
          href={cvFile}
          download="CVREKSAPRAYOGAS(ENG).pdf"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Curriculum Vitae
        </a>
      </motion.p>
    </>
  );
};

export default HomeContent;
