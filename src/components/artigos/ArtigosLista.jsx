import { useState, useEffect } from 'react';
import lupa from '../../assets/lupa.png';
import CartaoArtigo from './CartaoArtigo';
import './Artigos.css';

const POR_PAGINA = 3;

export default function ArtigosLista({ artigos }) {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(artigos);
  const [paginaAtual, setPaginaAtual] = useState(1);

  function handleBuscar() {
    if (busca.trim() === '') {
      setResultado(artigos);
    } else {
      setResultado(
        artigos.filter(a => a.titulo.includes(busca))
      );
    }
    setPaginaAtual(1); 
  }

  useEffect(() => {
    setResultado(artigos);
    setPaginaAtual(1); 
  }, [artigos]);

  const totalPaginas = Math.ceil(resultado.length / POR_PAGINA);
  const inicio = (paginaAtual - 1) * POR_PAGINA;
  const fim = inicio + POR_PAGINA;
  const artigosPagina = resultado.slice(inicio, fim);

  const handleAnterior = () => setPaginaAtual(p => Math.max(1, p - 1));
  const handleProxima = () => setPaginaAtual(p => Math.min(totalPaginas, p + 1));

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
        {artigosPagina.map(artigo => (
          <CartaoArtigo
            key={artigo.id}
            id={artigo.id}
            titulo={artigo.titulo}
            resumo={artigo.resumo}
            imagem={artigo.imagem}
            data={artigo.data}
          />
        ))}
        {artigosPagina.length === 0 && (
          <p className="artigos-sem-resultado">Nenhum artigo encontrado.</p>
        )}
      </section>
      {totalPaginas > 1 && (
        <div className="artigos-paginacao">
          <button
            className="paginacao-seta"
            onClick={handleAnterior}
            disabled={paginaAtual === 1}
            aria-label="Página anterior"
          >
            &#8592;
          </button>
          {Array.from({ length: totalPaginas }, (_, idx) => (
            <span
              key={idx + 1}
              className={`paginacao-numero${paginaAtual === idx + 1 ? ' ativo' : ''}`}
              onClick={() => setPaginaAtual(idx + 1)}
              style={{ cursor: 'pointer' }}
            >
              {idx + 1}
            </span>
          ))}
          <button
            className="paginacao-seta"
            onClick={handleProxima}
            disabled={paginaAtual === totalPaginas}
            aria-label="Próxima página"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}