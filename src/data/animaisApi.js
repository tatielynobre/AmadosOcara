export const animaisData = [
    {
        id: 1,
        nome: 'Lilinha',
        imagem: '/src/assets/lilinha.png',
        descricao: 'Cachorrinha muito carinhosa e brincalhona',
        idade: '2 anos',
        raca: 'Vira-lata',
        porte: 'Médio',
        disponivel: true,
        historia: 'Lilinhas foi resgatada das ruas e hoje é uma cachorrinha muito dócil e amorosa. Adora brincar e receber carinho.'
        },
        {
        id: 2,
        nome: 'Biscoito',
        imagem: '/src/assets/biscoito.png',
        descricao: 'Gatinho dócil e muito companheiro',
        idade: '1 ano',
        raca: 'Vira-lata',
        porte: 'Pequeno',
        disponivel: true,
        historia: 'Biscoito é um gatinho muito tranquilo e companheiro. Adora dormir no colo e receber carinho.'
        },
        {
        id: 3,
        nome: 'Júpiter',
        imagem: '/src/assets/jupiter.png',
        descricao: 'Filhotinho muito energético e amoroso',
        idade: '6 meses',
        raca: 'Corgi',
        porte: 'Pequeno',
        disponivel: true,
        historia: 'Júpiter é um filhotinho muito energético e brincalhão. Sempre alegre e pronto para brincar.'
        },
        {
        id: 4,
        nome: 'Mel',
        imagem: '/src/assets/mel.png',
        descricao: 'Gatinha muito protetora e leal',
        idade: '3 anos',
        raca: 'Vira-lata',
        porte: 'Pequena',
        disponivel: true,
        historia: 'Mel é uma gatinha muito protetora e leal.'
        },
    ]
    
    export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    export const fetchAnimais = async () => {
        await delay(500);
        return { data: animaisData };
    };
    
    export const fetchAnimalById = async (id) => {
        await delay(300);
        const animal = animaisData.find(a => a.id === id);
        return { data: animal };
    }; 