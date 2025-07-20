import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/src/views/Home';
import Quemsomos from '/src/views/Quemsomos';
import Adote from '/src/views/Adote';
import Parceiros from '/src/views/Parceiros';
import Artigos from '/src/views/Artigos';
import Transparencia from '/src/views/Transparencia';
import Doe from '/src/views/Doe';


import './App.css'

function App() {
  return (
    <Router>   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<Quemsomos />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/doe" element={<Doe />} />
      </Routes>
    </Router>
  );
}


export default App
