import React, {useRef} from 'react';
import {motion} from "framer-motion";
import {pageTransitionsAnimation} from "../config/motion.js";
import {PortfolioItem} from "../components/PortfolioItem.tsx";

const portfolioItems = [
    {
        'path': '/portfolio/M&M.webp',
        'name': 'Morgan & Morgan',
        'content': 'Successfully developed a responsive mobile app for both iOS and Android platforms using Capacitor, Angular, and RXjs. Contributed to the establishment of efficient CI/CD pipelines using GitHub actions, ensuring swift and reliable deployment processes for enhanced productivity and responsiveness to business needs.',
    },
    {
        'path': '/portfolio/pgi.svg',
        'name': 'ReadyTalk/PGi',
        'content': 'Led the creation and maintenance of a robust cross-browser API and client for a video conferencing application, leveraging native WebRTC, adapter.js, and Temasys. Implemented automated dockerized container/pod deployments and builds using a comprehensive suite of tools, including bash scripts, GitHub, Jenkins, Terraform, Artifactory, and AWS, resulting in an end-to-end CI/CD solution. Provided High Availability/Disaster Recovery solutions and failover for regional clusters, ensuring seamless and reliable service delivery. Utilized advanced monitoring and metrics tools such as Kibana, fluentd, Consul, Prometheus, and Grafana for proactive issue resolution and optimal performance.',
    },
    {
        'path': '/portfolio/CT.webp',
        'name': 'CommercialTribe',
        'content': 'Played a pivotal role in developing an enterprise-scale application supporting thousands of users, utilizing MEAN stack, GraphQL, and Relay in conjunction with a RESTful API. Designed and implemented intuitive user interfaces in Angular and React/React-Native, aligning seamlessly with designer mockups. Spearheaded the creation and maintenance of CI/CD scripts using a powerful toolkit including Travis, Docker, Webpack, GitHub, Grunt, Gulp, and Bash. Successfully embedded the CommercialTribe web-app into Salesforce.com via Apex, JavaScript, and Angular, expanding the reach and interoperability within the Salesforce ecosystem.',
    },
    {
        'path': '/portfolio/cmaps.png',
        'name': 'Centigon Solutions',
        'content': 'Innovatively crafted an HTML5/jQuery design workflow and UI for mobile geo visualization. Implemented robust user authentication, authorization, and session handling processes using Java HTTPClient, ensuring data security and user integrity. Developed a hybrid HTML5/iOS design using PhoneGap, facilitating efficient code reuse for the Android version of the application and optimizing development efforts.',
    },
];

const Portfolio = () => {
    const portfolioItemsRef = useRef(null);

    return (

      <motion.main className={`essgee-page !pb-[130px]`}
                     variants={pageTransitionsAnimation}
                     initial="initial"
                     animate="animate"
                     ref={portfolioItemsRef}
                     exit="exit"
                     key="portfolio"
        >
            {portfolioItems.map((pfItem, i) => <PortfolioItem key={i}
                                                              containerRef={portfolioItemsRef}
                                                              item={pfItem}
            ></PortfolioItem>)}

            <small className={`w-full flex h-[50px] sticky bottom-[-50px] justify-center text-violet-600 glassmorphism p-4`}>
                References and work history available upon request
            </small>

        </motion.main>
    );
};

export default Portfolio;
