import {motion, useMotionValue} from 'framer-motion'
import React, {useState} from 'react'
import useMeasure from 'react-use-measure'
import CustomButton from './CustomButton'

export function ContactMeButton ({isDisabled = false}: {
  isDisabled?: boolean|undefined,
}): React.JSX.Element {
  const [ref, bounds] = useMeasure({scroll: false})
  const [isHover, setIsHover] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div layout
                ref={ref}
                className="w-full flex justify-center h-10"
                animate={{
                  translateX: '0', opacity: 1, transition: {
                    ease: 'easeInOut', duration: .4, delayChildren: 3, stiffness: 100,
                    damping: 0,
                    restDelta: 0.001,
                  },
                }}
                initial={{translateX: '100vw', opacity: 0}}
                exit={{
                  translateX: `-100vw`, opacity: 0, transition: {
                    ease: 'easeInOut', duration: .4, delayChildren: 3, stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                }}
    >
      <motion.div className="label w-full text-xl h-20 flex flex-col justify-center">
        <CustomButton
          type="filled"
          title="Submit"
          handleClick={() => state.contactMeIsOpen = !state.contactMeIsOpen}
          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        />
      </motion.div>
    </motion.div>
  )
}
