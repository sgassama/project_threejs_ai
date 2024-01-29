import {motion, useScroll} from 'framer-motion'
import React, {RefObject, useRef} from 'react'

export type PortfolioItem = {
    name: string,
    path: string,
    content: string,
}

export function PortfolioItem({containerRef, item}: {
    containerRef?: RefObject<HTMLElement> | undefined,
    item: PortfolioItem | null
}): JSX.Element {
    const portfolioItemRef = useRef(null)
    const {scrollYProgress} = useScroll({
        layoutEffect: false,
        target: portfolioItemRef,
        container: containerRef,
        offset: ['center end', 'center start'],
        // offset: ['start center', 'center start'],
    })

    return (
        <motion.div ref={portfolioItemRef}
                    layout
                    className={'portfolio-item'}
        >
            <figure className="progress">
                <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="bg"/>
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

            <motion.section className={'mt-4 inset-0 items-start top-16 max-w-[65%]'}
            >
                {item && item.content}
            </motion.section>

            <hr/>
        </motion.div>
    )
}
