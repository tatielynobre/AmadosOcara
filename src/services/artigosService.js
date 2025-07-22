import axios from 'axios';
import { getArtigos as fetchArtigos, getArtigoPorId as fetchArtigoPorId } from '../data/artigosApi';

const api = axios.create({
  baseURL: 'https://api-fake-amados-ocara.com',
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.config.url.includes('/artigos')) {
      try {
        const mockData = error.config.url.includes('/artigos/')
          ? await fetchArtigoPorId(error.config.url.split('/').pop())
          : await fetchArtigos();
        return Promise.resolve({ data: mockData });
      } catch (mockError) {
        return Promise.reject(mockError);
      }
    }
    return Promise.reject(error);
  }
);

export const getArtigos = async () => {
  try {
    const response = await api.get('/artigos');
    return response.data;
  } catch (error) {
    return await fetchArtigos();
  }
};

export const getArtigoPorId = async (id) => {
  try {
    const response = await api.get(`/artigos/${id}`);
    return response.data;
  } catch (error) {
    return await fetchArtigoPorId(id);
  }
};

export default api; 