import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { dataLogoSocialMedia } from "../../constants";
import cvFile from "../../assets/file/CVREKSAPRAYOGAS(ENG).pdf";


const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = "Reksa Prayoga Syahputra.";
    const typingSpeed = 150; // Kecepatan mengetik
    const deletingSpeed = 100; // Kecepatan menghapus
    const pauseTime = 1000; // Waktu jeda setelah selesai mengetik/menghapus

    const handleTyping = () => {
      if (!isDeleting) {
        // Mengetik teks maju
        if (currentIndex < text.length) {
          setTypedText(text.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Jika selesai mengetik, tunggu sebentar sebelum menghapus
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Menghapus teks mundur
        if (currentIndex > 0) {
          setTypedText(text.substring(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          // Jika selesai menghapus, tunggu sebentar sebelum mengetik ulang
          setTimeout(() => setIsDeleting(false), pauseTime);
        }
      }
    };

    const intervalId = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(intervalId);
  }, [currentIndex, isDeleting]);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      className="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, rgba(16, 14, 37, 1) 0%, rgba(24, 19, 60, 1) 100%)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingTop: "100px",
      }}
    >
      <div className="dots" style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        opacity: 0.5,
      }}></div>

      <div className="glow-orb" style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, 20%)",
        zIndex: 2,
      }}>
        <div className="glow-core" style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% 50%, rgba(138, 62, 255, 0.8) 0%, rgba(138, 62, 255, 0.4) 30%, rgba(138, 62, 255, 0.2) 50%, rgba(138, 62, 255, 0) 70%)",
          filter: "blur(20px)",
          borderRadius: "50%",
          animation: "pulse 4s ease-in-out infinite",
        }}></div>

        <div className="glow-ring" style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          border: "2px solid rgba(138, 62, 255, 0.3)",
          borderRadius: "50%",
          animation: "rotate 20s linear infinite",
        }}></div>
      </div>

      <div className="reflection" style={{
        position: "absolute",
        width: "1000px",
        height: "600px",
        background: "linear-gradient(180deg, rgba(138, 62, 255, 0.5) 0%, rgba(138, 62, 255, 0) 100%)",
        filter: "blur(80px)",
        transform: "translateY(100%)",
        bottom: "-200px",
        left: "calc(50% - 500px)",
        zIndex: 1,
      }}></div>

      <div className="hero-content" style={{
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        marginBottom: "4rem",
      }}>
        <h2 style={{ height: "48px" }} className="text-white font-extrabold xl:text-5xl md:text-4xl text-xl">{typedText}</h2>
        <div className="relative -z-10">

          <h1
            className=" font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-blue-300/80 via-blue-500/70 to-blue-800/60 xl:text-[82px] md:text-[70px] text-[32px] font-bold"
            style={{
              textShadow: '0 0 10px rgba(77, 166, 255, 0.3)',
              animation: 'glow 2s ease-in-out infinite alternate',
            }}
          >
            Fullstack Developer
            <style>
              {`
          @keyframes glow {
            0% {
              filter: drop-shadow(0 0 2px rgba(77, 166, 255, 0.6));
            }
            100% {
              filter: drop-shadow(0 0 5px rgba(77, 166, 255, 0.8));
            }
          }
        `}
            </style>
          </h1>
        </div>
      </div>

      <div className="glass-card" style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "2.5rem",
        maxWidth: "800px",
        width: "90%",
        marginTop: "150px",
        position: "relative",
        zIndex: 3,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}>
        <div className="glass-card-content grid gap-8 lg:grid-cols-[70%_30%] grid-cols-1">
          <div className="info-section" style={{ color: "white" }}>
            <div className="info-item" style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}>
              <div className="info-icon" style={{
                width: "40px",
                height: "40px",
                background: "rgba(138, 62, 255, 0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
              }}>👨‍💻</div>
              <div className="info-text" style={{ flex: 1 }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem", color: "rgba(255, 255, 255, 0.9)" }}>Full Stack Developer</h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", margin: 0 }}>5 years of experience in web development</p>
              </div>
            </div>
            <div className="info-item" style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}>
              <div className="info-icon" style={{
                width: "40px",
                height: "40px",
                background: "rgba(138, 62, 255, 0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
              }}>🎓</div>
              <div className="info-text" style={{ flex: 1 }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem", color: "rgba(255, 255, 255, 0.9)" }}>Education</h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", margin: 0 }}>Computer Science Graduate</p>
              </div>
            </div>
            <div className="info-item" style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}>
              <div className="info-icon" style={{
                width: "40px",
                height: "40px",
                background: "rgba(138, 62, 255, 0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
              }}>🌍</div>
              <div className="info-text" style={{ flex: 1 }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem", color: "rgba(255, 255, 255, 0.9)" }}>Location</h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", margin: 0 }}>Available for Remote Work</p>
              </div>
            </div>

          </div>

          <div className="info-section" style={{ paddingRight: "2rem" }}>
            <div className="flex flex-wrap gap-4 items-center justify-center lg:grid lg:grid-cols-2">
              {dataLogoSocialMedia.map(({ id, logo, navigate }) => (
                <a href={navigate} key={id} className="cursor-pointer">
                  <motion.img
                    src={logo}
                    alt="logo"
                    decoding="async"
                    loading="lazy"
                    className="w-[50px] lg:w-[100px]" // Ukuran kecil untuk HP, besar untuk layar besar
                    whileHover={{ scale: 1.13, rotate: 10 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                    variants={item}
                  />
                </a>
              ))}
            </div>

            <br />
            <center>
              <a
                href={cvFile}
                style={{ width: "100%" }}
                download="CVREKSAPRAYOGAS(ENG).pdf"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Curriculum Vitae
              </a>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
