import React from 'react';
import './AdoteSearch.css'; // Vamos criar este arquivo de CSS
import lupa from '../../assets/lupa.png';

function AdoteSearch({
  searchTerm,
  setSearchTerm,
  selectedGender,
  setSelectedGender,
  selectedSpecies,
  setSelectedSpecies,
}) {
  return (
    <div className="adote-search-bar">
      <div className="search-input-group">
        <label htmlFor="search-name">Pesquisar nome do amado</label>
        <div className="input-with-icon">
          <input
            type="text"
            id="search-name"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            <img src={lupa} alt="Lupa" />
          </button>
        </div>
      </div>

      <div className="filter-select-group">
        <label htmlFor="gender-select">Sexo</label>
        <select
          id="gender-select"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>

      <div className="filter-select-group">
        <label htmlFor="species-select">Espécie</label>
        <select
          id="species-select"
          value={selectedSpecies}
          onChange={(e) => setSelectedSpecies(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
          {/* Adicione outras espécies se houver */}
        </select>
      </div>
    </div>
  );
}

export default AdoteSearch;