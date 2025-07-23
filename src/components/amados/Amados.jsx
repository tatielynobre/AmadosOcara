import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnimais } from '../../services/animaisService';
import './Amados.css';

const Amados = () => {
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAnimais = async () => {
        try {
            setLoading(true);
            const data = await getAnimais();
            const animaisPrincipais = data.slice(0, 3);
            setAnimais(animaisPrincipais);
            setError(null);
        } catch (err) {
            console.error('Erro ao buscar animais:', err);
            setError('Erro ao carregar os animais. Tente novamente.');
        } finally {
            setLoading(false);
        }
        };

        fetchAnimais();
    }, []);

    const handleSaibaMais = (animalId) => {
        console.log(`Ver detalhes do animal ${animalId}`);
    };

    const handleVerTodosAnimais = () => {
        console.log('Ver todos os animais disponíveis');
    };

    if (loading) {
        return (
        <section className="amados">
            <div className="amados-container">
            <div className="loading">Carregando nossos amados...</div>
            </div>
        </section>
        );
    }

    if (error) {
        return (
        <section className="amados">
            <div className="amados-container">
            <div className="error">{error}</div>
            </div>
        </section>
        );
    }

    return (
        <section className="amados">
        <div className="amados-container">
            <h2 className="amados-titulo">Alguns dos Nossos Amados</h2>
            
            <div className="amados-cards">
            {animais.map((animal) => (
                <div key={animal.id} className="amado-card">
                <div className="amado-imagem">
                    <img 
                    src={animal.imagem} 
                    alt={animal.nome}
                    onError={(e) => {
                        e.target.src = '/src/assets/placeholder.jpg'; 
                    }}
                    />
                </div>
                <h3 className="amado-nome">{animal.nome}</h3>
                <button 
                    className="amado-btn-saiba-mais"
                    onClick={() => handleSaibaMais(animal.id)}
                >
                    Saiba mais
                </button>
                </div>
            ))}
            </div>
            
            <div className="amados-cta">
            <button className="amados-btn-principal" onClick={() => navigate('/adote')}>
                Conheça os animais disponíveis
            </button>
            </div>
        </div>
        </section>
    );
};

export default Amados; 