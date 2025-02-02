import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import aboutShape from "../../assets/images/shape.svg";
import burstBloadTwo from "../../assets/icons/burst-bloat-2.svg";

const ProjectsContent: React.FC = () => {
  const ref = useRef(null);

  const isScroll = useInView(ref, { once: false });
  const aboutContentControls = useAnimation();

  const projectsContentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      // scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
        type: "spring",
        stiffness: 70,
      },
    },
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
      variants={projectsContentVariants}
      className="flex justify-center flex-col items-center gap-5 relative"
    >
      <div className="relative md:w-[590px] w-[315px] mt-10">
        <h2 className="md:text-[56px] text-[30px] md:text-left font-bold text-primary">🚀Projects Repository</h2>
      </div>
      <p className="xl:text-2xl md:text-base text-sm xl:leading-9 text-medium text-center max-w-[50rem]">
        These are some of the projects I have created. These projects have not only helped me build my portfolio, but
        also enhanced the skills I have developed.
      </p>
    </motion.div>
  );
};

export default ProjectsContent;
