import Logo from '@/src/components/Logo.tsx'
import Blog from '@pages/Blog.tsx'
import BlogViewer from '@pages/BlogViewer.tsx'
import Contact from '@pages/Contact.tsx'

import Home from '@pages/Home.tsx'
import Portfolio from '@pages/Portfolio.tsx'
import {AnimatePresence, motion} from "framer-motion";
import React from 'react';
import {Toaster} from "react-hot-toast";
import {Link, Route, Routes, useLocation} from "react-router-dom";

const AppRouter = () => {
  let location = useLocation()
  const links = [{
    displayName: 'Home',
    path: '/',
  }, {
    displayName: 'Portfolio',
    path: '/portfolio',
  }, {
    displayName: 'Blog',
    path: '/blog',
  }, {
    displayName: 'Contact Me',
    path: '/contact',
  },];

  const handleLinkClick = () => {
    shiftBackgroundPosition('left')
  };

  function shiftBackgroundPosition(direction: string) {
    const elementId = 'essgee-bg'
    const element = document.getElementById(elementId);

    if (element) {
      const currentBackgroundPosition = getComputedStyle(element).backgroundPositionX;
      const currentPositionValue = parseFloat(currentBackgroundPosition);

      if (!isNaN(currentPositionValue)) {
        const newPosition = direction === 'right' ? currentPositionValue + 40 : currentPositionValue - 40;
        element.style.backgroundPositionX = `${newPosition}%`;
      }
    }
  }

  return (

    <div className="flex flex-col h-full w-full p-4">

      <motion.div className="essgee-bg transition-all duration-700 delay-100 overflow-hidden"
                  id={`essgee-bg`}
      ></motion.div>

      <nav className="glassmorphism fixed w-full z-50 h-20 text-[1rem] sm:text-[1.3rem] -mt-4 -ml-4 p-4">
        <div className="absolute -z-20 bg-white bg-opacity-25 inset-0"></div>
        <ul className="flex space-x-4 items-center h-full w-full max-w-[1020px] m-auto">
          {
            links.map(
              (link, i) => <li key={i}>
                <Link to={link.path}
                      className="text-white transition-all duration-300 flex gradient-text font-bold"
                      style={{textDecoration: (location.pathname.includes('/blog/') && link.displayName === 'Blog') || location.pathname === link.path ? 'overline' : 'none'}}
                      onClick={() => handleLinkClick()}
                > {link.displayName} </Link>
              </li>
            )
          }
        </ul>

        <Logo></Logo>
      </nav>

      <AnimatePresence mode={`wait`}> <Routes location={location} key={location.pathname}> <Route index
                                                                                                  element={<Home/>}
      /> <Route path="portfolio" element={<Portfolio/>}/> <Route path="blog" element={<Blog/>}/>
        <Route path="blog/:slug" element={<BlogViewer/>}/> <Route path="contact" element={<Contact/>}/> </Routes>
      </AnimatePresence>

      <Toaster position={`bottom-center`}></Toaster>
    </div>

  );
};

export default AppRouter;
