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
    logo_url: redhunter,
    pattern: pattern4, // Belum ada informasi tentang pattern untuk gambar ini
    name: "Redhunter Academy",
    description: "@redhunter",
    date: "Aug 2021 - Mar 2023",
    position: "Freelancer",
    responsibilites: [
      "Built a learning management system for Redhunter Academy to provide learning classes.",
    ],
    first_color: "#2E0D17",
    second_color: "#390916",
    desc_color: "#F9B6BE",
    position_color: "#18040A",
    border_color: "#7D2038",
  },
  {
    id: 1,
    logo_url: scode,
    pattern: pattern2, // Belum ada informasi tentang pattern untuk gambar ini
    name: "Startcode ID",
    description: "@startcode",
    date: "Jul 2021 - Present",
    position: "CTO",
    responsibilites: [
      "Developed various applications such as Point of Sale System, inventory, company profile, e-commerce, etc.",
      "Provided high quality services focusing on responsiveness and creativity.",
    ],
    first_color: "#001F33",
    second_color: "#002C4B",
    desc_color: "#A7D6F7",
    position_color: "#001325",
    border_color: "#005EB8"
  },
  {
    id: 2,
    logo_url: kreasi,
    pattern: '', // Belum ada informasi tentang pattern untuk gambar ini
    name: "Visi Kreasi Asia",
    description: "@kreasi",
    date: "Jul 2021 - Jul 2022",
    position: "Fullstack Developer",
    responsibilites: [
      "Led and managed the development team, especially in backend divisions.",
      "Digitized financial applications for the Indonesian Army.",
    ],
    first_color: "#520E27",
    second_color: "#6F133A",
    desc_color: "#F3A7B3",
    position_color: "#3D0A18",
    border_color: "#A82040"
  },
  {
    id: 3,
    logo_url: bonet,
    pattern: pattern4,
    name: "Bonet Utama",
    description: "@bonetutama",
    date: "Jan 2022 - Oct 2023",
    position: "Fullstack Developer",
    responsibilites: [
      "Interned as a Software Engineering intern at PT. BONET UTAMA.",
      "Worked on several applications including SMKN 3 Bogor City's web, LSP SMKN 3 Bogor City's web, and CCTV DLLAJ Web.",
    ],
    first_color: "#01271C",
    second_color: "#08573E",
    desc_color: "#C6F8B1",
    position_color: "#033424",
    border_color: "#10AA7A",
  },
];
