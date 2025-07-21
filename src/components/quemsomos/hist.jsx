import React, { useState } from 'react'
import './hist.css'
import Leon from '../../assets/Leon.png'
import Frajola from '../../assets/Frajola.png'
import KekeMike from '../../assets/KekeMike.png'

const dados = [
  {
    nome: 'Leon',
    texto: 'Leon foi resgatado em situação difícil, estava totalmente machucado, conseguimos resgata-lo e cuidar dele com ajuda de doadores e voluntários, agora Leon também tem um lar e vive feliz com sua família.',
    imagem: Leon,
  },
  {
    nome: 'Frajola',
    texto: 'Frajola foi acolhida após abandono, com ajuda de doadores e voluntários, conseguimos resgata-la e cuidar dele, agora Frajola também tem um lar e vive feliz com sua família.',
    imagem: Frajola,
  },
  {
    nome: 'Keke e Mike',
    texto: 'Keke e Mike teve um final feliz após resgate, eles viviam juntos para todo lado, e felizmente conseguimos resgata-los e cuidar dele, agora Keke e Mike também tem um lar e vivem felizes com sua família.',
    imagem: KekeMike,
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  const anterior = () => {
    setIndex(index === 0 ? dados.length - 1 : index - 1)
  }

  const proximo = () => {
    setIndex(index === dados.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="historias-container">
      <div className="slide">
        <button onClick={anterior} className="seta">&#8592;</button>
        <img src={dados[index].imagem} alt={dados[index].nome} />
        <div className="texto">
          <h3>{dados[index].nome}</h3>
          <p>{dados[index].texto}</p>
        </div>
        <button onClick={proximo} className="seta">&#8594;</button>
      </div>

      
      <div className="pontos">
        {dados.map((_, i) => (
          <span key={i} className={i === index ? 'ativo' : ''}></span>
        ))}
      </div>
    </div>
  )
}