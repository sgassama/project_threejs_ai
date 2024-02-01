import {motion, useScroll, useTransform} from 'framer-motion'
import React, {lazy, RefObject} from 'react'

const SkillSetList = lazy(() => import("./SkillSetList.tsx"))
const SocialMediaLinks = lazy(() => import("./SocialMediaLinks.tsx"))

export default function AboutMeContent({scrollRef}: { scrollRef: RefObject<any> }): JSX.Element {
  const {scrollYProgress} = useScroll({
    layoutEffect: false,
    target: scrollRef,
    container: scrollRef,
    offset: ['start', 'end start'],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '900%']);


  return <motion.div className={`flex flex-col gap-4 w-full h-full`}>

    <motion.h1
      className={'font-bold text-[var(--dark-grey-text)] satisfy-regular mix-blend-difference absolute top-52 left-8 z-10 text-5xl'}
      style={{
        y: heroTextY,
      }}
    >
      Siaka-G DEV
    </motion.h1>

    <motion.div className={'absolute inset-4 z-0'}
                layout
                style={{
                  y: heroImgY,
                  backgroundImage: 'url("hero.webp")',
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover',
                }}
    >

    </motion.div>
    <motion.div className={'absolute inset-4 z-20'}
                layout
                style={{
                  backgroundImage: 'url("hero-transparent.webp")',
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover',
                }}
    >

    </motion.div>


    <div
      className="about-me-wrapper z-[99999] bg-white h-fit mt-[500px] w-full flex flex-col justify-start gap-4">
 <span className={`block`}>

            <span className="text-violet-600 font-bold inline"> Hello! I'm Siaka Gassama</span>, a seasoned full-stack developer with a passion for building and tinkering. With over 9 years of hands-on experience, I've mastered the art of creating and maintaining diverse APIs and websites/applications. My expertise extends to automating mission-critical deployments through the implementation of configuration management, CI/CD, and DevOps processes.
        </span>
      <span className={`flex flex-col`}>
            Beyond the coding realm, I'm an enthusiastic sports fan, particularly of the NBA, and have a deep appreciation for music. What sets me apart is my multilingual proficiency, as I speak three languages <br/> <span
        className={`text-violet-600`}>◕ ◡ ◕.</span>
        </span>
      <span className={`flex flex-col`}>
            Here's a snapshot of my skill-set:
        </span>
      <SkillSetList/>
      <span className={`text-violet-600 font-bold flex flex-col`}>
            Let's collaborate and bring your software projects to life!
        <SocialMediaLinks></SocialMediaLinks>
        </span>
    </div>

  </motion.div>
}
