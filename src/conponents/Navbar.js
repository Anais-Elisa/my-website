import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <ul className='navbar-links' >
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;