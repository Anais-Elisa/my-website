import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">À propos</Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">Projets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

