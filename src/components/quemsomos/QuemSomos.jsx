import React from "react";
import "./QuemSomos.css";
import Carousel from "./hist";
import gatoNocolo from "../../assets/GatoNocolo.png";
import pata from "../../assets/Iconepatinha.png";

export default function QuemSomos() {
    return (
      <main className="quem-somos-container">
        {/* Seção 1: Quem Somos */}
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
  
        {/* Seção 2: Missão e valores */}
        <section className="missao-valores">
            <div className="TituloMissao">
            <img src={pata} alt="Pata" className="pata" />
          <h2> Nossa Missão e valores </h2>
          <img src={pata} alt="Pata" className="pata" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, libero sed pretium fermentum, 
            nulla dui pharetra tellus, ut ullamcorper lorem nunc nec eros. Praesent velit felis, hendrerit eu sagittis a,  et ultrices posuere cubilia curae; Duis vel vehicula metus, 
            at auctor risus. Fusce nibh arcu, semper sit amet ultrices eleifend, pulvinar nec risus. Aliquam vel dictum lorem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  pharetra tellus, ut ullamcorper lorem nunc nec eros. Praesent velit felis, hendrerit eu sagittis a, 
            lobortis eget metus. In nec placerat neque. Vestibulum ante ipsum primis in faucibus orci ctor risus. 
            Fusce nibh arcu, semper sit amet ultrices eleifend, pulvinar nec risus. Aliquam vel dictum lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor.</p>
        

        </section>
  
        {/* Seção 3: Carrossel */}
        <section className="historias">
          <h2>Conheça Algumas de nossas histórias</h2>
          <Carousel />
        </section>
      </main>
    )
  }
