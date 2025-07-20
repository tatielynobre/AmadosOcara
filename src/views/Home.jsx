import Footer from '../components/footer/Footer';
import NavBar from '../components/navBar/navBar';
import Hero from '../components/hero/Hero';
import Sobre from '../components/sobre/Sobre';
import Amados from '../components/amados/Amados';
import Faq from '../components/faq/Faq';

function Home() {
    return (
    <>
        <NavBar />
        <Hero />
        <Sobre />
        <Amados />
        <Faq />
        <Footer />
    </>
    );
}

export default Home