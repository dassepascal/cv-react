// == Import
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Knowledges from '../pages/Knowledges';
import Notfound from '../pages/NotFound';
import Porfolio from '../pages/Porfolio';
import './style.scss';
// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Knowledges />} />
        <Route path="/porfolio" element={<Porfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route component={<Notfound />} />
      </Routes>

    </div>
  );
}

// == Export
export default App;
