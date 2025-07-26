import { useEffect, useState } from 'react';
import { getArtigos } from '../services/artigosService';
import ArtigosLista from '../components/artigos/ArtigosLista';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/Footer';

function Artigos() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    getArtigos().then(setArtigos);
  }, []);

  return (
    <main className="artigos-view">
      <NavBar />
      <ArtigosLista artigos={artigos} />
      <Footer />
    </main>
  );
}

export default Artigos;