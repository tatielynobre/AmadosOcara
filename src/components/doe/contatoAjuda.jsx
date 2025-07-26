import './doe.css'
import mailIcon from '../../assets/mail.png';

export default function ContatoAjuda() {
  return (
    <div className="contato-ajuda">
      <h3><strong>Quer ajudar de outra maneira?</strong></h3>
      <p>
        <img src={mailIcon} alt="E-mail" />
        <span>E-mail: contato@Amados.org.br</span>
      </p>
    </div>
  );
}