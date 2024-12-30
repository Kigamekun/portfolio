import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import etwpad from '../../assets/images/etwpad.png';
import plantsasri from '../../assets/images/plantsasri.png';
import redhunter from '../../assets/images/redhunter-page.jpg';

import aboutShape from "../../assets/images/shape.svg";
import burstBloadTwo from "../../assets/icons/burst-bloat-2.svg";


function Item({ title, no, projects, badges }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]

  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [-120, 140]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  const transform = useTransform(
    [scrollYProgress],
    ([scrollY]) =>
      `perspective(1200px) translateX(0px) translateY(${translateY.get()}px) scale(${scale.get()}) rotate(0deg) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg) translateZ(0px)`
  );

  return (
    <>
      <section>
        <div ref={ref} style={{ marginBottom: "200px" }}>
          <motion.div
            className="box w-full"
            style={{
              opacity: opacity,
              transform: transform,
              height: "800px",
              margin: "20px auto"
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-4xl text-[#375878] font-bold">{title}</h2>
                {badges.map((badge, index) => (
                  <span key={index} className={`inline-flex mt-1 me-3 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badge.className}`}>
                    {badge.text}
                  </span>
                ))}
              </div>
              <h1 className="text-6xl text-[#375878] font-bold">{no}</h1>
            </div>
            <br />
            <img src={projects} alt={title} className="w-full h-full rounded-3xl object-cover object-top" />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const projects = [
    {
      title: "ETWPAD",
      no: "01",
      image: etwpad,
      badges: [
        { text: "Fullstack Development", className: "bg-yellow-50 text-yellow-800 ring-yellow-600/20" },
        { text: "API Development", className: "bg-green-50 text-green-700 ring-green-600/20" },
        { text: "API Integration", className: "bg-blue-50 text-blue-700 ring-blue-700/10" },
        { text: "REST APIs", className: "bg-green-50 text-green-700 ring-green-600/20" },
        { text: "CI CD Development", className: "bg-pink-50 text-pink-700 ring-pink-700/10" },

      ]
    },
    {
      title: "Plantsasri",
      no: "02",
      image: plantsasri,
      badges: [
        { text: "Fullstack Development", className: "bg-purple-50 text-purple-700 ring-purple-700/10" },
        { text: "Database Development", className: "bg-pink-50 text-pink-700 ring-pink-700/10" },
        { text: "Web Development", className: "bg-red-50 text-red-700 ring-red-700/10" },
        { text: "Payment Gateaway Integration", className: "bg-blue-50 text-blue-700 ring-blue-700/10" },
        { text: "REST APIs", className: "bg-green-50 text-green-700 ring-green-700/10" }
      ]
    },
    {
      title: "Red Hunter",
      no: "03",
      image: redhunter,
      badges: [
        { text: "QA/QC Engineer", className: "bg-purple-50 text-purple-700 ring-purple-700/10" },
        { text: "Database Development", className: "bg-pink-50 text-pink-700 ring-pink-700/10" },
        { text: "Postman API", className: "bg-red-50 text-red-700 ring-red-700/10" },
        { text: "Web Development", className: "bg-blue-50 text-blue-700 ring-blue-700/10" },
        { text: "REST APIs", className: "bg-green-50 text-green-700 ring-green-700/10" }
      ]
    }
  ];

  return (
    <>
      <div className="relative ">
        <h2 className="md:text-[56px] text-[30px] md:text-center font-bold text-primary">🚀 Highlight Projects</h2>
        <br />
      </div>
      {projects.map((project, index) => (
        <Item
          key={index}
          title={project.title}
          no={project.no}
          projects={project.image}
          badges={project.badges}
        />
      ))}
    </>
  );
}
