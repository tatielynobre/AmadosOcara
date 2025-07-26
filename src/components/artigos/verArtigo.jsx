import { useParams, useNavigate } from 'react-router-dom';
import { getArtigoPorId } from '../../services/artigosService';
import './verArtigo.css';
import { useEffect, useState } from 'react';

function VerArtigo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artigo, setArtigo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getArtigoPorId(id).then(a => {
      setArtigo(a);
      setCarregando(false);
    });
  }, [id]);

  if (carregando) return <div className="ver-artigo-loading">Carregando...</div>;
  if (!artigo) return <div className="ver-artigo-notfound">Artigo não encontrado</div>;

  // Divide o conteúdo em parágrafos
  const paragrafos = artigo.conteudo.split('\n').filter(Boolean);

  return (
    <div className="ver-artigo-container">
      <div className="ver-artigo-header">
        <button className="voltar-btn" onClick={() => navigate('/artigos')}>← Voltar</button>
        <h2 className="ver-artigo-titulo">{artigo.titulo}</h2>
      </div>
      <div className="ver-artigo-topo-flex">
        <img src={artigo.imagem} alt="Artigo" className="ver-artigo-img" />
        {paragrafos[0] && (
          <p className="ver-artigo-primeiro-paragrafo">{paragrafos[0]}</p>
        )}
      </div>
      <div className="ver-artigo-conteudo">
        {paragrafos.slice(1).map((p, i) => (
          <p className="ver-artigo-paragrafo" key={i}>{p}</p>
        ))}
      </div>
      <div className="ver-artigo-data">Publicado em {artigo.data}</div>
    </div>
  );
}

export default VerArtigo;
