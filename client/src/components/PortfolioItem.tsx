import {motion, useScroll} from 'framer-motion'
import React, {RefObject, useRef} from 'react'

export type PortfolioItem = {
  name: string,
  path: string,
  content: string,
}

export function PortfolioItem ({containerRef, item}: {
  containerRef?: RefObject<HTMLElement>|undefined,
  item: PortfolioItem|null
}): JSX.Element {
  const portfolioItemRef = useRef(null)
  const {scrollYProgress} = useScroll({
    layoutEffect: false,
    target: portfolioItemRef,
    container: containerRef,
    offset: ['start end', 'start'],
    // offset: ['start center', 'center start'],
  })

  return (
    <motion.section layout
                    className={'first:my-[0%] my-[16px] last:mb-0 relative min-h-[600px]'}
    >
      <motion.div className={'portfolio-item'}>

        <figure className="progress sticky">
          <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle layout
                           cx="50"
                           cy="50"
                           r="30"
                           pathLength="1"
                           className="indicator"
                           style={{pathLength: scrollYProgress}}
            />
          </svg>
        </figure>

        <motion.h1 className={'text-violet-600'}>
          {item && item.name}
        </motion.h1>

        <motion.section ref={portfolioItemRef}
                        className={'mt-4 inset-0 items-start top-16 text-sm max-w-[65%]'}
        >
          {item && item.content}
        </motion.section>

      <hr/>
      </motion.div>
    </motion.section>
  )
}

/* function PortfolioIcon ({path}: {path?: string|null}): React.JSX.Element {
  const portfolioIconRef = useRef(null)

  return (
    <motion.img layout
                className={'portfolio-icon align-middle max-w-full sticky z-30 top-[0px] p-[8px] bg-white shadow'}
                ref={portfolioIconRef}
                style={{width: '150px'}}
                src={path || '/portfolio/M&M.webp'}
                initial={{x: 100}}
                whileInView={{x: 0}}
                transition={{duration: .3}}
    >
    </motion.img>
  )
} */
