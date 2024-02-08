import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.ts";
import React, {lazy, Suspense, useRef} from "react";

const AboutMeContent = lazy(() => import('../components/AboutMeContent.tsx'));

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
