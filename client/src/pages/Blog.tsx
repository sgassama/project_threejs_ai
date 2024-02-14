import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.ts";
import {Link} from "react-router-dom";

const Blog = () => {
  return (
    <motion.main className={`essgee-page !pb-[130px]`}
                 variants={pageTransitionsAnimation}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 key="blog"
    >
      <motion.ul className={`flex flex-col h-full w-full gap-4`}>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="nuxt-sg">
            An Introduction to Nuxt.js
          </Link>
        </motion.li>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="mastering-docker">
            Mastering Docker: Elevating Your Containerization Expertise
          </Link>
        </motion.li>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="event-loop">
            Demystifying the JavaScript Event Loop: A Journey into the Heart
            of Web App Responsiveness
          </Link>
        </motion.li>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="use-ref-hook">
            Unleash the Power of React's useRef Hook: Mastering State
            Management with Ease
          </Link>
        </motion.li>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="tailwindcss">
            The Power of Tailwind CSS: Revolutionizing Front-End Development
            with Utility-First Workflow
          </Link>
        </motion.li>
        <motion.li className={`flex w-full text-violet-400 underline cursor-pointer`}>
          <Link className={`text-[var(--dark-grey-text)] visited:text-violet-600`} to="next-js-routing">
            Routing in Next.js: A Comprehensive Guide
          </Link>
        </motion.li>
      </motion.ul>
    </motion.main>
  );
};

export default Blog;
