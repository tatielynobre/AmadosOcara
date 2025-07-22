import './doe.css'
import mailIcon from '../../assets/mail.png';

export default function ContatoAjuda() {
  return (
    <div className="contato-ajuda">
      <h3><strong>Quer ajudar de outra maneira?</strong></h3>
      <p><img src={mailIcon} alt="E-mail" style={{ width: 22, verticalAlign: 'middle', marginRight: 8 }} />E-mail: contato@Amados.org.br</p>
    </div>
  );
}