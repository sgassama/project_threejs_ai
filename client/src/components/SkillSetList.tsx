import {motion} from 'framer-motion'
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

export function SkillSetList(): JSX.Element {
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
      x: -15,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return <motion.ul ref={skillSetRef}
                    className={'skill-set justify-center align-middle border-violet-800 bg-gray-100 bg-opacity-100 text-[var(--dark-grey-text)] list-item h-fit'}
                    variants={boxVariant}
                    animate={'visible'}
                    initial="hidden"
  >
    {skills.map((skill, i) =>
      <motion.li
        className={'gradient-text p-3 flex'}
        key={i}
        initial={'hidden'}
        variants={listVariant}
        whileInView={'visible'}
        exit={'visible'}
        transition={{duration: .3, delay: i * .2}}
        viewport={{once: true}}
      >
        {skill}
      </motion.li>,
    )}
  </motion.ul>
}
