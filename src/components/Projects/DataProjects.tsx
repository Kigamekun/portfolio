import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import '../../assets/styles/projects.css';
import Modal from '../Modal/Modal';

import etwpad from '../../assets/images/etwpad.png';
import plab from '../../assets/images/plab.png';
import cctv from '../../assets/images/cctv.png';
import cinema from '../../assets/images/cinema.png';
import redhunter from '../../assets/images/redhunter-page.jpg';
import scindapsus from '../../assets/images/scindapsus.png';
import scodeHotel from '../../assets/images/scode-hotel.png';
import smk3 from '../../assets/images/smk3.png';
import plantsasri from '../../assets/images/plantsasri.png';
import lelanginandroid2 from '../../assets/images/lelanginandroid2.jpg';
import lelanginandroid1 from '../../assets/images/lelanginandroid1.jpg';
import img1 from '../../assets/images/1.png';
import img4 from '../../assets/images/4.png';
import marketplace from '../../assets/images/marketplace.png';
import bkad from '../../assets/images/bkad.png';
import isekaiHotel from '../../assets/images/isekai-hotel.png';
import dmp from '../../assets/images/DMP.png';
import dpr from '../../assets/images/dpr.png';
import refmed from '../../assets/images/refmed.png';
import mpp from '../../assets/images/mpp.jpg';
import sidak from '../../assets/images/sidak.png';
import simpol from '../../assets/images/simpol.png';
import gencerling from '../../assets/images/gencerling.png';

import laravelLogo from '../../assets/icons/tech-stack/laravel.svg';
import reactLogo from '../../assets/icons/tech-stack/react.svg';
import postgreeLogo from '../../assets/icons/tech-stack/postgresql.svg';
import bootstrapLogo from '../../assets/icons/tech-stack/bootstrap.svg';
import mysqlLogo from '../../assets/icons/tech-stack/mysql.svg';
import firebaseLogo from '../../assets/icons/tech-stack/firebase.svg';
import midtransLogo from '../../assets/icons/tech-stack/MIDTRANS.jpg';
import StripeLogo from '../../assets/icons/tech-stack/stripe.svg';
import PaypallLogo from '../../assets/icons/tech-stack/paypal.svg';
import apacheLogo from '../../assets/icons/tech-stack/apache.svg';
import nginxLogo from '../../assets/icons/tech-stack/nginx.svg';
import tailwind from '../../assets/icons/tech-stack/tailwind.svg';
import express from '../../assets/icons/tech-stack/express.svg';
import next from '../../assets/icons/tech-stack/next.svg';
import mongodb from '../../assets/icons/tech-stack/mongodb.svg';
import flutter from '../../assets/icons/tech-stack/flutter.svg';
import flask from '../../assets/icons/tech-stack/flask.svg';
import ant from '../../assets/icons/tech-stack/antdesign.svg';
import xendit from '../../assets/icons/tech-stack/xendit.svg';

const DataProjects: React.FC = () => {

  const images = [
    { src: etwpad, tech: [laravelLogo, bootstrapLogo, postgreeLogo, nginxLogo], gridArea: 'itgrid one shadow md:col-span-2 md:row-span-2' },
    { src: bkad, tech: [laravelLogo, bootstrapLogo, mysqlLogo, apacheLogo], gridArea: 'itgrid two shadow md:col-span-2 md:row-span-1 bg-top' },
    { src: scodeHotel, tech: [laravelLogo, tailwind, mysqlLogo, apacheLogo], gridArea: 'itgrid three shadow md:col-span-2 md:row-span-1' },

    { src: plab, tech: [laravelLogo, bootstrapLogo, mysqlLogo, apacheLogo], gridArea: 'itgrid four shadow md:col-span-2 md:row-span-1' },
    { src: redhunter, tech: [express, next, tailwind, mongodb, nginxLogo], gridArea: 'itgrid five shadow md:col-span-2 md:row-span-2 bg-top' },
    { src: smk3, tech: [laravelLogo, bootstrapLogo, mysqlLogo], gridArea: 'itgrid six shadow md:col-span-2 md:row-span-1' },

    { src: plantsasri, tech: [laravelLogo, bootstrapLogo, firebaseLogo, mysqlLogo, apacheLogo, midtransLogo, StripeLogo, PaypallLogo], gridArea: 'itgrid seven md:col-span-2 md:row-span-2 bg-top shadow' },
    { src: img1, tech: [laravelLogo, bootstrapLogo, flutter, mysqlLogo, apacheLogo, midtransLogo], gridArea: 'itgrid eight md:col-span-2 md:row-span-1 shadow' },
    { src: img4, tech: [laravelLogo, bootstrapLogo, flutter, mysqlLogo, apacheLogo, midtransLogo], gridArea: 'itgrid nine md:col-span-2 md:row-span-1 shadow' },

    { src: marketplace, tech: [laravelLogo, bootstrapLogo, mysqlLogo, firebaseLogo, midtransLogo, StripeLogo, PaypallLogo], gridArea: 'itgrid ten md:col-span-2 md:row-span-1 bg-top shadow' },
    { src: lelanginandroid2, tech: [laravelLogo, bootstrapLogo, flutter, mysqlLogo, midtransLogo], gridArea: 'itgrid eleven md:col-span-1 md:row-span-2 shadow' },
    { src: lelanginandroid1, tech: [laravelLogo, bootstrapLogo, flutter, mysqlLogo, midtransLogo], gridArea: 'itgrid twelve md:col-span-1 md:row-span-2 shadow' },
    { src: cinema, tech: [laravelLogo, tailwind, mysqlLogo, apacheLogo], gridArea: 'itgrid thirteen md:col-span-2 md:row-span-1 shadow bg-top' },

    { src: scindapsus, tech: [laravelLogo, bootstrapLogo, mysqlLogo, apacheLogo], gridArea: 'itgrid fourteen md:col-span-2 md:row-span-2 bg-top shadow' },
    { src: dmp, tech: [flask, reactLogo, tailwind, postgreeLogo, nginxLogo], gridArea: 'itgrid fiveteen md:col-span-2 md:row-span-1 bg-top shadow' },
    { src: dpr, tech: [next, ant, postgreeLogo, nginxLogo], gridArea: 'itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow' },


    { src: refmed, tech: [laravelLogo, bootstrapLogo, mysqlLogo, firebaseLogo, apacheLogo], gridArea: 'itgrid seventeen md:col-span-2 md:row-span-1 bg-top shadow' },
    { src: mpp, tech: [flutter], gridArea: 'itgrid  eighteen md:col-span-1 md:row-span-2 shadow' },
    { src: cctv, tech: [laravelLogo, bootstrapLogo, , mysqlLogo, apacheLogo], gridArea: 'itgrid nineteen md:col-span-1 md:row-span-2 shadow' },
    { src: isekaiHotel, tech: [laravelLogo, reactLogo, bootstrapLogo, apacheLogo, xendit], gridArea: 'itgrid twenty md:col-span-2 md:row-span-2 shadow' },


    { src: sidak, tech: [express,next,tailwind, postgreeLogo, mongodb, apacheLogo], gridArea: 'itgrid twentyone md:col-span-2 md:row-span-2 bg-top shadow' },
    { src: simpol, tech: [laravelLogo, bootstrapLogo, mysqlLogo, firebaseLogo, apacheLogo], gridArea: 'itgrid  twentytwo md:col-span-2 md:row-span-1 shadow' },
    { src: gencerling, tech: [laravelLogo, bootstrapLogo, mysqlLogo, firebaseLogo, apacheLogo], gridArea: 'itgrid bg-top twentythree md:col-span-2 md:row-span-2 shadow' },

  ];


  const ref = useRef(null);

  const isScroll = useInView(ref, { once: false });
  const aboutContentControls = useAnimation();

  const dataProjectsVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.5,
        delay: 0.25,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const item = {
    hidden: { x: 12, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      duration: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imagesPerPage = [6, 7, 7, 7]; // Jumlah gambar per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = imagesPerPage.length; // Jumlah total halaman

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const currentImages = images.slice(
    imagesPerPage.slice(0, currentPage - 1).reduce((acc, val) => acc + val, 0),
    imagesPerPage.slice(0, currentPage).reduce((acc, val) => acc + val, 0)
  );

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (isScroll) {
      aboutContentControls.start("visible");
    }
  }, [isScroll]);

  return (

    <motion.div
      ref={ref}
      animate={aboutContentControls}
      initial="hidden"
      variants={dataProjectsVariants}
      className="w-full mx-auto mt-10"
    >

      <div className="gallery grid gap-5 grid-cols-4 sm:grid-rows-[repeat(6,1fr)] h-[1400px] md:grid-cols-4 md:grid-rows-[repeat(4,1fr)]">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center rounded-xl flex justify-center items-center transition duration-500 ease-in-out group ${image.gridArea}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-xl transition duration-500 ease-in-out"></div>
            <div className="absolute bottom-2 right-2 flex gap-2 space-x-2 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-white rounded px-2 py-1">
              {image.tech.map((techLogo, techIndex) => (
                <img key={techIndex} src={techLogo} alt="Tech Logo" className="h-8 w-8" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#1bacdc] text-white rounded disabled:bg-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#1bacdc] text-white rounded disabled:bg-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </button>
      </div>


    </motion.div>


  );
};

export default DataProjects;
