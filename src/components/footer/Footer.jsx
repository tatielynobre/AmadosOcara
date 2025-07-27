import './Footer.css';
import logo from "../../assets/image.png";

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <img src={logo} alt="Logo Amados" className="footer-logo" />

            <div className="footer-info">
            <p>Amados - Adoção de Animais</p>
            <p>CNPJ: 53.710.256/0001-59</p>
            <p>E-mail: amados.ocara@gmail.com</p>
            </div>

            <div className="footer-social">
            <p><strong>Siga-nos:</strong></p>
            <a href="https://www.instagram.com/amados_ocara/" target="_blank">@amados_ocara</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
