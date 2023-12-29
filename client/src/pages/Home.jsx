import {AnimatePresence, motion} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';
import {CustomButton} from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const staggerChildrenVariant = {
  initial: {
    x: '-200%',
    // opacity: '0',
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
      damping: 1,
    },
  },
  animate: {
    x: '0%',
    // opacity: '1',
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
      damping: 1,
    },
  },
};

const Home = () => {
  const snap = useSnapshot(state);

  return (
      <AnimatePresence>
        { snap.intro && (
            <motion.section className="home mt-[0px] relative" { ...slideAnimation(
                'left') }>

              <motion.header { ...slideAnimation('down') }
                             className={ `w-full absolute right-0 top-0 transition-all duration-[350ms] ease-out` }
                             onClick={ () => {
                               state.backgroundColor = 'rgba(110,99,110,0.18)';
                               state.portfolioIsOpen = state.blogIsOpen = state.contactMeIsOpen = false;
                               return;
                             } }
                             style={ {
                               left: snap.portfolioIsOpen || snap.blogIsOpen ||
                               snap.contactMeIsOpen
                                   ? '0'
                                   : 'calc(100% - 80px)',
                             } }
              >
                <img
                    src="./SG-logos_black.webp"
                    alt="logo"
                    className="w-[80px] h-[80px] object-contain relative opacity-60 z-10 cursor-pointer"
                />
              </motion.header>

              <motion.div className="home-content bg-white" { ...headContainerAnimation }
                          variants={ staggerChildrenVariant }
                          initial={ 'initial' }
                          animate={ snap.portfolioIsOpen || snap.blogIsOpen ||
                          snap.contactMeIsOpen
                              ? 'initial'
                              : 'animate' }
                  // transition={ {duration: 0.4, ease: 'easeInOut'} }

              >
                <motion.div { ...headTextAnimation }>
                  <h1 className="head-text text-gray-500 text-opacity-90">
                    Welcome to <br className="sm:block hidden" /> <span
                      className="text-violet-600"
                  >EssGee</span>
                    <motion.section className="navigation-row flex flex-row gap-[16px] top-8"
                                    variants={ staggerChildrenVariant }
                                    initial={ 'initial' }
                                    animate={ snap.portfolioIsOpen ||
                                    snap.blogIsOpen ||
                                    snap.contactMeIsOpen
                                        ? 'initial'
                                        : 'animate' }
                    >
                      <CustomButton
                          type="filled"
                          title="Portfolio"
                          handleClick={ () => {
                            state.backgroundColor = 'cyan';
                            return state.portfolioIsOpen = !state.portfolioIsOpen;
                          } }
                          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                      />

                      <CustomButton
                          type="filled"
                          title="Blog"
                          handleClick={ () => state.blogIsOpen = !state.blogIsOpen }
                          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                      />

                      <CustomButton
                          type="filled"
                          title="Contact Me"
                          handleClick={ () => state.contactMeIsOpen = !state.contactMeIsOpen }
                          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                      />
                    </motion.section>
                  </h1>
                </motion.div>
                <motion.div
                    { ...headContentAnimation }
                    className="flex flex-wrap flex-col max-w-[650px] font-normal gap-[8px] text-[.75rem]"
                >
                  <span className={ `sine text-gray-500 text-opacity-90` }>

                    <strong className={ `inline text-violet-600` }>Hello! I'm Siaka Gassama</strong>, a seasoned full-stack developer with a passion for building and tinkering. With over 9 years of hands-on experience, I've mastered the art of creating and maintaining diverse APIs and websites/applications. My expertise extends to automating mission-critical deployments through the implementation of configuration management, CI/CD, and DevOps processes.
                  </span>
                  <span className={ `sine text-gray-500 text-opacity-90` }>
                    Beyond the coding realm, I'm an enthusiastic sports fan, particularly of the NBA, and have a deep appreciation for music. What sets me apart is my multilingual proficiency, as I speak three languages <br /> ◕ ◡ ◕.
                  </span>
                  <span className={ `sine text-gray-500 text-opacity-90 text-violet-600 font-bold` }>
                    Let's collaborate and bring your software projects to life!
                  </span>

                </motion.div>
              </motion.div>

            </motion.section>
        ) }
      </AnimatePresence>
  );
};

export default Home;
