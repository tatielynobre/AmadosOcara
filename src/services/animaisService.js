import axios from 'axios';
import { fetchAnimais, fetchAnimalById } from '../data/animaisApi';


const api = axios.create({
    baseURL: 'https://api-amados-ocara.com', 
    timeout: 5000,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
    if (error.config.url.includes('/animais')) {
        try {
        const mockData = await fetchAnimais();
        return Promise.resolve(mockData);
        } catch (mockError) {
        return Promise.reject(mockError);
        }
    }
    return Promise.reject(error);
    }
);

export const getAnimais = async () => {
    try {
    const response = await api.get('/animais');
    return response.data;
    } catch (error) {
    console.log('Usando dados mock da API');
    const mockResponse = await fetchAnimais();
    return mockResponse.data;
    }
};


export const getAnimalById = async (id) => {
    try {
    const response = await api.get(`/animais/${id}`);
    return response.data;
    } catch (error) {
    console.log('Usando dados mock da API');
    const mockResponse = await fetchAnimalById(id);
    return mockResponse.data;
    }
};


export const getAnimaisDisponiveis = async () => {
    try {
    const response = await api.get('/animais?disponivel=true');
    return response.data;
    } catch (error) {
    console.log('Usando dados mock da API');
    const mockResponse = await fetchAnimais();
    const animaisDisponiveis = mockResponse.data.filter(animal => animal.disponivel);
    return animaisDisponiveis;
    }
};


export const getAnimaisPorTipo = async (tipo) => {
    try {
    const response = await api.get(`/animais?tipo=${tipo}`);
    return response.data;
    } catch (error) {
    console.log('Usando dados mock da API');
    const mockResponse = await fetchAnimais();
    const animaisFiltrados = mockResponse.data.filter(animal => 
        animal.raca.toLowerCase().includes(tipo.toLowerCase())
    );
    return animaisFiltrados;
    }
};

export default api; 