// == Import
import Contact from '../pages/Contact';
import './style.scss';
import Home from '../pages/Home';
import Knowledges from '../pages/Knowledges';
import Porfolio from '../pages/Porfolio';

// == Composant
function App() {
  return (
    <div className="app">
      <Contact />
      <Home />
      <Knowledges />
      <Porfolio />
    </div>
  );
}

// == Export
export default App;
