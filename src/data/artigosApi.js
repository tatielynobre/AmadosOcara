import caoEgato from '../assets/caoEgato.jpg';
import biscoito from '../assets/biscoito.png';
import jupiter from '../assets/jupiter.png';

const artigos = [
  {
    id: 1,
    titulo: '5 dicas para cuidar melhor do seu Pet',
    resumo: 'Veja dicas essenciais para o bem-estar do seu animal de estimação.',
    conteudo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    imagem: caoEgato,
    data: '23/05/2025',
  },
  {
    id: 2,
    titulo: 'Como alimentar seu cachorro corretamente',
    resumo: 'Saiba como oferecer uma alimentação saudável e balanceada para seu cão.',
    conteudo: `Alimentação é fundamental para a saúde do seu pet. Descubra como escolher a melhor ração e a importância da água fresca.`,
    imagem: biscoito,
    data: '20/05/2025',
  },
  {
    id: 3,
    titulo: 'A importância das vacinas em gatos',
    resumo: 'Entenda por que vacinar seu gato é essencial para a saúde dele e da família.',
    conteudo: `Vacinas previnem doenças graves e garantem uma vida longa ao seu felino. Consulte sempre um veterinário.`,
    imagem: jupiter,
    data: '18/05/2025',
  },
  {
    id: 4,
    titulo: 'Como adaptar seu pet em um novo lar',
    resumo: 'Dicas para ajudar seu animal a se sentir seguro e confortável na nova casa.',
    conteudo: `A adaptação é um processo importante para o bem-estar do animal. Tenha paciência e ofereça carinho e segurança.`,
    imagem: caoEgato,
    data: '15/05/2025',
  },
  {
    id: 5,
    titulo: 'Brinquedos caseiros para pets',
    resumo: 'Aprenda a fazer brinquedos simples e seguros para entreter seu pet em casa.',
    conteudo: `Brinquedos estimulam o físico e a mente dos animais. Use materiais seguros e supervisione sempre as brincadeiras.`,
    imagem: biscoito,
    data: '12/05/2025',
  },
];

export async function getArtigos() {
  return new Promise(resolve => setTimeout(() => resolve(artigos), 300));
}

export async function getArtigoPorId(id) {
  return new Promise(resolve => setTimeout(() => resolve(artigos.find(a => a.id === Number(id))), 300));
} 