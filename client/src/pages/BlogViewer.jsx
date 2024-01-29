import NuxtStudyGuide from '../components/blog/NuxtStudyGuide.tsx'
import IntroductionToRouting from '../components/blog/IntroductionToRouting.tsx'
import UseRefPower from '../components/blog/UseRefPower.tsx'
import TailwindPower from '../components/blog/TailwindPower.tsx'
import EventLoopDemystified from '../components/blog/EventLoopDemystified.tsx'
import React from 'react'
import MasteringDocker from '../components/blog/MasteringDocker.tsx'
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {pageTransitionsAnimation} from "../config/motion.js";

export const BlogViewer = () => {
  const {slug} = useParams();

  const temp = !!slug && slug || temp;

  return (
    <motion.div className="markdownPreviewer"
                variants={pageTransitionsAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                key="blog-item"
    >
      <div className={`markdownPreviewer__preview overflow-y-none`}>
        {temp === 'mastering-docker' && <MasteringDocker></MasteringDocker>} {temp === 'event-loop' &&
        <EventLoopDemystified></EventLoopDemystified>} {temp === 'tailwindcss' &&
        <TailwindPower></TailwindPower>} {temp === 'use-ref-hook' &&
        <UseRefPower></UseRefPower>} {temp === 'next-js-routing' &&
        <IntroductionToRouting></IntroductionToRouting>} {temp === 'nuxt-sg' && <NuxtStudyGuide></NuxtStudyGuide>}
      </div>
      <hr className={`mt-8`}/>
    </motion.div>
  )
}
