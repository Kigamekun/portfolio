// Import assets social media
// import instagram from "../assets/icons/social-media/instagram.svg";
import whatsapp from "../assets/icons/social-media/whatsapp.png";
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";

// Import assets projects and skills
import villageWeb from "../assets/images/village-web.webp";
import hmtiUntad from "../assets/images/hmti-untad.webp";
import hrev from "../assets/images/hrev.webp";
import snResidence from "../assets/images/sn-residence.webp";

import logoVillageWebsite from "../assets/icons/logo-village-website.png";
import logoHmtiUntad from "../assets/icons/logo-hmti-untad.png";
import logoHrev from "../assets/icons/logo-hrev.png";
import logoSnResidence from "../assets/icons/logo-sn-residence.png";




import laravel from "../assets/icons/tech-stack/laravel.svg";
import go from "../assets/icons/tech-stack/go.svg";
import flutter from "../assets/icons/tech-stack/flutter.svg";
import express from "../assets/icons/tech-stack/express.svg";
import python from "../assets/icons/tech-stack/python.svg";
import mysql from "../assets/icons/tech-stack/mysql.svg";
import node from "../assets/icons/tech-stack/node.svg";
import nginx from "../assets/icons/tech-stack/nginx.svg";
import flask from "../assets/icons/tech-stack/flask.svg";
import django from "../assets/icons/tech-stack/django.svg";
import php from "../assets/icons/tech-stack/php.svg";
import next from "../assets/icons/tech-stack/next.svg";



import nextjs from "../assets/icons/tech-stack/nextjs.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import redux from "../assets/icons/tech-stack/redux.svg";
import graphql from "../assets/icons/tech-stack/graphql.svg";
import nodejs from "../assets/icons/tech-stack/nodejs.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import antdesign from "../assets/icons/tech-stack/antdesign.svg";
import mongodb from "../assets/icons/tech-stack/mongodb.svg";
import postgresql from "../assets/icons/tech-stack/postgresql.svg";
import firebase from "../assets/icons/tech-stack/firebase.svg";
import vite from "../assets/icons/tech-stack/vite.svg";

import bonet from "../assets/icons/company-logo/bonet.jpg";
import redhunter from "../assets/icons/company-logo/redhunter.jpg";
import scode from "../assets/icons/company-logo/scode.png";
import kreasi from "../assets/icons/company-logo/kreasi.svg";

import pattern1 from "../assets/images/patterns/pattern1.svg";
import pattern2 from "../assets/images/patterns/pattern2.svg";
import pattern3 from "../assets/images/patterns/pattern3.svg";
import pattern4 from "../assets/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://www.linkedin.com/in/reksa-prayoga-syahputra/",
  },
  {
    id: 1,
    logo: whatsapp,
    navigate: "https://api.whatsapp.com/send?phone=62895331493506&text=Halo%20Reksa",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/Kigamekun",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:reksa.prayoga1012@gmail.com",
  },
];

export const dataSkills: string[] = [
  laravel,
  flask,
  django,
  express,
  node,
  php,
  python,
  mongodb,
  postgresql,
  mysql,
  nginx,
  flutter,
  go,
  react,
  typescript,
  javascript,
  firebase,
  next,


];



export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: scode,
    pattern: pattern2, // Belum ada informasi tentang pattern untuk gambar ini
    name: "Startcode ID",
    description: "@startcode",
    date: "Jul 2021 - Present",
    position: "CTO",
    responsibilites: [
      "Initiated and opened a business to support the high demand for digital technology, providing high-quality services.",
      "Established Startcode to meet technological needs with a focus on responsiveness, creativity, and high-quality service.",
      "Provided application development services such as Point of Sale Systems, inventory management, company profiles, e-commerce solutions, and more.",
      "Offered services in the development of creative ideas and problem-solving.",
      "Led the Amanda project, developing ad and ad reporting modules integrated with Instagram, Facebook, and TikTok platforms using REST APIs.",
      "Conducted requirements analysis to identify user needs for the advertising and reporting modules.",
      "Implemented REST API integration for creating, managing, and removing ads, ensuring proper authentication and authorization.",
      "Developed an ad reporting module combining data from Instagram, Facebook, and TikTok, with an intuitive user interface for ad report access.",
      "Enhanced the feeds module to improve user experience and integrated ads without disrupting user experience.",
      "Fixed bugs related to the ad module and feeds, ensuring quality and performance.",
      "Optimized performance for the advertising and reporting modules using caching technology for faster data access.",
    ],
    first_color: "#001F33",
    second_color: "#002C4B",
    desc_color: "#A7D6F7",
    position_color: "#001325",
    border_color: "#005EB8"
  },
  {
    id: 1,
    logo_url: redhunter,
    pattern: pattern4, // Belum ada informasi tentang pattern untuk gambar ini
    name: "Redhunter Academy",
    description: "@redhunter",
    date: "Aug 2021 - Mar 2023",
    position: "Backend Developer",
    responsibilites: [
      "Developed a comprehensive learning management system (LMS) for Redhunter Academy, providing a forum for 'hunters' with various forms of courses.",
      "Designed and implemented a task control and quiz system to enhance teaching and learning activities, making Redhunter a fun and engaging offline learning medium.",
      "Conducted extensive testing and quality assurance to ensure the system's reliability and performance.",
      "Developed and maintained documentation for system usage, administration, and troubleshooting.",
      "Implemented role-based access control to manage permissions for different user types (students, educators, administrators).",
      "Integrated third-party APIs to enhance LMS functionality for course enrollment.",
      "Automated QA/QC processes for multiple devices and applications using Node.js, Express.js, Appium, WebdriverIO, Workers, and Selenium Grid.",
      "Developed a system to automate testing in one action against API endpoints, improving efficiency and reducing manual testing effort.",
      "Implemented continuous integration and continuous deployment (CI/CD) pipelines to automate build, test, and deployment processes.",
      "Set up and managed a Selenium Grid to distribute tests across multiple machines, ensuring thorough coverage and faster execution.",
      "Collaborated with the development team to identify, document, and resolve defects and performance issues.",
    ],
    first_color: "#2E0D17",
    second_color: "#390916",
    desc_color: "#F9B6BE",
    position_color: "#18040A",
    border_color: "#7D2038",
  },
  {
    id: 2,
    logo_url: bonet,
    pattern: pattern4,
    name: "Bonet Utama",
    description: "@bonetutama",
    date: "Jan 2022 - Oct 2023",
    position: "Fullstack Developer",
    responsibilites: [
      "Developed the Depok City MPP Mobile Application to facilitate access to government services, including public service information, problem reporting, event schedules, direct consultation, and an interactive map.",
      "Created the BKAD application to streamline activities such as correspondence, schedules, archiving, and more for BKAD staff.",
      "Developed the Etubel BKPSDM Mengajar application to simplify SK request processes for ASN in Indonesia.",
      "Built the CCTV DLLAJ Bogor City website for real-time highway monitoring using HTTP livestream technology.",
      "Created a static website for SMKN3 Kota Bogor to serve as an information platform for the school."
    ],
    first_color: "#01271C",
    second_color: "#08573E",
    desc_color: "#C6F8B1",
    position_color: "#033424",
    border_color: "#10AA7A",
  },
  {
    id: 3,
    logo_url: kreasi,
    pattern: '', // Belum ada informasi tentang pattern untuk gambar ini
    name: "Visi Kreasi Asia",
    description: "@kreasiasia",
    date: "Jul 2021 - Jul 2022",
    position: "Fullstack Developer",
    responsibilites: [
      "Developed financial web admin and Android apps for the Indonesian Army (TNI AD) and a National Bank (Bank BTN).",
      "Created modules for Accounting (E-ACCOUNTING), Soldier monthly contributions (E-TPPAD), Soldier pension return (E-BALTAB), and Soldier mortgage loans (E-KPR).",
      "Led and managed the development team, focusing on all backend divisions and served as PIC from BALTAB.",
      "Digitized financial applications for the army, handling millions of TNI data.",
      "Built communication bridges between banks such as BTN and BRI with the Army as clients.",
      "Ensured that the Android application, which has over 50,000 downloads on Google Play, and the web admin features are available and functioning properly.",
      "Implemented API development, database development, and software testing using Laravel.",
      "Developed full-stack solutions, managing both front-end and back-end tasks.",
      "Optimized application performance and ensured data security and integrity.",
      "Provided continuous maintenance and updates to improve application functionality."
    ],
    first_color: "#7C3A00",
    second_color: "#9B4E00",
    desc_color: "#FFCC99",
    position_color: "#5A2A00",
    border_color: "#D26A00"
  },
];
