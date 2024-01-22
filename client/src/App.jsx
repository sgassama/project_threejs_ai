// App.jsx
import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {AboutMeContent} from './components/AboutMeContent.tsx';
import {PortfolioItem} from './components/PortfolioItem.tsx';
import {ContactMeForm} from './components/ContactMeForm.tsx';
import {Logo} from './components/Logo.tsx';
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast';
import {slideAnimation} from './config/motion.js';
import {BlogViewer} from './components/BlogViewer.tsx';

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

const App = () => {
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [blogListVisible, setBlogListVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [blogPath, setBlogPath] = useState('');
  const [contactVisible, setContactVisible] = useState(false);

  const handleButtonClick = (section) => {
    if (!!blogPath) {
      setTimeout(() => {
        setBlogPath(null);
      }, 500)
      setBlogListVisible(true);
      setPortfolioVisible(false);
      setContactVisible(false);
      return setBlogVisible(false);
    }

    switch (section) {
      case 'portfolio':
        setPortfolioVisible(!portfolioVisible);
        setBlogListVisible(false);
        setBlogVisible(false);
        setContactVisible(false);
        break;
      case 'blog-list':
        setBlogListVisible(!blogListVisible);
        setPortfolioVisible(false);
        setBlogVisible(false);
        setContactVisible(false);
        break;
      case 'contact':
        setContactVisible(!contactVisible);
        setPortfolioVisible(false);
        setBlogVisible(false);
        setBlogListVisible(false);
        break;
      default:
        setContactVisible(false);
        setPortfolioVisible(false);
        setBlogVisible(false);
        setBlogListVisible(false);
        break;
    }
  };

  const emptyForm = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(emptyForm);
  const data = {
    requesterName: formData.name,
    requesterEmail: formData.email,
    requesterMessage: formData.message,
  };
  const shouldDisableForm = !formData.name || !formData.email ||
      !formData.message;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    const toastOpts = {duration: 3000};
    try {
      await axios.post(`/api/send-contact-email`, {
        requesterName: data.requesterName,
        requesterEmail: data.requesterEmail,
        requesterMessage: data.requesterMessage,
        headers,
      });

    } catch (e) {
      toast.error(
          'There was a problem processing your request. Please try again later.',
          toastOpts);
      return;
    }

    toast.success('Your message has been sent!', toastOpts);
    setTimeout(() => {
      setFormData(emptyForm);
    }, 2000);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const portfolioItemsRef = useRef(null);

  return (
      <motion.div className="essgee flex flex-col items-center justify-center h-screen overflow-hidden relative">
        <motion.div
            className="mb-4 z-20 w-full transition-all duration-300 absolute top-4 left-4"
            initial={ {x: '-150%'} }
            animate={ {
              x: (portfolioVisible || blogListVisible || contactVisible)
                  ? '0%'
                  : '-150%',
              opacity: (portfolioVisible || blogListVisible || contactVisible)
                  ? '1'
                  : '0',
              transition: {duration: .3},
            } }
            onClick={ () => handleButtonClick() }
        >
          <button
              className="font-bold py-2 px-4 bordered text-violet-600"
          >
            &lt; Back
          </button>
        </motion.div>

        <motion.div
            className="inset-0 left-0 absolute content-center"
            initial={ {width: '150px'} }
            animate={ {
              width: (portfolioVisible || blogListVisible || contactVisible)
                  ? '100%'
                  : '100px',
              transition: {duration: .3},
            } }
            onClick={ () => handleButtonClick() }
        >
          <Logo></Logo>
        </motion.div>

        <motion.div
            className="right-0 w-[60%] absolute overflow-x-hidden flex h-full z-10"
            initial={ {x: '0%'} }
            animate={ {
              x: (portfolioVisible || blogListVisible || contactVisible)
                  ? '150%'
                  : '0%',
              transition: {duration: .3},
            } }
            useSpring={ {to: 0} }
        >
          {/* Content of the div */ }
          <AboutMeContent></AboutMeContent>
        </motion.div>

        <motion.div className="w-full left-4 relative" { ...slideAnimation(
            'down') }>
          <motion.div
              className="mb-4 w-full"
              initial={ {x: '0%'} }
              animate={ {
                x: (portfolioVisible || blogListVisible || contactVisible)
                    ? '150%'
                    : '0%',
                transition: {duration: .3},
              } }
          >
            <button
                className="font-bold py-2 z-30 p-4 bordered text-violet-600"
                onClick={ () => handleButtonClick('portfolio') }
            >
              Portfolio
            </button>
          </motion.div>

        </motion.div>
        <motion.div
            className={ `home-content-section flex z-10 ${ portfolioVisible
                ? ''
                : '' }` }
            initial={ {x: '-100%'} }
            animate={ {
              x: portfolioVisible ? '0%' : '-100%',
              transition: {duration: .3},
            } }
        >
          <motion.h2 className={ `py-2 px-4 text-violet-600 font-bold min-h-[70px] w-full items-start justify-center flex` }>Portfolio</motion.h2>
          <motion.article ref={ portfolioItemsRef }
                          className={ 'overflow-y-auto' }
          >
            { portfolioItems.map((pfItem, i) => <PortfolioItem key={ i }
                                                               containerRef={ portfolioItemsRef }
                                                               item={ pfItem }
            ></PortfolioItem>) }

            <small className={ `bg-white flex w-full justify-center` }>
              References and work history available upon request
            </small>

          </motion.article>
        </motion.div>

        <motion.div className="w-full left-4 relative" { ...slideAnimation(
            'down') }>
          <motion.div
              className="mb-4 w-full"
              initial={ {x: '0%'} }
              animate={ {
                x: (portfolioVisible || blogListVisible || contactVisible)
                    ? '150%'
                    : '0%',
                transition: {duration: .3},
              } }
          >
            <button
                className="font-bold py-2 px-4 bordered text-violet-600"
                onClick={ () => handleButtonClick('blog-list') }
            >
              Blog
            </button>
          </motion.div>

        </motion.div>
        <motion.div
            className={ `home-content-section z-10 ${ (blogListVisible ||
                blogVisible)
                ? ''
                : '' }` }
            initial={ {x: '-100%'} }
            animate={ {
              x: (blogListVisible || blogVisible) ? '0%' : '-100%',
              transition: {duration: .3},
            } }
        >
          <h2 className={ `py-2 px-4 text-violet-600 font-bold min-h-[70px] w-full items-start justify-center flex` }>Blog</h2>
          <motion.ul className={ `flex flex-col h-full w-full gap-4` }
                     initial={ {x: '0%'} }
                     animate={ {
                       x: !!blogVisible ? '110%' : !!blogListVisible
                           ? '0%'
                           : '-110%',
                       transition: {duration: .3},
                     } }
          >
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('nuxt-sg');
                         setBlogVisible(true);
                       } }
            >
              Comprehensive Nuxt.js Study Guide
            </motion.li>
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('mastering-docker');
                         setBlogVisible(true);
                       } }
            >
              Mastering Docker: Elevating Your Containerization Expertise
            </motion.li>
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('event-loop');
                         setBlogVisible(true);
                       } }
            >
              Demystifying the JavaScript Event Loop: A Journey into the Heart
              of Web App Responsiveness
            </motion.li>
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('use-ref-hook');
                         setBlogVisible(true);
                       } }
            >
              Unleash the Power of React's useRef Hook: Mastering State
              Management with Ease
            </motion.li>
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('tailwindcss');
                         setBlogVisible(true);
                       } }
            >
              The Power of Tailwind CSS: Revolutionizing Front-End Development
              with Utility-First Workflow
            </motion.li>
            <motion.li className={ `flex w-full text-violet-400 underline cursor-pointer` }
                       onClick={ () => {
                         setBlogPath('next-js-routing');
                         setBlogVisible(true);
                       } }
            >
              Routing in Next.js: A Comprehensive Guide
            </motion.li>
          </motion.ul>
          <motion.article className={ 'overflow-y-auto overflow-x-hidden h-full  w-full absolute inset-0 mt-[70px] p-4' }
                          initial={ {x: '-110%'} }
                          animate={ {
                            x: blogVisible ? '0%' : '-110%',
                            transition: {duration: .3, ease: 'linear'},
                          } }
          >
            <BlogViewer component={ `${ blogPath }` } />
            <div className="p-8"></div>
          </motion.article>
        </motion.div>

        <motion.div className="w-full left-4 relative" { ...slideAnimation(
            'down') }>
          <motion.div
              className="mb-4 w-full"
              initial={ {x: '0%'} }
              animate={ {
                x: (portfolioVisible || blogListVisible || contactVisible)
                    ? '150%'
                    : '0%',
                transition: {duration: .3},
              } }
          >
            <button
                className="text-black font-bold py-2 px-4 bordered text-violet-600"
                onClick={ () => handleButtonClick('contact') }
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
        <motion.div
            className={ `home-content-section ${ contactVisible ? '' : '' }` }
            initial={ {x: '-100%'} }
            animate={ {
              x: contactVisible ? '0%' : '-100%',
              transition: {duration: .3},
            } }
        >
          <h2 className={ `py-2 px-4 text-violet-600 font-bold min-h-[70px] w-full items-start justify-center flex` }>Contact
            Me</h2>
          <motion.article className={ 'overflow-y-auto h-full w-full' }>
            <ContactMeForm onSubmit={ handleSubmit }
                           formData={ formData }
                           onChange={ handleChange }
                           disabled={ shouldDisableForm }
            />
          </motion.article>
        </motion.div>

        <Toaster position={ `bottom-center` }></Toaster>

        <div className="essgee-bg transition-all duration-700"
             style={ {
               backgroundPosition: blogVisible ? '40% 0%' : contactVisible || portfolioVisible || blogListVisible ? '70% 0%' : '100% 0%',
               backgroundColor: contactVisible || portfolioVisible || blogVisible || blogListVisible ? 'rgba(236,69,133,0.3)' : 'rgba(149,13,224,0.3)',
               transition: {duration: .3},
             } }
        ></div>
      </motion.div>
  );
};

export default App;
