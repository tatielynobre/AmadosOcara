import React, { useState, useEffect } from 'react';
import RelatorioCard from './relatorioCard';
import './transparencia.css';

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const ANOS = [2023, 2024, 2025];
const POR_PAGINA = 12;

export default function RelatorioGrid({ mesFiltro, anoFiltro, onCardClick }) {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const relatorios = [];
  for (let ano of ANOS) {
    for (let mes of MESES) {
      relatorios.push(`${mes.toUpperCase()}.${ano}`);
    }
  }
  const relatoriosFiltrados = relatorios.filter(r =>
    (mesFiltro === '' || r.toLowerCase().includes(mesFiltro.toLowerCase())) &&
    (anoFiltro === '' || r.includes(anoFiltro))
  );

  const totalPaginas = Math.ceil(relatoriosFiltrados.length / POR_PAGINA);
  const inicio = (paginaAtual - 1) * POR_PAGINA;
  const fim = inicio + POR_PAGINA;
  const relatoriosPagina = relatoriosFiltrados.slice(inicio, fim);

  const handleAnterior = () => setPaginaAtual(p => Math.max(1, p - 1));
  const handleProxima = () => setPaginaAtual(p => Math.min(totalPaginas, p + 1));

  useEffect(() => {
    setPaginaAtual(1);
  }, [mesFiltro, anoFiltro]);

  return (
    <div className="relatorio-grid-container">
      <div className="relatorio-grid">
        {relatoriosPagina.map((r, i) => (
          <RelatorioCard
            key={i}
            mesAno={r}
            onClick={() => onCardClick(r)}
          />
        ))}
      </div>
      {totalPaginas > 1 && (
        <div className="paginacao-relatorio">
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