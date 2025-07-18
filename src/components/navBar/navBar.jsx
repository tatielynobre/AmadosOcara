import React from "react";
import './navBar.css'; 
import logo from '../../assets/image.png';


function NavBar() {
return (
    <nav className="navbar">
        <img src={logo} alt="Amados Logo" className="navbar-logo" />
        <ul className="nav-links">
            <li><a href="#caminhohome">Quem somos</a></li>
            <li><a href="#caminhoadote">Adote</a></li>
            <li><a href="#caminhoparceiro">Parceiros</a></li>
            <li><a href="#caminho">Artigos</a></li>
            <li><a href="#caminho">Transparência</a></li>
            <li><a href="#caminho" id="Doe">Doe</a></li>
        </ul>
    </nav>
);
}
export default NavBar;