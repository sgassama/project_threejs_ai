import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'
import React from 'react'

export function SocialMediaLinks(): React.JSX.Element {
  return (
    <motion.ul className={`grid grid-cols-3 gap-[16px]`}>
      <li className={`text-center text-violet-600`}>
        <a href="https://github.com/sgassama/" target="_blank" aria-label="Github">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </li>
      <li className={`text-center text-violet-600`}>
        <a href="https://stackoverflow.com/users/2989376/call-de-amberlamps" target="_blank" aria-label="Stack Overflow">
          <FontAwesomeIcon icon={faStackOverflow}/>
        </a>
      </li>
      <li className={`text-center text-violet-600`}>
        <a href="https://www.linkedin.com/in/siaka-gassama-6aab742b" target="_blank" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </li>
    </motion.ul>
  )
}
