import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import {reader} from '../config/helpers';
import {DecalTypes} from '../config/constants';
import {AIPicker, ColorPicker, FilePicker} from '../components';
import {MarkdownViewer} from '../components/MarkdownViewer.tsx';
import {ContactMeForm} from '../components/ContactMeForm.tsx';
import {PortfolioItem} from '../components/PortfolioItem.tsx';

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

const staggerChildrenVariant = {
  initial: {
    x: '200%',
    // opacity: '0',
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
      damping: 1,
    },
  },
  animate: {
    x: '0%',
    opacity: '1',
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
      damping: 1,
    },
  },
};

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return <FilePicker
            file={ file }
            setFile={ setFile }
            readFile={ readFile }
        />;
      case 'aipicker':
        return <AIPicker
            prompt={ prompt }
            setPrompt={ setPrompt }
            generatingImg={ generatingImg }
            handleSubmit={ handleSubmit }
        />;
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert('Please enter a prompt');

    try {
      setGeneratingImg(true);

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${ data.photo }`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab('');
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab('');
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);

  };
  const toggleSlide2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
      <AnimatePresence>
        { snap.intro && (
            <div className={ `h-full` }>

              <motion.div className="container text-gray-500 text-opacity-90 p-0 h-full">
                <motion.div
                    className="slide absolute inset-0 h-full sm:p-[32px] p-[16px] flex flex-col mt-[80px] pb-[80px]"
                    initial={ 'initial' }
                    exit={ 'initial' }
                    variants={ staggerChildrenVariant }
                    animate={ snap.portfolioIsOpen ? 'animate' : 'initial' }
                >
                  {/* Content for the sliding div */ }
                  <h1 className="head-text text-gray-500 text-opacity-90">
                    Portfolio
                  </h1>

                  <motion.div
                      className="overflow-y-auto overflow-x-hidden h-full text-[.75rem] flex flex-col"
                      variants={ staggerChildrenVariant }
                  >
                    { portfolioItems.map(
                        (pfItem, i) =>
                            <motion.div variants={ staggerChildrenVariant }
                                        className={ 'flex flex-col mt-8' }
                                        key={ i }
                            >
                              <PortfolioItem item={pfItem}></PortfolioItem>
                            </motion.div>
                    ) }
                  </motion.div>

                  <motion.div>
                    <p className="text-gray-700 mb-4 text-[.75rem] flex flex-col text-gray-500 text-opacity-100 bg-violet-50 p-2">
                      *References and full work history available upon request
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="container text-gray-500 text-opacity-90 p-0">
                <motion.div
                    className="slide absolute inset-0 h-full sm:p-[32px] p-[16px] flex flex-col mt-[80px] pb-[80px]"
                    initial={ 'initial' }
                    exit={ 'initial' }
                    variants={ staggerChildrenVariant }
                    animate={ snap.blogIsOpen ? 'animate' : 'initial' }
                >
                  <h1 className="head-text text-gray-500 text-opacity-90 bg-white">
                    Blog
                  </h1>

                  <motion.div className="text-[.75rem] h-full overflow-y-auto overflow-hidden flex flex-col" variants={ staggerChildrenVariant }>
                    <motion.section variants={ staggerChildrenVariant }
                                className={ 'flex flex-col' }
                                key={ 1 }
                    >
                      <MarkdownViewer filePath={ `blog/event-loop.md` } />
                    </motion.section>
                    <motion.section variants={ staggerChildrenVariant }
                                className={ 'flex flex-col' }
                                key={ 2 }
                    >
                      <MarkdownViewer filePath={ `blog/userref-hook.md` } />
                    </motion.section>
                    <motion.section variants={ staggerChildrenVariant }
                                className={ 'flex flex-col' }
                                key={ 3 }
                    >
                      <MarkdownViewer filePath={ `blog/tailwindcss.md` } />
                    </motion.section>
                    <motion.section variants={ staggerChildrenVariant }
                                className={ 'flex flex-col' }
                                key={ 4 }
                    >
                      <MarkdownViewer filePath={ `blog/docker.md` } />
                    </motion.section>

                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="container text-gray-500 text-opacity-90 p-0">
                <motion.div
                    className="slide absolute inset-0 h-full sm:p-[32px] p-[16px] flex flex-col mt-[80px] pb-[80px]"
                    initial={ 'initial' }
                    exit={ 'initial' }
                    variants={ staggerChildrenVariant }
                    animate={ snap.contactMeIsOpen ? 'animate' : 'initial' }
                >
                  <h1 className="head-text text-gray-500 text-opacity-90 bg-white">
                    Contact Me
                  </h1>

                  <motion.div className="text-[.75rem] h-full overflow-y-auto overflow-hidden flex flex-col" variants={ staggerChildrenVariant }>
                    <motion.section variants={ staggerChildrenVariant }
                                className={ 'flex flex-col' }
                                key={ 1 }
                    >
                      <ContactMeForm />
                    </motion.section>

                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
        ) }
      </AnimatePresence>
  );
};

export default Customizer;
