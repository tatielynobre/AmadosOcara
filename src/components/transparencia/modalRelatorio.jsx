import React from 'react';
import './transparencia.css';

const ModalRelatorio = ({ mesAno, onClose }) => {
  const handleDownload = () => {
    alert(`Baixando PDF de ${mesAno}`);
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button onClick={onClose} className="close-x" aria-label="Fechar">×</button>
        <h2 className="modal-title">Relatório Mensal</h2>
        <div className="docIcon docIcon-modal">
          <span className="pdfIcon-modal">PDF</span>
        </div>
        <p className="modal-mes">{mesAno}</p>
        <button className="download" onClick={handleDownload}>
          Baixar PDF
        </button>
      </div>
    </div>
  );
};

export default ModalRelatorio;
