import './ParceirosDiv.css';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';

const parceiros = [
  { nome: 'MundoPet', imagem: img1, descricao: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { nome: 'DogCare',  imagem: img2, descricao: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { nome: 'DogCare',  imagem: img2, descricao: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { nome: 'MundoPet', imagem: img1, descricao: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

export default function ParceirosDiv() {
  return (
    <section className="parceiros">
      <h2 className="titulo">Conheça nossos parceiros</h2>
      <div className="cards">
        {parceiros.map((p, i) => (
          <div key={i} className="card">
            <div className="img-box">
              <img src={p.imagem} alt={p.nome} />
            </div>
            <h3 className="card-nome">{p.nome}</h3>
            <p className="card-desc">{p.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botao-container">
        <button className="botao-parceiro">Quero ser parceiro</button>
      </div>
    </section>
  );
}
