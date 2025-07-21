import './doe.css'
import frame from "../../assets/frame.png";

function MetodoDoacao({ titulo, dados, qrCode }) {
  return (
    <div className="metodo-doacao">
      <h3>{titulo}</h3>
      {dados.map((linha, idx) => (
        <p key={idx}>{linha}</p>
      ))}
      {qrCode && <img src={qrCode} alt={`QR Code ${titulo}`} />}
    </div>
  );
}

export default function ComoDoar() {
  return (
    <div className="metodos-container">
      <MetodoDoacao
        titulo="Doe com o pix"
        dados={[
          "Banco: xxxx",
          "Agência: xxxxxx-xxxxx-xxxx",
          "CNPJ: xxxxxxxxxx",
          "Razão Social: Amados",
          "Pix: Amados@xxxxx",
          "Ou escaneie o QR-Code abaixo."
        ]}
        qrCode={frame}
      />

      <MetodoDoacao
        titulo="Doe com um boleto"
        dados={[
          "Banco: xxxx",
          "Agência: xxxxxx-xxxxx-xxxx",
          "CNPJ: xxxxxxxxxx",
          "Razão Social: Amados",
          "Ou escaneie o QR-Code abaixo.",
          "",
        ]}
        qrCode={frame}
      />
    </div>
  );
}