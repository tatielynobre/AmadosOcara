import React from "react";
import "./QuemSomos.css";
import Carousel from "./hist";
import gatoNocolo from "../../assets/GatoNocolo.png";
import pata from "../../assets/Iconepatinha.png";

export default function QuemSomos() {
    return (
      <main className="quem-somos-container">
        <section className="quem-somos-intro">
          <div className="texto">
            <h2>Quem somos?</h2>
            <p >Somos uma ONG localizada em Ocara – CE, formada exclusivamente por voluntários apaixonados pela causa animal. 
              Nosso trabalho é movido pelo compromisso de resgatar, cuidar e 
              encontrar lares responsáveis para animais em situação de abandono, maus-tratos ou risco. </p>
            <br />
            <p >A ONG foi fundada em 2019, a partir da união de pessoas da comunidade que não aceitaram mais ver 
              tantos animais sofrendo nas ruas. Desde então, atuamos de forma independente, contando com o apoio da população, 
              de doadores e de voluntários que se dedicam diariamente a transformar a realidade de cães e gatos da nossa região.</p>
          </div>
          <div className="imagem-container">
            <img src={gatoNocolo} alt="Gato no colo" />
          </div>
        </section>
  
        <section className="missao-valores">
            <div className="TituloMissao">
            <img src={pata} alt="Pata" className="pata" />
          <h2> Nossa Missão e Valores </h2>
          <img src={pata} alt="Pata" className="pata" />
          </div>
          <p>A missão da ONG Amados é promover a adoção responsável de animais, oferecendo acolhimento, cuidados veterinários e muito amor para cães e gatos resgatados em situação de abandono ou vulnerabilidade. Guiada por valores como empatia, compromisso, respeito à vida e transparência, a Amados atua para construir uma rede solidária entre protetores, adotantes e voluntários, acreditando que cada animal merece um lar seguro e cheio de carinho.</p>
          </section>
  
        <section className="historias">
          <h2>Conheça Algumas de Nossas Histórias</h2>
          <Carousel />
        </section>
      </main>
    )
  }
