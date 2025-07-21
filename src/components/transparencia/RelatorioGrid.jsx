import React from 'react';
import RelatorioCard from './relatorioCard';
import './transparencia.css';

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const ANOS = [2022,2023, 2024, 2025];

export default function RelatorioGrid({ mesFiltro, anoFiltro, onCardClick }) {
  // Simulação de relatórios
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
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px',
        marginTop: '40px',
        justifyItems: 'center',
        maxWidth: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '60px'
      }}
    >
      {relatoriosFiltrados.map((r, i) => (
        <RelatorioCard
          key={i}
          mesAno={r}
          onClick={() => onCardClick(r)}
        />
      ))}
    </div>
  );
} 