import {motion, useScroll, useTransform} from 'framer-motion'
import React, {RefObject} from 'react'
// @ts-ignore
import {headContainerAnimation} from '../config/motion.js'
import {SkillSetList} from './SkillSetList.tsx'
import {SocialMediaLinks} from "./SocialMediaLinks.tsx";

export function AboutMeContent({scrollRef}: { scrollRef: RefObject<any> }): JSX.Element {
  // const ref = useRef(null);
  console.log(`***** scrollRef ***** siaka ヽ(⌐■_■)ノ♪♬ *=*=*=*=*=*=>> \r\n`, scrollRef);
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    container: scrollRef,
    offset: ['start', 'end start'],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '900%']);


  return <motion.div className={`flex flex-col justify-start gap-4 w-full h-full`}>

    <motion.h1 className={'font-bold text-[var(--dark-grey-text)] satisfy-regular absolute top-40 left-4 z-10 text-5xl'}
               style={{
                 y: heroTextY,
               }}
    >
      Siaka-G DEV
    </motion.h1>

    <motion.div className={'absolute inset-0 z-0 -top-20'}
                style={{
                  y: heroImgY,
                  backgroundImage: 'url("src/assets/hero.jpg")',
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover',
                }}
    >

    </motion.div>
    <motion.div className={'absolute inset-0 z-20 -top-20'}
                style={{
                  backgroundImage: 'url("src/assets/hero-transparent.jpg")',
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover',
                }}
    >

    </motion.div>


    <div
      className="about-me-wrapper z-[99999] bg-white h-fit mt-[550px] fixed inset-0 w-full flex flex-col justify-start gap-4 p-4">
 <span className={``}>

            <span className="text-violet-600 font-bold inline"> Hello! I'm Siaka Gassama</span>, a seasoned full-stack developer with a passion for building and tinkering. With over 9 years of hands-on experience, I've mastered the art of creating and maintaining diverse APIs and websites/applications. My expertise extends to automating mission-critical deployments through the implementation of configuration management, CI/CD, and DevOps processes.
        </span>
      <span className={``}>
            Beyond the coding realm, I'm an enthusiastic sports fan, particularly of the NBA, and have a deep appreciation for music. What sets me apart is my multilingual proficiency, as I speak three languages <br/> <span
        className={`text-violet-600`}>◕ ◡ ◕.</span>
        </span>
      <span className={``}>
            Here's a snapshot of my skill-set:
        </span>
      <SkillSetList/>
      <span className={`pb-4 text-violet-600 font-bold`}>
            Let's collaborate and bring your software projects to life!
        <SocialMediaLinks></SocialMediaLinks>
        </span>
    </div>

  </motion.div>
}
