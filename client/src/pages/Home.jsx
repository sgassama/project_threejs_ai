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
import {useNavigate} from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleNavigateToPath = (path) => {
    navigate(path); // Navigates to the specified path
  };

  return (
      <div className={ `pt-8 gap-8` }>
        Home

        <a href="/portfolio">PF</a>
      </div>
  );
};

export default Home;
