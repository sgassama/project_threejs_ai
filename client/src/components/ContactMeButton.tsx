import {motion} from 'framer-motion'
import React from 'react'

export function ContactMeButton({isDisabled = false}: {
    isDisabled?: boolean | undefined,
}): JSX.Element {

    return (
        <motion.div layout className="label w-full text-xl h-20 flex flex-col justify-center outline-0">
            <button disabled={isDisabled}
                    type="submit"
                    className="w-fit py-2.5 font-bold transition-all"
                    style={{
                        color: isDisabled ? 'dimgrey' : 'var(--violet)',
                        opacity: isDisabled ? .5 : 1,
                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                    }}
            >Submit
            </button>
        </motion.div>
    )
}
