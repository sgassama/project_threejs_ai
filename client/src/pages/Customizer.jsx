import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import {reader} from '../config/helpers';
import {DecalTypes} from '../config/constants';
import {AIPicker, ColorPicker, FilePicker} from '../components';
import {BlogViewer} from 'client/src/components/BlogViewer.tsx';
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
    opacity: '0',
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

      <div className={`pt-8 gap-8`}>
        Portfolio

        <a href="/">Back</a>
      </div>
  );
};

export default Customizer;
