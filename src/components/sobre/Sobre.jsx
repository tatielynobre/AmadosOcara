import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sobre.css";
import logo from "../../assets/image.png"; 

const SobreNos = () => {
    const navigate = useNavigate();
    
    return (
        <section className="sobre-nos">
        <div className="sobre-nos-container">
            <img src={logo} alt="Logo Amados" className="logo-sobre-nos" />
            <div className="texto-sobre-nos">
            <h2>Sobre nós</h2>
            <p>
                Somos uma ONG de Ocara-CE. Formada 
                exclusivamente por voluntários, a Amados
                realiza ações de resgate, castração, 
                tratamento e busca por adoções responsáveis,
                enfrentando sérias limitações de tempo, estrutura e recursos. 
            </p>
            <button className="botao-sobre-nos" onClick={() => navigate('/quem-somos')}>Saiba mais</button>
            </div>
        </div>
        </section>
    );
};

export default SobreNos;
