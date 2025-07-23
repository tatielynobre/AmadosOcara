import React, { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';


export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
            <img src={logo} alt="Amados Logo" className="navbar-logo" />
        </Link>
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        &#9776;
      </button>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        <li><Link to="/quem-somos">Quem somos</Link></li>
        <li><Link to="/adote">Adote</Link></li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/artigos">Artigos</Link></li>
        <li><Link to="/transparencia">Transparência</Link></li>
        <li><Link to="/doe" id="Doe">Doe</Link></li>
      </ul>
    </nav>
  );
}