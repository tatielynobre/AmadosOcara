import NavBar from "../components/navBar/navBar";
import ComoDoar from "../components/doe/comoDoar.jsx";
import ContatoAjuda from "../components/doe/contatoAjuda.jsx";
import DoacaoHeader from "../components/doe/doeHeader.jsx";
import Footer from "../components/footer/Footer";

function Doe() {
  return (
    <>
      <NavBar />
      <DoacaoHeader />
      <ComoDoar />
      <ContatoAjuda />
      <Footer />
    </>
  );
}
export default Doe;
