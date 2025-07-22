import React from 'react';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import './ParceirosDiv.css';

export default function ParceirosDiv() {
  return (
    <div className="parceiros-bg">
      <h1 className="parceiros-titulo">Conheça nossos parceiros</h1>
      <div className="parceiros-cards">
        <div className="parceiro-bloco">
          <div className="parceiro-card">
            <img src={img1} alt="Parceiro 1" className="parceiro-img" />
          </div>
          <div className="descricao-parceiro">
            <h2>MundoPet</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="parceiro-bloco">
          <div className="parceiro-card">
            <img src={img2} alt="Parceiro 2" className="parceiro-img" />
          </div>
          <div className="descricao-parceiro">
            <h2>DogCare</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="parceiro-bloco">
          <div className="parceiro-card">
            <img src={img1} alt="Parceiro 3" className="parceiro-img" />
          </div>
          <div className="descricao-parceiro">
          <h2>MundoPet</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="parceiro-bloco">
          <div className="parceiro-card">
            <img src={img2} alt="Parceiro 4" className="parceiro-img" />
          </div>
          <div className="descricao-parceiro">
            <h2>DogCare</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <button className="parceiros-botao">Quero ser parceiro</button>
    </div>
  );
}
