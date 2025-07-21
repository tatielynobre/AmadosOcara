import './doe.css'
import doe from '../../assets/doe.png'

export default function DoacaoHeader() {
  return (
    <div className="doacao-header">
      <img src={doe} alt="Cachorro e Gato" />
      <h2>
        <strong>Faça uma doação</strong> e<br />
        transforme a vida de quem<br />
        não consegue pedir ajuda
      </h2>
    </div>
  );
}



