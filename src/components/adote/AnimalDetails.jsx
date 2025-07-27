import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AnimalDetails.css';
import iconepatinha from '../../assets/iconepatinha2.png';
import { fetchAnimalById } from '../../data/animaisApi';

function AnimalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efeito para rolar para o topo sempre que o ID mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    async function getAnimal() {
      try {
        const res = await fetchAnimalById(parseInt(id));
        setAnimal(res.data);
      } catch (error) {
        console.error('Erro ao carregar animal:', error);
      } finally {
        setLoading(false);
      }
    }
    getAnimal();
  }, [id]);

  const handleBack = () => {
    navigate('/adote');
  };

  if (loading) {
    return <div className="animal-details-loading">Carregando...</div>;
  }

  if (!animal) {
    return <div className="animal-details-error">Animal não encontrado</div>;
  }

  return (
    <div className="animal-details-container">
      <button className="animal-details-back-btn" onClick={handleBack}>
        ← Voltar
      </button>
      
      <h1 className="animal-details-title">{animal.nome}</h1>
      
      <div className="animal-details-content">
        <div className="animal-details-info">
          <p className="animal-details-description">
            {animal.historia}
          </p>
          
          <div className="animal-details-details">
            <div className="animal-detail-item">
              <img src={iconepatinha} alt="Patinha" className="animal-detail-icon" />
              <span>Sexo: {animal.genero}</span>
            </div>
            
            <div className="animal-detail-item">
              <img src={iconepatinha} alt="Patinha" className="animal-detail-icon" />
              <span>Idade: {animal.idade}</span>
            </div>
            
            <div className="animal-detail-item">
              <img src={iconepatinha} alt="Patinha" className="animal-detail-icon" />
              <span>Fiv: Negativo</span>
            </div>
            
            <div className="animal-detail-item">
              <img src={iconepatinha} alt="Patinha" className="animal-detail-icon" />
              <span>Felv: Negativo</span>
            </div>
          </div>
          
          <button
          className="animal-details-adopt-btn"
          onClick={() => window.open('https://forms.gle/k1sVmVdZqkpr623V8', '_blank')}>
            Adotar
          </button>
        </div>
        
        <div className="animal-details-image-container">
          <img 
            src={animal.imagem} 
            alt={animal.nome} 
            className="animal-details-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default AnimalDetails; 