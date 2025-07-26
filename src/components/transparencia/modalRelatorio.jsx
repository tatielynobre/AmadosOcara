import React from 'react';
import './transparencia.css';

const ModalRelatorio = ({ mesAno, onClose }) => {
  const getPdfUrl = (mesAno) => {
    const [mes, ano] = mesAno.split('.');
    const mesFormatado = mes.charAt(0) + mes.slice(1).toLowerCase();
    return `/assets/${mesFormatado}-${ano}.pdf`;
  };

  const handleDownload = async () => {
    const url = getPdfUrl(mesAno);
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        const [mes, ano] = mesAno.split('.');
        const mesFormatado = mes.charAt(0) + mes.slice(1).toLowerCase();
        const link = document.createElement('a');
        link.href = url;
        link.download = `${mesFormatado}-${ano}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('PDF não disponível para este relatório.');
      }
    } catch (e) {
      alert('PDF não disponível para este relatório.');
    }
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
