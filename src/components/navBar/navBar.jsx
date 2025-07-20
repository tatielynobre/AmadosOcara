import React from "react";
import './navBar.css'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';


function NavBar() {
return (
<nav className="navbar">
    <Link to="/">
        <img src={logo} alt="Amados Logo" className="navbar-logo" />
    </Link>
    <ul className="nav-links">
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
export default NavBar;