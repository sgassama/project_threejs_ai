import NuxtStudyGuide from './blog/NuxtStudyGuide.tsx'
import IntroductionToRouting from './blog/IntroductionToRouting.tsx'
import UseRefPower from './blog/UseRefPower.tsx'
import TailwindPower from './blog/TailwindPower.tsx'
import EventLoopDemystified from './blog/EventLoopDemystified'
import React from 'react'
import MasteringDocker from './blog/MasteringDocker'

export const BlogViewer = (props: {component: string}): JSX.Element => {
  return (
    <div className="markdownPreviewer">
      <div className={`markdownPreviewer__preview overflow-y-none text-sm`}>
        {props.component === 'mastering-docker' && <MasteringDocker></MasteringDocker>}
        {props.component === 'event-loop' && <EventLoopDemystified></EventLoopDemystified>}
        {props.component === 'tailwindcss' && <TailwindPower></TailwindPower>}
        {props.component === 'use-ref-hook' && <UseRefPower></UseRefPower>}
        {props.component === 'next-js-routing' && <IntroductionToRouting></IntroductionToRouting>}
        {props.component === 'nuxt-sg' && <NuxtStudyGuide></NuxtStudyGuide>}
      </div>
      <hr className={`mt-8`} />
    </div>
  )
}
