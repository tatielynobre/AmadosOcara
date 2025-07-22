import React from 'react';
import './transparencia.css';

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const ANOS = [2023, 2024, 2025];

export default function FiltroBusca({ mes, ano, onMesChange, onAnoChange }) {
  return (
    <div className="filtros-container">
      <div className="filtro">
        <label>Mês</label>
        <select value={mes} onChange={e => onMesChange(e.target.value)}>
          <option value="">Todos</option>
          {MESES.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="filtro">
        <label>Ano</label>
        <select value={ano} onChange={e => onAnoChange(e.target.value)}>
          <option value="">Todos</option>
          {ANOS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
    </div>
  );
}
