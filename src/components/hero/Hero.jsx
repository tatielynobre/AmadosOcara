import "./Hero.css";
import gatinho from "../../assets/gatinho-hero.png";


function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
            <div className="hero-text">
                <p><strong>A Amados resgata, cuida e conecta corações.</strong></p> 
                <p><strong>Adote com amor!</strong></p>
            </div>
            <div className="hero-image-wrapper">
                <img src={gatinho} alt="Gatinho fofo" className="hero-image" />
            </div>
            </div>
        </section>
        );
    }

export default Hero;