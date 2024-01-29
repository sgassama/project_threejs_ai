import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.js";
import {AboutMeContent} from "../components/AboutMeContent.tsx";
import {SocialMediaLinks} from "../components/SocialMediaLinks.tsx";
import React from "react";

const Home = () => {
    return (
        <motion.main layout className={`essgee-page`}
                     variants={pageTransitionsAnimation}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     key="home"
        >
            <AboutMeContent></AboutMeContent>
            <SocialMediaLinks></SocialMediaLinks>

        </motion.main>
    );
};

export default Home;
