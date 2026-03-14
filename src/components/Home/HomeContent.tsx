import { motion } from "framer-motion";

import cvFile from "../../assets/file/CVREKSAPRAYOGAS(ENG).pdf";
import { dataLogoSocialMedia } from "../../constants";
import "../../assets/styles/home-hero.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const HomeContent = () => {
  return (
    <section id="home" className="hero-shell scroll-mt-32">
      <div className="hero-bleed">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-glow hero-glow-top" aria-hidden="true" />
        <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-wordmark" aria-hidden="true">
            APP DEV
          </div>

          <motion.div className="hero-bottom" variants={itemVariants}>
            <div className="hero-copy">
              <p className="hero-kicker">Fullstack Developer Portfolio</p>
              <h1 className="hero-title">
                FULLSTACK
                <br />
                DEVELOPER
              </h1>
            </div>

            <div className="hero-support">
              <p className="hero-summary">
                Building modern websites, dashboards, internal tools, and API-driven platforms with clear frontend,
                stable backend, and production-ready delivery.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button-primary hero-primary-btn">
                  Project archive
                </a>
                <a href={cvFile} download="CVREKSAPRAYOGAS(ENG).pdf" className="button-secondary hero-secondary-btn">
                  Download CV
                </a>
              </div>

              <div className="hero-links">
                {dataLogoSocialMedia.map(({ id, label, navigate }) => (
                  <a key={id} href={navigate} target="_blank" rel="noopener noreferrer" className="hero-link">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContent;
