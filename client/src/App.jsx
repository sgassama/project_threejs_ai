import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import {useSnapshot} from 'valtio';
import state from './store/index.js';

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      <Home />
      {/* <Canvas /> */}
      <Customizer />
    </main>
  )
}

export default App
