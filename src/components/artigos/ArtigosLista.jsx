import { useState, useEffect } from 'react';
import lupa from '../../assets/lupa.png';
import CartaoArtigo from './CartaoArtigo';
import './Artigos.css';

export default function ArtigosLista({ artigos }) {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(artigos);

  function handleBuscar() {
    if (busca.trim() === '') {
      setResultado(artigos);
    } else {
      setResultado(
        artigos.filter(a => a.titulo.includes(busca))
      );
    }
  }

  useEffect(() => {
    setResultado(artigos);
  }, [artigos]);

  return (
    <div className="artigos-container">
      <div className="artigos-cabecalho">
        <h1 className="artigos-titulo">Artigos</h1>
        <div className="artigos-busca">
          <input
            type="text"
            placeholder="Buscar"
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="artigos-busca-input"
          />
          <button onClick={handleBuscar} className="artigos-busca-btn">
            <img src={lupa} alt="Buscar" className="artigos-busca-icone" />
          </button>
        </div>
      </div>
      <section className="artigos-cards">
        {resultado.map(artigo => (
          <CartaoArtigo
            key={artigo.id}
            id={artigo.id}
            titulo={artigo.titulo}
            resumo={artigo.resumo}
            imagem={artigo.imagem}
            data={artigo.data}
          />
        ))}
        {resultado.length === 0 && (
          <p className="artigos-sem-resultado">Nenhum artigo encontrado.</p>
        )}
      </section>
    </div>
  );
}