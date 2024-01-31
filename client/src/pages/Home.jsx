import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.js";
import {AboutMeContent} from "../components/AboutMeContent.tsx";
import React, {useRef} from "react";

const Home = () => {
  const ref = useRef(null);
  return (
    <motion.main className={`essgee-page`}
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
