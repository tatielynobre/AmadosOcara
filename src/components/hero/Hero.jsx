import "./Hero.css";
import gatinho from "../../assets/gatinho-hero.png";


function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
            <div className="hero-text">
                <p>Lorem ipsum blblba</p>
                <p>Lorem ipsum blblba abulule</p>
                <p>Lorem ipsum blblba abulule</p>
                <p>Lorem ipsum blblba abulule</p>
            </div>
            <div className="hero-image-wrapper">
                <img src={gatinho} alt="Gatinho fofo" className="hero-image" />
            </div>
            </div>
        </section>
        );
    }

export default Hero;