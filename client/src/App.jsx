import React, {useState} from 'react';
import {Link, Route, Routes, useLocation} from "react-router-dom";
// import Portfolio from "./pages/Portfolio.jsx";
// import Home from "./pages/Home.jsx";
import {AnimatePresence, motion} from "framer-motion";
// import Contact from "./pages/Contact.jsx";
// import Blog from "./pages/Blog.jsx";
// import {BlogViewer} from "./pages/BlogViewer.jsx";
import {Toaster} from "react-hot-toast";

const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogViewer = lazy(() => import('./pages/BlogViewer'))
const Logo = lazy(() => import('./components/Logo'))


const AppRouter = () => {
  let location = useLocation()

  const [activeLink, setActiveLink] = useState(0);

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

  let bgPosition = 100;
  const handleLinkClick = (index) => {
    if (index < activeLink) {
      shiftBackgroundPosition('right')
    } else if (index > activeLink) {
      shiftBackgroundPosition('left')
    }
    setActiveLink(index);
  };

  function shiftBackgroundPosition(direction) {
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

    <div className="flex flex-col h-full w-full">

      <motion.div className="essgee-bg transition-all delay-100 overflow-hidden"
                  id={`essgee-bg`}
      ></motion.div>

      <nav className="glassmorphism fixed w-full z-50 h-[10vh] text-[1rem] m-auto">
        <div className="absolute -z-20 bg-white bg-opacity-25 inset-0"></div>
        <ul className="flex space-x-4 items-center h-full w-full max-w-[1020px] m-auto p-4">
          {
            links.map(
              (link, i) => <li key={i}>
                <Link to={link.path}
                      className="text-white transition-all duration-300 flex gradient-text"
                      style={{textDecoration: (location.pathname.includes('/blog/') && link.displayName === 'Blog') || location.pathname === link.path ? 'overline' : 'none'}}
                      onClick={() => handleLinkClick(i)}
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
