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
        historia: 'Lilinha foi resgatada das ruas e hoje é uma cachorrinha muito dócil e amorosa. Adora brincar e receber carinho.',
        genero: 'Fêmea',
        especie: 'Cachorro',
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
        historia: 'Biscoito é um gatinho muito tranquilo e companheiro. Adora dormir no colo e receber carinho.',
        genero: 'Macho',
        especie: 'Gato',
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
        historia: 'Júpiter é um cachorro extremamente amável, adora um colo, um cafuné e está sempre pronto para retribuir com lambidas e um olhar cheio de gratidão. Ele é sociável, tranquilo e se dá bem com pessoas e outros animais.',
        genero: 'Macho',
        especie: 'Cachorro',
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
        historia: 'Mel é uma gatinha muito protetora e leal.',
        genero: 'Fêmea',
        especie: 'Gato',
    },
    {
        id: 5,
        nome: 'Leon',
        imagem: '/src/assets/Leon.png',
        descricao: 'Cão forte e brincalhão',
        idade: '4 anos',
        raca: 'Pastor Alemão',
        porte: 'Grande',
        disponivel: true,
        historia: 'Leon adora correr e brincar no parque. Muito protetor e leal.',
        genero: 'Macho',
        especie: 'Gato',
    },
    {
        id: 6,
        nome: 'Frajola',
        imagem: '/src/assets/Frajola.png',
        descricao: 'Gato esperto e curioso',
        idade: '2 anos',
        raca: 'Vira-lata',
        porte: 'Médio',
        disponivel: true,
        historia: 'Frajola é muito curioso e adora explorar a casa.',
        genero: 'Macho',
        especie: 'Gato',
    },
    {
        id: 7,
        nome: 'Keke',
        imagem: '/src/assets/KekeMike.png',
        descricao: 'Cachorrinha animada e carinhosa',
        idade: '1 ano',
        raca: 'Poodle',
        porte: 'Pequeno',
        disponivel: true,
        historia: 'Keke é muito animada e adora brincar com crianças.',
        genero: 'Fêmea',
        especie: 'Cachorro',
    },
    {
        id: 8,
        nome: 'Gatuno',
        imagem: '/src/assets/GatoNocolo.png',
        descricao: 'Gato calmo e observador',
        idade: '5 anos',
        raca: 'Siamês',
        porte: 'Médio',
        disponivel: true,
        historia: 'Gatuno gosta de lugares altos e de observar o movimento.',
        genero: 'Macho',
        especie: 'Gato',
    },
    {
        id: 9,
        nome: 'Mike',
        imagem: '/src/assets/KekeMike.png',
        descricao: 'Cachorro companheiro e fiel',
        idade: '3 anos',
        raca: 'Labrador',
        porte: 'Grande',
        disponivel: true,
        historia: 'Mike é muito fiel e adora passeios longos.',
        genero: 'Macho',
        especie: 'Cachorro',
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