import React from 'react';
import './transparencia.css';

const RelatorioCard = ({ mesAno, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="docIcon"></div>
      <span className="pdfIcon">PDF</span>
      <p>{mesAno}</p>
    </div>
  );
};

export default RelatorioCard;
