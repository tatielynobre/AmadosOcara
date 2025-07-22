import { useEffect, useState } from 'react';
import { getArtigos } from '../services/artigosService';
import ArtigosLista from '../components/artigos/ArtigosLista';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/Footer';

function Artigos() {
  const [artigos, setArtigos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getArtigos().then(data => {
      setArtigos(data);
      setCarregando(false);
    });
  }, []);

  return (
    <main className="artigos-view">
      <NavBar />
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ArtigosLista artigos={artigos} />
      )}
      <Footer />
    </main>
  );
}

export default Artigos;