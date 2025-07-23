import { Link } from 'react-router-dom';
import './CartaoArtigo.css';

export default function CartaoArtigo({ id, titulo, resumo, imagem, data }) {
  return (
    <Link to={`/artigos/${id}`} className="cartao-artigo-link">
      <article className="cartao-artigo">
        <figure className="cartao-artigo__imagem-fig">
          <img src={imagem} alt={titulo} className="cartao-artigo__imagem" />
        </figure>
        <div className="cartao-artigo__conteudo">
          <header>
            <h2 className="cartao-artigo__titulo">{titulo}</h2>
          </header>
          <section>
            <p className="cartao-artigo__resumo">{resumo}</p>
            <p className="cartao-artigo__data">Publicado em: {data}</p>
          </section>
        </div>
      </article>
    </Link>
  );
}
