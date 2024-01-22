import {AnimatePresence, motion} from 'framer-motion'
import React, {useRef} from 'react'

const skills: string[] = [
  `• Languages: Javascript, Java, Python, PHP, Typescript, SQL, HTML, CSS`,
  '• General Frameworks/Tools: webRTC, AngularJS, RXjs, GraphQL, ReactJS, Bootstrap, ExpressJS, NodeJS, Temasys, WordPress',
  '• CI/CD Frameworks/Tools: Helm, Kops, Kubernetes, Docker, AWS, Terraform, Jenkins, Travis, Artifactory, Git, Bash',
  '• Testing Frameworks/Tools: Mocha, Jasmine, Chai, Jest, Selenium, NightwatchJS, BrowserStack, Sauce Labs',
  '• Monitoring & Alerting Frameworks/Tools: Consul, Prometheus, etcd, fluentd, Kibana, Grafana, Callstats, Sentry, CloudWatch',
  '• Database: MySQL, MongoDB',
  '• OS: Linux, macOS, Windows',
  '• Collaboration Tools: JIRA, Confluence, Trello, Slack, Google Drive, Microsoft Office',
]

export function SkillSetList (): JSX.Element {
  const skillSetRef = useRef(null)

  const boxVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
    },
  }

  const listVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return <motion.ul ref={skillSetRef}
                    className={'skill-set text-xs justify-center align-middle flex-wrap border-violet-800 bg-gray-50 list-item'}
                    variants={boxVariant}
                    animate={'visible'}
                    initial="hidden"
  >
    <AnimatePresence>
      {skills.map((skill, i) =>
        <motion.li
          className={'gradient-text p-3'}
          key={i}
          initial={'hidden'}
          variants={listVariant}
          whileInView={'visible'}
          exit={'visible'}
          transition={{duration: 1, delay: i * .4}}
          viewport={{once: true}}
        >
          {skill}
        </motion.li>,
      )}
    </AnimatePresence>
  </motion.ul>
}
