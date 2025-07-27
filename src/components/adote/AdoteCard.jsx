import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdoteCard.css'; 

function AdoteCard({ animal }) {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/adote/${animal.id}`);
  };

  return (
    <div className="adote-card">
      <img src={animal.imagem} alt={animal.nome} className="adote-card-image" />
      <div className="adote-card-content">
        <h3 className="adote-card-name">{animal.nome}</h3>
        <button 
          className="adote-card-button"
          onClick={handleShowDetails}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}

export default AdoteCard;