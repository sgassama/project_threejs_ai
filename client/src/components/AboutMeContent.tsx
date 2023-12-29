import React from 'react'
import {SkillSetList} from './SkillSetList.tsx'

export function AboutMeContent (): React.JSX.Element {
  return <>
    <span className={`my-[16px] flex sine lite-gray`}>

      Hello! I'm Siaka Gassama, a seasoned full-stack developer with a passion for building and tinkering. With over 9 years of hands-on experience, I've mastered the art of creating and maintaining diverse APIs and websites/applications. My expertise extends to automating mission-critical deployments through the implementation of configuration management, CI/CD, and DevOps processes.
    </span>
    <span className={`my-[16px] flex sine lite-gray`}>
      Beyond the coding realm, I'm an enthusiastic sports fan, particularly of the NBA, and have a deep appreciation for music. What sets me apart is my multilingual proficiency, as I speak three languages ◕ ◡ ◕.
    </span>
    <span className={`my-[16px] flex sine lite-gray`}>
      Here's a snapshot of my skillset:
    </span>
    <SkillSetList />
    <span className={`my-[16px] flex sine lite-gray`}>
      Let's collaborate and bring your software projects to life!
    </span>
  </>
}
