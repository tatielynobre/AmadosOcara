import './Footer.css';
import logo from "../../assets/image.png";

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <img src={logo} alt="Logo Amados" className="footer-logo" />

            <div className="footer-info">
            <p>Amados - Adoção de gatinhos</p>
            <p>CNPJ: xxxxxxxx/xxxx-xx</p>
            <p>E-mail: contato@amados.org.br</p>
            </div>

            <div className="footer-social">
            <p><strong>Siga-nos:</strong></p>
            <p>@AmadosOcara</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
