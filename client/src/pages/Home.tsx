import AboutMeContent from "@/src/components/AboutMeContent.tsx"
import {motion} from 'framer-motion';
import React, {Suspense, useRef} from "react";
import {pageTransitionsAnimation} from "../config/motion.ts";

const renderLoader = () => <p></p>;

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
      <Suspense fallback={renderLoader()}>
        <AboutMeContent scrollRef={ref}></AboutMeContent>
      </Suspense>

    </motion.main>
  );
};

export default Home;
