import React, { useState, useEffect } from 'react';
import './Adote.css';
import AdoteSearch from './AdoteSearch';
import AdoteCard from './AdoteCard';
import { fetchAnimais } from '../../data/animaisApi';

function Adote() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');

  useEffect(() => {
    async function getAnimais() {
      const res = await fetchAnimais();
      setAnimals(res.data);
      setFilteredAnimals(res.data);
    }
    getAnimais();
  }, []);

  useEffect(() => {
    let filtered = animals;
    if (searchTerm) {
      filtered = filtered.filter(animal =>
        animal.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedGender) {
      filtered = filtered.filter(animal => animal.genero === selectedGender);
    }
    if (selectedSpecies) {
      filtered = filtered.filter(animal => animal.especie === selectedSpecies);
    }
    setFilteredAnimals(filtered);
  }, [searchTerm, selectedGender, selectedSpecies, animals]);

  return (
    <div className="adote-container">
      <h1 className="adote-title">Amados disponíveis para adoção</h1>
      <AdoteSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />
      <div className="adote-grid">
        {filteredAnimals.map(animal => (
          <AdoteCard key={animal.id} animal={animal} />
        ))}
      </div>
      <div className="adote-final-box">
        <h2 className="adote-final-title">Está buscando algum animal?</h2>
        <button className="adote-final-btn">Demonstrar interesse</button>
      </div>
    </div>
  );
}

export default Adote;