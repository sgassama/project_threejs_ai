import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.js";
import {AboutMeContent} from "../components/AboutMeContent.tsx";
import {SocialMediaLinks} from "../components/SocialMediaLinks.tsx";
import React, {useRef} from "react";

const Home = () => {
  const ref = useRef(null);
  return (
    <motion.main className={`essgee-page !pb-[130px]`}
                 variants={pageTransitionsAnimation}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 key="home"
                 ref={ref}
    >
      <AboutMeContent scrollRef={ref}></AboutMeContent>

    </motion.main>
  );
};

export default Home;
