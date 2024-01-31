import {motion} from 'framer-motion'
import React from 'react'
// @ts-ignore
import {headContainerAnimation} from '../config/motion.js'
import {SkillSetList} from './SkillSetList.tsx'

export function AboutMeContent(): JSX.Element {
  return <motion.div {...headContainerAnimation} className={`flex flex-col justify-start gap-4 z-50`}>
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
        </span>
  </motion.div>
}
