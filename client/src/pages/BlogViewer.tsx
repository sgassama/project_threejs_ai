import NuxtStudyGuide from '../components/blog/NuxtStudyGuide.tsx'
import IntroductionToRouting from '../components/blog/IntroductionToRouting.tsx'
import UseRefPower from '../components/blog/UseRefPower.tsx'
import TailwindPower from '../components/blog/TailwindPower.tsx'
import EventLoopDemystified from '../components/blog/EventLoopDemystified.tsx'
import MasteringDocker from '../components/blog/MasteringDocker.tsx'
import React from 'react'
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {pageTransitionsAnimation} from "../config/motion.ts";

const BlogViewer = () => {
  const {slug} = useParams();

  const temp: string|boolean = !!slug && slug;

  return (<motion.main className={`markdownPreviewer__preview essgee-page`}
                       variants={pageTransitionsAnimation}
                       initial="initial"
                       animate="animate"
                       exit="exit"
                       key="blog-item"
    >
        {temp === 'mastering-docker' && <MasteringDocker></MasteringDocker>} {temp === 'event-loop' &&
        <EventLoopDemystified></EventLoopDemystified>} {temp === 'tailwindcss' &&
        <TailwindPower></TailwindPower>} {temp === 'use-ref-hook' &&
        <UseRefPower></UseRefPower>} {temp === 'next-js-routing' &&
        <IntroductionToRouting></IntroductionToRouting>} {temp === 'nuxt-sg' && <NuxtStudyGuide></NuxtStudyGuide>}
    </motion.main>)
}

export default BlogViewer
