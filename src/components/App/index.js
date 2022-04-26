// == Import
import { Routes, Route } from 'react-router-dom';
import Porfolio from 'src/pages/Porfolio';
import Contact from 'src/pages/Contact';
import Home from 'src/pages/Home';
import Knowledges from 'src/pages/Knowledges';
import Notfound from 'src/pages/NotFound';

import './style.scss';
// == Composant
function App() {
  return (
    <div className="app">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Knowledges />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

    </div>
  );
}

// == Export
export default App;
