import {motion} from 'framer-motion'
import React from 'react'

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


function SkillSetList(): React.JSX.Element {
  const boxVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0
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

  return <motion.ul
    className={'skill-set flex justify-center align-middle bg-[ghostwhite] bg-opacity-100 text-[var(--dark-grey-text)] list-item h-fit'}
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
        exit={'hidden'}
        transition={{duration: .25, delay: i * .03}}
        viewport={{once: true}}
      >
        {skill}
      </motion.li>,
    )}
  </motion.ul>
}

export default SkillSetList
