import {faGithub, faStackOverflow, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'
import React from 'react'

export function SocialMediaLinks (): React.JSX.Element {
  return (
    <motion.ul className={`grid grid-cols-3 gap-[16px]`}>
      <li>
        <a href="https://github.com/sgassama/" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/2989376/call-de-amberlamps" target="_blank">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/siaka-gassama-6aab742b" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </motion.ul>
  )
}
