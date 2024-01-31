import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.js";
import {useState} from "react";
import {Link} from "react-router-dom";

const Contact = () => {

  const handleNavigateToPath = (path) => {
    // navigate(path); // Navigates to the specified path
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
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <motion.main className={`essgee-page`}
                 variants={pageTransitionsAnimation}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 key="blog"
    >
      <motion.ul className={`flex flex-col h-full w-full gap-4`}
                 initial={{x: '0%'}}
                 animate={{
                   transition: {duration: .3},
                 }}
      >
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

export default Contact;